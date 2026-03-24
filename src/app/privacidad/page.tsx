import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Kilowatt PR LLC.',
  alternates: { canonical: 'https://www.kilowattpr.com/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold text-navy-dark mb-8">Política de Privacidad</h1>

      <div className="prose prose-lg max-w-none text-gray-600">
        <p className="text-sm text-gray-400 mb-6">Última actualización: 1 de enero de 2026</p>

        <p>
          Kilowatt PR LLC ("nosotros", "nuestro" o "la empresa") opera el sitio web
          www.kilowattpr.com. Esta página le informa sobre nuestras políticas con respecto
          a la recopilación, uso y divulgación de datos personales cuando utiliza nuestro
          servicio.
        </p>

        <h2>Información que Recopilamos</h2>
        <p>
          Recopilamos varios tipos de información con el fin de prestar y mejorar nuestro
          servicio, incluyendo:
        </p>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Número de teléfono</li>
          <li>Dirección de correo electrónico</li>
          <li>Municipio de residencia</li>
          <li>Información enviada a través de nuestro formulario de contacto</li>
        </ul>

        <h2>Uso de la Información</h2>
        <p>Kilowatt PR LLC utiliza la información recopilada para los siguientes propósitos:</p>
        <ul>
          <li>Proveer y mantener nuestro servicio</li>
          <li>Contactarle en respuesta a su consulta o solicitud de cotización</li>
          <li>Notificarle sobre cambios en nuestros servicios</li>
          <li>Proporcionar atención al cliente</li>
          <li>Analizar el uso del sitio web para mejorarlo</li>
        </ul>

        <h2>Divulgación de Datos</h2>
        <p>
          Kilowatt PR LLC no vende, intercambia ni transfiere a terceros su información
          personal identificable. Esto no incluye terceros de confianza que nos asisten en
          la operación de nuestro sitio web, la conducción de nuestro negocio, o el servicio
          a usted, siempre que esas partes acuerden mantener esta información confidencial.
        </p>

        <h2>Cookies</h2>
        <p>
          Nuestro sitio web puede utilizar "cookies" para mejorar la experiencia del usuario.
          Su navegador web puede colocar cookies en su disco duro con fines de mantenimiento
          de registros y, a veces, para rastrear información sobre ellos.
        </p>

        <h2>Seguridad de los Datos</h2>
        <p>
          La seguridad de sus datos es importante para nosotros. Utilizamos medidas de
          seguridad comercialmente aceptables para proteger su información personal. Sin
          embargo, ningún método de transmisión por Internet o método de almacenamiento
          electrónico es 100% seguro.
        </p>

        <h2>Cambios a Esta Política</h2>
        <p>
          Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos
          cualquier cambio publicando la nueva Política de Privacidad en esta página.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos:
        </p>
        <ul>
          <li>Email: kilowattpr@gmail.com</li>
          <li>Teléfono: +1-787-431-2275</li>
          <li>Dirección: HC 3 Box 31767, Aguada, PR 00602</li>
        </ul>
      </div>
    </div>
  )
}
