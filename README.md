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

---

## 🆕 Catálogo Demo en `/catalogo`

Ahora el proyecto incluye una ruta `/catalogo` que funciona como **versión demo/muestra** del catálogo de servicios. Esta sección está pensada para mostrar a clientes o como portafolio público, sin exponer precios ni contacto directo del desarrollador.

**Características de la demo:**
- Diseño y experiencia idénticos al catálogo original.
- No se muestran precios ni datos de contacto.
- Los planes/paquetes de cada servicio se visualizan (nombre, descripción, características), pero sin precio.
- Navegación y visualización responsiva optimizada para móvil y escritorio.

**Estructura:**
- `/src/pages/catalogo/index.astro`: Lista todos los servicios como tarjetas.
- `/src/pages/catalogo/[slug].astro`: Página de detalle de cada servicio, sin precios ni contacto.
- Utiliza los mismos componentes y datos que la versión principal, asegurando sincronización y fácil mantenimiento.

**¿Cómo mantener sincronizadas ambas versiones?**
- Todos los servicios, planes y características se gestionan desde `src/data/services.ts`.
- Si se actualiza un servicio, el cambio se refleja automáticamente tanto en el catálogo completo como en la demo.

**¿Cómo contribuir y subir cambios al repositorio?**
1. Realiza tus cambios y mejoras localmente.
2. Asegúrate de probar tanto la ruta principal como `/catalogo`.
3. Haz commit de los cambios:
   ```bash
   git add .
   git commit -m "feat: agregar versión demo /catalogo sin precios ni contacto"
   git push
   ```
4. Abre un Pull Request si es necesario, o sube directamente a la rama principal según tu flujo de trabajo.

---
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
