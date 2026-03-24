# Kilowatt PR — Sitio Web Oficial

Sitio web estático de Kilowatt PR LLC construido con Next.js 14, Tailwind CSS y TypeScript.

## Setup Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev
# Abre http://localhost:3000

# Build de producción
npm run build
# Genera la carpeta /out con el sitio estático
```

## Estructura del Proyecto

```
src/
  app/           — Rutas (App Router de Next.js)
  components/    — Componentes reutilizables
  data/          — Datos de contenido (municipios, siteConfig)
public/          — Archivos estáticos (robots.txt, llms.txt, imágenes)
```

## Cómo Agregar un Blog Post

1. Crear una carpeta en `src/app/blog/[slug-del-post]/`
2. Crear `page.tsx` basándote en los posts existentes como plantilla
3. Incluir `ArticleSchema` y `FAQSchema` al inicio
4. El post debe tener: H1, autor "Equipo Kilowatt PR", fecha visible, 800+ palabras, FAQ al final
5. Agregar el post al índice en `src/app/blog/page.tsx`

## Cómo Actualizar Información de Negocio

Toda la información de contacto y configuración del sitio está en:
`src/data/siteConfig.ts`

Para actualizar nombre del equipo, licencias o certificaciones, edita:
`src/app/sobre-nosotros/page.tsx` — busca `[Nombre]` y `[Licencia Num.]`

## Cómo Desplegar en Vercel

1. Push del código a un repositorio en GitHub
2. Ir a [vercel.com](https://vercel.com) → New Project
3. Conectar el repositorio de GitHub
4. Vercel detectará automáticamente Next.js y usará la configuración de `vercel.json`
5. Asignar el dominio `kilowattpr.com` en Settings → Domains

El build command es `npm run build` y el output directory es `out` (ya configurado en `vercel.json`).

## Notas Importantes

- **No mencionar "fundado en 2008"** ni "17 años de experiencia" — ver trust anchor en `siteConfig.ts`
- El sitio es completamente estático (`output: 'export'`) — no hay servidor ni API routes
- Las imágenes del Hero usan Unsplash — reemplazar con fotos reales del cliente
- El formulario de contacto usa FormSubmit.co — reemplazar con el email correcto en `src/app/contacto/page.tsx`
- Los testimonios son placeholder — reemplazar con reseñas reales del cliente
