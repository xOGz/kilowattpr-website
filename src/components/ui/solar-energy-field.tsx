'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Solar Energy Field — 3D animated hero background for Kilowatt PR
 *
 * A radiant energy field visualization:
 * - Central glowing sun/energy core with pulsing amber light
 * - Orbiting energy particles that trace paths like electrons
 * - A grid of solar panel cells that shimmer with captured light
 * - Rising energy streams (like heat distortion) in cyan
 * - Deep navy void with atmospheric fog
 */
export default function SolarEnergyField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // ─── Scene setup ────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a2e, 0.00018);

    const camera = new THREE.PerspectiveCamera(55, width / height, 1, 8000);
    camera.position.set(0, 280, 1100);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // ─── Colors ─────────────────────────────────────────────────
    const AMBER = new THREE.Color(0xf5a623);
    const GOLD_DARK = new THREE.Color(0xe09500);
    const CYAN = new THREE.Color(0x3dd8f5);
    const CYAN_BRIGHT = new THREE.Color(0x00e5ff);
    const NAVY = new THREE.Color(0x121240);

    // ─── Central energy core (pulsing sun) ──────────────────────
    const coreGeometry = new THREE.SphereGeometry(30, 32, 32);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: AMBER,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    core.position.set(350, 120, -400);
    scene.add(core);

    // Core glow (larger transparent sphere)
    const glowGeometry = new THREE.SphereGeometry(80, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: AMBER,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    glow.position.copy(core.position);
    scene.add(glow);

    // Outer halo
    const haloGeometry = new THREE.SphereGeometry(150, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: GOLD_DARK,
      transparent: true,
      opacity: 0.03,
      side: THREE.BackSide,
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.position.copy(core.position);
    scene.add(halo);

    // ─── Solar panel grid ───────────────────────────────────────
    const gridGroup = new THREE.Group();
    const COLS = 28;
    const ROWS = 20;
    const CELL_SIZE = 80;
    const GAP = 6;

    // Create instanced mesh for the grid cells
    const cellGeometry = new THREE.PlaneGeometry(CELL_SIZE - GAP, CELL_SIZE - GAP);
    const cellMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x1a1a50),
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
    });

    const cellCount = COLS * ROWS;
    const cellMesh = new THREE.InstancedMesh(cellGeometry, cellMaterial, cellCount);
    const dummy = new THREE.Object3D();

    // Store cell positions for animation
    const cellPositions: { x: number; z: number; baseOpacity: number }[] = [];

    let idx = 0;
    for (let col = 0; col < COLS; col++) {
      for (let row = 0; row < ROWS; row++) {
        const x = col * CELL_SIZE - (COLS * CELL_SIZE) / 2;
        const z = row * CELL_SIZE - (ROWS * CELL_SIZE) / 2;

        dummy.position.set(x, 0, z);
        dummy.rotation.x = -Math.PI / 2;
        dummy.updateMatrix();
        cellMesh.setMatrixAt(idx, dummy.matrix);

        // Cells closer to the core glow brighter
        const dist = Math.sqrt(
          (x - core.position.x) ** 2 + (z - core.position.z) ** 2
        );
        const baseOpacity = Math.max(0.1, 0.5 - dist * 0.0004);
        cellPositions.push({ x, z, baseOpacity });

        // Tint cells near the core with amber
        const color = new THREE.Color();
        const t = Math.max(0, 1 - dist / 800);
        color.lerpColors(NAVY, AMBER, t * 0.15);
        cellMesh.setColorAt(idx, color);

        idx++;
      }
    }
    cellMesh.instanceColor!.needsUpdate = true;
    gridGroup.add(cellMesh);
    gridGroup.position.y = -60;
    scene.add(gridGroup);

    // ─── Grid lines (subtle wireframe effect) ───────────────────
    const linesMaterial = new THREE.LineBasicMaterial({
      color: CYAN,
      transparent: true,
      opacity: 0.06,
    });

    // Horizontal lines
    for (let row = 0; row <= ROWS; row++) {
      const z = row * CELL_SIZE - (ROWS * CELL_SIZE) / 2;
      const points = [
        new THREE.Vector3(-(COLS * CELL_SIZE) / 2, -59, z),
        new THREE.Vector3((COLS * CELL_SIZE) / 2, -59, z),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, linesMaterial);
      scene.add(line);
    }

    // Vertical lines
    for (let col = 0; col <= COLS; col++) {
      const x = col * CELL_SIZE - (COLS * CELL_SIZE) / 2;
      const points = [
        new THREE.Vector3(x, -59, -(ROWS * CELL_SIZE) / 2),
        new THREE.Vector3(x, -59, (ROWS * CELL_SIZE) / 2),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(lineGeo, linesMaterial);
      scene.add(line);
    }

    // ─── Energy particles (orbiting + floating) ─────────────────
    const PARTICLE_COUNT = 600;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleSizes = new Float32Array(PARTICLE_COUNT);
    const particleColors = new Float32Array(PARTICLE_COUNT * 3);

    // Store particle data for animation
    const particleData: {
      type: 'orbit' | 'rise' | 'float';
      angle: number;
      radius: number;
      speed: number;
      phase: number;
      baseY: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const type: 'orbit' | 'rise' | 'float' =
        i < 120 ? 'orbit' : i < 300 ? 'rise' : 'float';

      let angle = Math.random() * Math.PI * 2;
      let radius = 0;
      let speed = 0;
      let phase = Math.random() * Math.PI * 2;
      let baseY = 0;

      if (type === 'orbit') {
        // Particles orbiting the energy core
        radius = 60 + Math.random() * 200;
        speed = 0.3 + Math.random() * 0.5;
        baseY = core.position.y + (Math.random() - 0.5) * 100;
        particleSizes[i] = 3 + Math.random() * 5;

        // Amber/gold orbit particles
        const c = new THREE.Color().lerpColors(AMBER, GOLD_DARK, Math.random());
        particleColors[i * 3] = c.r;
        particleColors[i * 3 + 1] = c.g;
        particleColors[i * 3 + 2] = c.b;
      } else if (type === 'rise') {
        // Rising energy streams
        const spread = 800;
        particlePositions[i * 3] = (Math.random() - 0.5) * spread * 2;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * spread;
        baseY = -60 + Math.random() * 20;
        speed = 0.3 + Math.random() * 0.8;
        particleSizes[i] = 1.5 + Math.random() * 3;

        // Cyan rising particles
        const c = new THREE.Color().lerpColors(CYAN, CYAN_BRIGHT, Math.random());
        particleColors[i * 3] = c.r;
        particleColors[i * 3 + 1] = c.g;
        particleColors[i * 3 + 2] = c.b;
      } else {
        // Ambient floating particles
        particlePositions[i * 3] = (Math.random() - 0.5) * 2000;
        particlePositions[i * 3 + 1] = Math.random() * 500 - 50;
        particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 1500;
        speed = 0.05 + Math.random() * 0.15;
        particleSizes[i] = 1 + Math.random() * 2;

        // Mix of amber and cyan
        const useAmber = Math.random() > 0.4;
        const c = useAmber
          ? new THREE.Color().lerpColors(AMBER, GOLD_DARK, Math.random())
          : new THREE.Color().lerpColors(CYAN, CYAN_BRIGHT, Math.random());
        c.multiplyScalar(0.6 + Math.random() * 0.4);
        particleColors[i * 3] = c.r;
        particleColors[i * 3 + 1] = c.g;
        particleColors[i * 3 + 2] = c.b;
      }

      particleData.push({ type, angle, radius, speed, phase, baseY });
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'size',
      new THREE.BufferAttribute(particleSizes, 1)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ─── Energy rays from core ──────────────────────────────────
    const RAY_COUNT = 8;
    const rays: THREE.Line[] = [];

    for (let i = 0; i < RAY_COUNT; i++) {
      const angle = (i / RAY_COUNT) * Math.PI * 2;
      const length = 200 + Math.random() * 300;
      const rayPoints = [
        new THREE.Vector3(
          core.position.x,
          core.position.y,
          core.position.z
        ),
        new THREE.Vector3(
          core.position.x + Math.cos(angle) * length,
          core.position.y + (Math.random() - 0.3) * 100,
          core.position.z + Math.sin(angle) * length
        ),
      ];
      const rayGeo = new THREE.BufferGeometry().setFromPoints(rayPoints);
      const rayMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? AMBER : CYAN,
        transparent: true,
        opacity: 0.1 + Math.random() * 0.1,
        blending: THREE.AdditiveBlending,
      });
      const ray = new THREE.Line(rayGeo, rayMat);
      rays.push(ray);
      scene.add(ray);
    }

    // ─── Ambient light for atmosphere ───────────────────────────
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    // ─── Animation loop ─────────────────────────────────────────
    let time = 0;
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.008;

      // Pulse the core
      const pulse = 1 + Math.sin(time * 2) * 0.15;
      core.scale.set(pulse, pulse, pulse);
      coreMaterial.opacity = 0.7 + Math.sin(time * 2) * 0.2;
      glowMaterial.opacity = 0.05 + Math.sin(time * 1.5) * 0.03;
      glow.scale.set(pulse * 1.1, pulse * 1.1, pulse * 1.1);
      halo.scale.set(1 + Math.sin(time) * 0.05, 1 + Math.sin(time) * 0.05, 1 + Math.sin(time) * 0.05);

      // Animate particles
      const pos = particleGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const data = particleData[i];

        if (data.type === 'orbit') {
          data.angle += data.speed * 0.01;
          pos[i * 3] = core.position.x + Math.cos(data.angle) * data.radius;
          pos[i * 3 + 1] =
            data.baseY + Math.sin(data.angle * 2 + data.phase) * 30;
          pos[i * 3 + 2] = core.position.z + Math.sin(data.angle) * data.radius;
        } else if (data.type === 'rise') {
          pos[i * 3 + 1] += data.speed;
          // Reset when too high
          if (pos[i * 3 + 1] > 400) {
            pos[i * 3 + 1] = data.baseY;
            pos[i * 3] = (Math.random() - 0.5) * 1600;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 800;
          }
        } else {
          // Gentle floating drift
          pos[i * 3] += Math.sin(time + data.phase) * data.speed;
          pos[i * 3 + 1] += Math.cos(time * 0.7 + data.phase) * data.speed * 0.5;
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;

      // Shimmer the grid cells (wave of light across the panel grid)
      const waveX = Math.sin(time * 0.5) * 600;
      const waveZ = Math.cos(time * 0.3) * 400;

      for (let i = 0; i < cellCount; i++) {
        const cell = cellPositions[i];
        const dx = cell.x - waveX;
        const dz = cell.z - waveZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const shimmer = Math.max(0, 1 - dist / 300) * 0.3;

        const color = new THREE.Color();
        const t = shimmer;
        color.lerpColors(NAVY, AMBER, t);
        cellMesh.setColorAt(i, color);
      }
      cellMesh.instanceColor!.needsUpdate = true;

      // Rotate rays slowly
      for (let i = 0; i < rays.length; i++) {
        const ray = rays[i];
        const mat = ray.material as THREE.LineBasicMaterial;
        mat.opacity = 0.06 + Math.sin(time * 1.5 + i) * 0.06;
      }

      // Gentle camera sway
      camera.position.x = Math.sin(time * 0.15) * 40;
      camera.position.y = 280 + Math.sin(time * 0.2) * 15;
      camera.lookAt(0, 30, -200);

      renderer.render(scene, camera);
    };

    // ─── Resize handler ─────────────────────────────────────────
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // ─── Cleanup ────────────────────────────────────────────────
    cleanupRef.current = () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((m) => m.dispose());
          } else {
            object.material.dispose();
          }
        }
        if (object instanceof THREE.Line) {
          object.geometry.dispose();
          (object.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
    />
  );
}
