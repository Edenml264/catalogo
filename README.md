# Catálogo de Servicios Web - Proyecto Astro + Tailwind

# Catálogo de Servicios Web - Los Cabos

Este proyecto es un catálogo digital de servicios web pensado para apoyar a vendedores y mostrar de manera clara y profesional las soluciones que ofrezco como desarrollador web especializado en WordPress y frameworks modernos. Optimizado para el mercado local de Los Cabos, BCS, México, con precios en pesos mexicanos (MXN).

## Servicios incluidos
- Sitio Web WordPress Profesional
- Tienda en línea (WooCommerce)
- Landing Page de Alto Impacto
- Mantenimiento y Soporte Web
- Desarrollo a Medida (WordPress, Astro, Svelte, Vue, Laravel)
- Optimización SEO y Velocidad
- Migraciones y Rescate Web

## Estructura del proyecto
- **Landing page**: Presentación y acceso al catálogo
- **Catálogo**: Tarjetas de servicios, cada una con detalles, beneficios y ejemplo visual
- **Detalle de servicio**: Página con información ampliada de cada servicio
- **Cotizador**: Sistema dinámico para generar cotizaciones personalizadas
- **Contacto rápido**: WhatsApp, email, formulario
- **FAQ**: Preguntas frecuentes

## Tecnologías utilizadas
- **Framework**: Astro
- **Estilos**: Tailwind CSS
- **Lenguaje**: TypeScript
- **Hosting**: Netlify

## Características implementadas

### Catálogo de servicios
- Estructura de datos centralizada en `services.ts`. Todos los servicios, subservicios y planes se gestionan desde un solo archivo para máxima consistencia.
- Precios y lógica adaptados al mercado local de Los Cabos, BCS, México (MXN, sin conversión a dólares).
- Páginas dinámicas generadas a partir de los datos del catálogo.
- Diseño responsivo adaptado a todos los dispositivos.
- Navegación intuitiva entre servicios.

### Cotizador Web
- **Interfaz dinámica**: Formulario interactivo para cotización de servicios.
- **Integración con catálogo**: Carga dinámica de servicios y planes desde `services.ts` (sin duplicidad de datos).
- **Cálculo en tiempo real**: Actualización instantánea de precios según opciones seleccionadas.
- **Generación de cotización**: Vista detallada para el cliente en nueva pestaña.
- **Visualización dinámica**: Todos los campos relevantes (incluyendo "Renta de equipo de cómputo") se muestran automáticamente y solo si tienen valor.
- **Soporte UTF-8**: Correcta visualización de caracteres especiales y acentos en español.
- **Precios localizados**: Todos los precios en pesos mexicanos (MXN).
- **Preparado para notificación por correo**: Estructura lista para enviar la cotización al administrador.

## Roadmap completado
1. ✅ Estructura base Astro + Tailwind
2. ✅ Componentes de catálogo y tarjetas de servicios
3. ✅ Página de detalle de servicio
4. ✅ Sistema de cotización dinámica
5. ✅ Integración de datos centralizada
6. ✅ Deploy a Netlify

## Próximos pasos
1. **Crear endpoint para envío de correo**: Implementar un endpoint (API serverless o backend) para enviar la información de la cotización al correo del administrador: ventas@edenmendez.com
2. Añadir más servicios y planes
3. Mejorar validaciones de formulario
4. Implementar seguimiento y analytics
5. Crear panel de administración para gestión de servicios

---

### Pendiente inmediato
> **Crear un endpoint para el envío de correo con la información de la cotización al administrador**
> - Correo destino: ventas@edenmendez.com
> - El endpoint debe recibir todos los datos de la cotización generada y enviarlos de forma estructurada.
> - Opcional: enviar copia al cliente si se desea.

## Configuración de desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build
```

## Contacto y soporte
- **Correo**: info@edenmendez.com
- **Teléfono**: 624-166-5588
- **Ubicación**: Country del Mar, San Jose del Cabo, BCS, México

---

## Estado del proyecto
- El catálogo está completamente funcional y desplegado en producción.
- URL de producción: https://sionline-catalogo-eml.netlify.app/

Puedes acceder al catálogo en línea desde el siguiente enlace:
👉 [Catálogo de Servicios Web en producción](https://sionline-catalogo-eml.netlify.app/)

---

---

## Instalación y desarrollo local

```bash
npm install
npm run dev
```

---

## Objetivo
Facilitar a los vendedores una herramienta visual y práctica para explicar y cotizar los servicios web ofrecidos, mostrando ventajas competitivas y ejemplos reales.

---

¿Ideas o mejoras? ¡Agrega un issue o contacta al desarrollador!

---

## Deploy
Este proyecto está actualmente desplegado en Netlify:
- URL: https://sionline-catalogo-eml.netlify.app/

Cualquier cambio en la rama principal puede ser reflejado en producción manualmente desde el panel de Netlify.

---

## Personalización del favicon

El favicon del catálogo (el ícono que aparece en la pestaña del navegador) se encuentra en la carpeta `public` con el nombre `favicon.svg`.

Si deseas personalizarlo para tu staff de ventas:
1. Sustituye el archivo `public/favicon.svg` por el diseño de tu preferencia (idealmente en formato SVG para mejor compatibilidad y calidad).
2. Mantén el mismo nombre de archivo para que se actualice automáticamente en todo el sitio.
3. Si necesitas otros formatos (PNG, ICO), puedes agregar etiquetas `<link rel="icon" ...>` adicionales en los archivos `index.astro` y `[slug].astro` dentro de la carpeta `src/pages`.

Esto permitirá que el catálogo mantenga la identidad visual de tu empresa o equipo.
