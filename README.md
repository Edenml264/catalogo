# Catálogo de Servicios Audiovisuales – Elegevents

![Logo Elegevents](https://elegevents.com/wp-content/uploads/2021/12/ELEGEVENTS.webp)

Catálogo web moderno y responsivo para mostrar los servicios audiovisuales de Elegevents, incluyendo renta de equipo, DJ, iluminación, pistas, letras volumétricas, y más. Permite a los clientes conocer detalles, ver galerías, cotizar y contactar fácilmente.

Repositorio oficial: [github.com/Edenml264/catalogo-av](https://github.com/Edenml264/catalogo-av)

---

## Características principales
- **Diseño personalizado** con branding de Elegevents
- **Servicios y precios** gestionados desde un solo archivo (`services.ts`)
- **Galería de imágenes** y testimonios para cada servicio
- **Cotizador integrado** con precios en MXN
- **FAQ y contacto directo** por WhatsApp y correo
- **100% responsive** y optimizado para SEO

## Estructura del proyecto
- **Landing page**: Presentación y acceso al catálogo
- **Catálogo**: Tarjetas de servicios, cada una con detalles, beneficios y ejemplo visual
- **Detalle de servicio**: Página con información ampliada de cada servicio
- **Cotizador**: Sistema dinámico para generar cotizaciones personalizadas
- **Contacto rápido**: WhatsApp, email, formulario
- **FAQ**: Preguntas frecuentes

## Tecnologías
- [Astro](https://astro.build/) (framework principal)
- TypeScript
- TailwindCSS (opcional para estilos)
- Despliegue recomendado: Vercel, Netlify, o cualquier hosting estático

## ¿Cómo correr el proyecto localmente?
1. Clona el repositorio:
   ```bash
   git clone https://github.com/Edenml264/catalogo-av.git
   cd catalogo-av
   ```
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Ejecuta en modo desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## Despliegue
Puedes desplegar fácilmente en Vercel, Netlify o tu servidor favorito. Solo asegúrate de construir el sitio con:
```bash
npm run build
```
Y sube la carpeta `dist` generada.

## Contacto
- **Teléfono:** (624) 154 0044
- **Correo:** info@elegevents.com / armando@elegevents.com
- **Sitio web:** [elegevents.com](https://elegevents.com)

## Agradecimientos
Desarrollado para Elegevents con ❤️. Si tienes sugerencias o encuentras algún error, ¡no dudes en abrir un issue o contactarnos!

---

© 2025 Elegevents. Todos los derechos reservados.


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
- **Envío automático de cotización**: Al enviar la cotización, los datos se transmiten automáticamente al correo del administrador (ventas@sionline.com.mx) usando un endpoint REST seguro en WordPress.

---

## Flujo de cotización
1. El usuario selecciona servicio, plan y opciones en el cotizador.
2. El cotizador calcula el precio y muestra el resumen detallado.
3. Al hacer clic en "Enviar cotización":
   - Se guarda la cotización en localStorage para mostrarla en la página resumen.
   - Se envía la información completa por POST al endpoint REST en WordPress.
   - El administrador recibe la cotización por correo en ventas@sionline.com.mx.
4. El usuario puede imprimir o guardar la cotización desde la vista generada.

---

## Integración con WordPress
- El backend de WordPress expone un endpoint REST personalizado (`/wp-json/cotizador/v1/enviar`).
- El endpoint recibe todos los datos relevantes del cotizador y los reenvía por correo.
- Soporta adjuntos (PDF) si se requiere en el futuro.
- El correo llega siempre al administrador, garantizando seguimiento y registro de prospectos.

---

## Roadmap completado
1. ✅ Estructura base Astro + Tailwind
2. ✅ Componentes de catálogo y tarjetas de servicios
3. ✅ Página de detalle de servicio
4. ✅ Sistema de cotización dinámica
5. ✅ Integración de datos centralizada
6. ✅ Deploy a Netlify
7. ✅ Integración de correo para envío de cotizaciones

## Próximos pasos
1. Añadir más servicios y planes
2. Mejorar validaciones de formulario
3. Implementar seguimiento y analytics
4. Crear panel de administración para gestión de servicios

---

### Logros recientes
- ✅ Flujo de cotización completamente funcional e integrado con WordPress.
- ✅ Envío automático de cotización al correo del administrador (ventas@sionline.com.mx).
- ✅ Centralización de datos y lógica en `services.ts`.
- ✅ Soporte completo para español y precios localizados.

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
- **Correo**: info@sionline.com.mx
- **Teléfono**: 624-166-5588
- **Ubicación**: Country del Mar, San Jose del Cabo, BCS, México

---

## Estado del proyecto
- El catálogo está completamente funcional y desplegado en producción.
- URL de producción: https://elegevents-catalogo-eml.netlify.app/

Puedes acceder al catálogo en línea desde el siguiente enlace:
👉 [Catálogo de Servicios Audiovisuales en producción](https://elegevents-catalogo-eml.netlify.app/)

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
- URL: https://elegevents-catalogo-eml.netlify.app/

Cualquier cambio en la rama principal puede ser reflejado en producción manualmente desde el panel de Netlify.

---

## Personalización del favicon

El favicon del catálogo (el ícono que aparece en la pestaña del navegador) se encuentra en la carpeta `public` con el nombre `favicon.svg`.

Si deseas personalizarlo para tu staff de ventas:
1. Sustituye el archivo `public/favicon.svg` por el diseño de tu preferencia (idealmente en formato SVG para mejor compatibilidad y calidad).
2. Mantén el mismo nombre de archivo para que se actualice automáticamente en todo el sitio.
3. Si necesitas otros formatos (PNG, ICO), puedes agregar etiquetas `<link rel="icon" ...>` adicionales en los archivos `index.astro` y `[slug].astro` dentro de la carpeta `src/pages`.

Esto permitirá que el catálogo mantenga la identidad visual de tu empresa o equipo.
