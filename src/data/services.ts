export interface Service {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  bullets: string[];
  features?: { label: string; value: string }[];
  gallery?: string[];
  testimonials?: { quote: string; author: string }[];
  faq?: { question: string; answer: string }[];
  price?: string;
  plans?: {
    name: string;
    description?: string;
    price: string;
    features?: string[];
    specialnote?: string;
  }[];
}

export const services: Service[] = [
  {
    title: "Paquete CABOCON: Portafolio de Artista PRO",
    slug: "paquete-cabocon",
    description: "Tu **Obra Maestra Digital** en la web. Un portafolio profesional, rápido y temático, exclusivo para asistentes al CaboCON. **¡Solo disponible el 08 de noviembre!**",
    icon: "🔥",
    image: "/services/cabocon-special-min.jpg",
    bullets: [
      "Diseño con la temática de tu arte (Temático y Personalizado)",
      "Galería de Alta Resolución (Muestra cada detalle de tu trabajo)",
      "Canal de Comunicación Directo (Contacto o WhatsApp)",
      "Carga Ultra-Rápida (Tu arte se ve al instante)",
      "¡Garantiza tu precio con solo $300 MXN!"
    ],
    price: "¡Precio Único de Evento: $1,999 MXN!",
    plans: [
      {
        name: "Paquete Único CABOCON (Reserva HOY)",
        description: "Consigue tu **Portafolio Web Estático de Alto Impacto** con funcionalidades de artista PRO. Ideal para mostrar tu trabajo, comisiones y streams.",
        price: "Pago de Reserva: $300 MXN",
        features: [
          "Aplica para el precio final de $1,999 MXN. Los $300 MXN se descuentan del total.",
          "Plataforma Estática de Alto Rendimiento (HTML5/CSS/JS puro)",
          "Hasta 6 Secciones Clave (Hero, Galería, Servicios/Comisiones, Contacto, etc.)",
          "Diseño Temático alineado a tu estilo de arte o género favorito",
          "Galería PRO con Proceso de Creación (Muestra 'Blueprint' y pieza final)",
          "Integración con Twitch/YouTube (Muestra tu stream o videos recientes)",
          "Formulario de Contacto o Botón de WhatsApp directo",
          "Optimización SEO Básica para que te encuentren",
          "¡1 Mes de Soporte Técnico GRATIS!"
        ]
      }
    ],
    features: [
      { label: "Tecnología de Vanguardia", value: "**Sitio Estático** (HTML5, CSS3, JS) – Máxima Velocidad y Seguridad" },
      { label: "Tiempo de Lanzamiento", value: "**1 Semana Garantizada** (Post-entrega de contenido)" },
      { label: "Soporte Post-Lanzamiento", value: "**¡2 Meses GRATIS!** (Valorado en $2,000 MXN) – Duplica tu garantía estándar" },
      { label: "Ahorro Real", value: "Obtienes un paquete valorado en más de **$4,500 MXN** a un precio exclusivo de **$1,999 MXN**." },
      { label: "Vigencia", value: "**¡Promoción que termina el 08 de noviembre!** Asegura tu lugar con el apartado." }
    ],
    gallery: [
      "/projects/cosplay-portafolio-mockup.png",
      "/projects/tienda-otaku-mockup.png",
      "/projects/wordpress/cabocon-min.png"
    ],
    testimonials: [
      { quote: "Mi portafolio temático parece sacado de un videojuego. La funcionalidad de comisiones está impecable y **mis peticiones se duplicaron**.", author: "Cosplayer PRO (Nombre Ficticio Relevante)" },
      { quote: "Antes perdía el tiempo con mi viejo sitio. Ahora tengo una plataforma rápida que me permite gestionar mi inventario de props sin necesitar un developer.", author: "Propietario de Tienda de Props (Nombre Ficticio)" }
    ],
    faq: [
      { question: "¿Cuál es el ahorro real que obtengo con este paquete?", answer: "Este paquete incluye funcionalidades de nuestro Plan Avanzado (galería PRO, SEO, diseño temático) que tiene un valor de mercado de más de $4,500 MXN. Estás obteniendo una **inversión con un 55% de descuento**." },
      { question: "¿Incluye Dominio y Hosting (el costo anual de la web)?", answer: "No los incluye, pero como bono exclusivo, si lo contratas hoy te **REGALAMOS el primer mes** de Hosting de Alta Velocidad (Valor $250 MXN) con nuestro proveedor recomendado." },
      { question: "¿Qué tan rápido estará mi portafolio en línea?", answer: "**Garantizamos el lanzamiento en 7 días**, siempre y cuando nos entregues todo tu contenido (fotos, textos, logos) a tiempo para que podamos trabajar." },
      { question: "¿Puedo asegurar el precio si lo pienso en casa?", answer: "¡No! La promoción termina con el evento. Puedes **asegurar esta tarifa con el apartado de $300 MXN** en nuestro stand y tienes 7 días naturales para completar el pago restante." }]
  },
  {
    title: "Paquete Rescate PRO (Oferta Post-CaboCON)",
    slug: "paquete-rescate-pro",
    description: "Tu última oportunidad para obtener el **Portafolio de Artista PRO**. Promoción extendida por **7 DÍAS NATURALES** después del evento para quienes no pudieron aprovechar la tarifa de urgencia. ¡El ahorro aún es significativo!",
    icon: "🗓️",
    image: "/services/cabocon-special-min.jpg",
    bullets: [
      "Diseño Temático (Mismo estilo que el paquete CABOCON)",
      "Galería PRO con Proceso de Creación",
      "Integración con Twitch/YouTube",
      "Lanzamiento Garantizado en 1 Semana (Post-entrega de contenido)",
      "¡Vigencia Extendida: 7 Días Naturales!"
    ],
    price: "Precio Único de Rescate: $2,499 MXN",
    plans: [
      {
        name: "Rescate PRO (Última Oportunidad)",
        description: "Misma estructura de Portafolio Web Estático de Alto Impacto. Ideal para quienes necesitan tiempo extra para decidir. La tarifa sube $500 MXN respecto al precio del evento.",
        price: "$2,499 MXN",
        specialnote: "Esta tarifa estará vigente por 7 días naturales tras la finalización del evento CaboCON. Se requiere el pago total para confirmar el proyecto.",
        features: [
          "Plataforma Estática de Alto Rendimiento (HTML5/CSS/JS)",
          "Hasta 6 Secciones Clave de tu portafolio",
          "Diseño Temático y Personalizado",
          "Galería PRO para mostrar el 'Behind The Scenes'",
          "Integración de Stream (Twitch/YouTube)",
          "Formulario de Contacto y WhatsApp Directo",
          "Optimización SEO Básica",
          "1 Mes de Soporte Técnico GRATIS"
        ]
      }
    ],
    features: [
      { label: "Tecnología", value: "Sitio Estático para Máxima Velocidad y Seguridad" },
      { label: "Tiempo de Lanzamiento", value: "1 Semana Garantizada" },
      { label: "Ahorro Post-Evento", value: "Obtienes un paquete valorado en más de $4,500 MXN con un 45% de descuento." },
      { label: "Vigencia", value: "¡7 Días Naturales Disponibles! Válido solo con pago total durante este plazo." }
    ],
    faq: [
      { question: "¿Por qué el precio es diferente al del evento?", answer: "El precio de $1,999 MXN era una oferta de urgencia exclusiva del stand. Esta tarifa de $2,499 MXN es el mejor precio que podemos ofrecer fuera del evento, ¡aún así es un gran ahorro!" },
      { question: "¿Puedo hacer un apartado con esta tarifa?", answer: "No. Para esta oferta de rescate se requiere el pago completo dentro de los 7 días de vigencia para asegurar el precio y el inicio del proyecto." },
      { question: "¿Incluye los 2 meses de soporte gratis?", answer: "El bono de 2 meses fue exclusivo para quienes apartaron durante el evento. Esta oferta incluye 1 mes de soporte técnico gratuito." }
    ]
  },
  {
    title: "¡Te Vimos en CaboCON! | Descuento Especial 20%",
    slug: "reconocimiento-cabocon-descuento",
    description: "Una promoción exclusiva para todos los asistentes al evento CaboCON. Si nos visitaste o viste nuestro trabajo, utiliza el código **'CABOCON20'** para obtener un descuento directo.",
    icon: "🎁",
    image: "/services/banner-cabocon-20percent.jpg",
    bullets: [
      "Descuento del **20%** aplicable a **CUALQUIER** servicio de nuestro catálogo (Web, E-commerce, Consultoría, etc.)",
      "Fácil de Redimir: Solo menciona el código o llena el formulario con el código **'CABOCON20'**.",
      "Ideal para el desarrollo de Tiendas en Línea, Sitios Avanzados o Consultoría Estratégica.",
      "Vigencia Extendida: Tienes **20 días naturales** para asegurar tu descuento.",
      "Aplica 20% de Descuento sobre la tarifa del servicio contratado (el precio base del plan)."
    ],
    plans: [
      {
        name: "Código de Reconocimiento 'CABOCON20'",
        description: "Descuento aplicable a cualquier plan: Tienda en Línea, Sitio Web WordPress, Landing Page, Desarrollo a Medida o Consultoría.",
        price: "¡20% OFF!",
        specialnote: "Esta promoción no es acumulable con otras ofertas (ej. Paquete CaboCON de $1,999 MXN) y requiere la mención del código al momento de la cotización o contratación.",
        features: [
          "**Descuento del 20%** en el costo total del servicio.",
          "Aplica a **todos** los planes de nuestro catálogo.",
          "Vigencia de 20 días naturales (a partir del 09 de noviembre).",
          "**Cotización y Asesoría GRATIS** para definir el servicio que mejor se adapta a ti."
        ]
      }
    ],
    features: [
      { label: "Código de Descuento", value: "**CABOCON20**" },
      { label: "Servicios Incluidos", value: "Todos los servicios (Tienda, Web, Landing, Consultoría, Desarrollo a Medida)" },
      { label: "Vigencia de la Oferta", value: "20 días naturales (hasta el 28 de noviembre, 2025)" },
      { label: "Requisito de Uso", value: "Mencionar el código al solicitar la cotización." }
    ],
    faq: [
      { question: "¿Puedo aplicar el 20% al Paquete CABOCON de $1,999 MXN?", answer: "No. Este descuento está diseñado para usarse en nuestros **servicios de tarifa regular** (WordPress, Tienda en Línea, Consultoría, etc.), ya que el paquete CaboCON ya es una oferta promocional." },
      { question: "¿Cómo se aplica el descuento?", answer: "Solo tienes que mencionar el código **'CABOCON20'** al contactarnos o incluirlo en el formulario de cotización. Nosotros aplicaremos el 20% de reducción en el precio final de tu servicio." },
      { question: "¿Hasta cuándo tengo para contratar?", answer: "La oferta es válida por 20 días naturales a partir del día siguiente del evento (hasta el 28 de noviembre, 2025). Te recomendamos iniciar la cotización lo antes posible." }
    ]
  },
  {
    title: "Sitio Web WordPress Profesional",
    slug: "wordpress-profesional",
    description: "Desarrollo de sitios web **modernos, optimizados y fáciles de gestionar** (Autoadministrables). La base perfecta para tu presencia digital.",
    icon: "🌐",
    image: "/services/wordpress-min.jpg",
    bullets: [
      "Identidad Digital Única (Diseño Personalizado)",
      "Visibilidad en Buscadores (Optimización SEO Inicial)",
      "Control Total (Sitio Autoadministrable y Capacitación)",
      "Seguridad y Rendimiento"
    ],
    price: "Desde $7,000 MXN (Pago Único)",
    plans: [
      {
        name: "Básico: Tarjeta de Presentación Digital",
        description: "Ideal para negocios que necesitan una **presencia profesional rápida**. Un sitio web **institucional** con la información esencial..",
        price: "$7,000 MXN",
        features: [
          "Diseño Personalizado (Enfocado en tu marca)",
          "Estructura Esencial (Hasta 3 Secciones/Páginas)",
          "Optimización SEO Inicial (Configuración de títulos y meta-descripciones)",
          "Formulario de Contacto y Mapa de Ubicación",
          "Capacitación para administración de contenido",
          "1 Mes de Soporte Técnico post-lanzamiento"
        ]
      },
      {
        name: "Pro: Negocio en Crecimiento",
        description: "El paquete más popular. Perfecto para mostrar un **mayor portafolio de servicios** y generar más interacciones con tus clientes.",
        price: "$11,000 MXN",
        features: [
          "Todo lo incluido en el plan Básico",
          "Más Contenido (Hasta 5 Secciones/Páginas)",
          "Integración de Blog (Preparado para crear contenido)",
          "Galería de Imágenes/Portafolio Dedicado",
          "Optimización de Velocidad de carga inicial",
          "1 Mes de Soporte Técnico"
        ]
      },
      {
        name: "Premium: Máxima Visibilidad",
        description: "Diseñado para empresas que buscan **liderar su nicho**. Incluye más secciones y una **estrategia SEO más profunda** para competir.",
        price: "$17,500 MXN",
        features: [
          "Todo lo incluido en el plan Pro",
          "Sitio Amplio (Hasta 7 Secciones/Páginas)",
          "Optimización SEO Avanzada (Investigación de palabras clave y estructura de datos)",
          "Integración de Herramientas de Marketing (ej. Píxeles de seguimiento)",
          "2 Meses de Soporte Técnico y Actualizaciones iniciales",
          "Asesoría para Estructura de Contenido"
        ]
      }
    ],
    features: [
      { label: "Tecnologías", value: "WordPress, HTML5, CSS3, SEO básico" },
      { label: "Tiempo de entrega", value: "2-4 semanas" },
      { label: "Soporte", value: "3 meses incluido" },
      { label: "Administrable", value: "Sí" },
      { label: "Responsive", value: "Sí, adaptado a móviles" }
    ],
    gallery: [
      "/projects/wordpress/cabocon-min.png",
      "/projects/wordpress/dlevents-min.png",
      "/projects/wordpress/dulcedelicia-min.png",
      "/projects/wordpress/elegevents-min.png",
      "/projects/wordpress/loscabostransfer-min.png",
      "/projects/wordpress/microsoporte-min.png"
    ],
    testimonials: [
      { quote: "¡El sitio superó nuestras expectativas y el soporte fue excelente!", author: "Cliente satisfecho" },
      { quote: "Rápidos, atentos y muy profesionales. ¡Recomendados!", author: "Emprendedor digital" }
    ],
    faq: [
      { question: "¿Puedo autoadministrar mi sitio?", answer: "Sí, te capacitamos para que puedas hacer cambios fácilmente." },
      { question: "¿Incluye dominio y hosting?", answer: "Podemos asesorarte en la contratación, pero no están incluidos por defecto." },
      { question: "¿El sitio es seguro?", answer: "Sí, aplicamos buenas prácticas de seguridad y actualizaciones." },
      { question: "¿Cuáles son las formas de pago disponibles?", answer: "Aceptamos transferencia bancaria, tarjetas de crédito/débito y pagos en efectivo en Los Cabos." },
      { question: "¿Puedo solicitar factura?", answer: "Sí, emitimos factura electrónica (CFDI) para todos nuestros servicios. Solicítala al momento de tu pago." },
      { question: "¿Cuánto tarda el proceso desde la contratación hasta la entrega?", answer: "El tiempo depende del servicio y la carga de trabajo, pero te damos una estimación clara antes de iniciar y mantenemos comunicación constante." },
      { question: "¿Puedo solicitar cambios una vez iniciado el proyecto?", answer: "Sí, puedes solicitar ajustes. Dependiendo del alcance, pueden generar costos adicionales, pero siempre te avisaremos antes." },
      { question: "¿Ofrecen soporte después de la entrega?", answer: "Sí, todos nuestros servicios incluyen un periodo de soporte. También ofrecemos paquetes de soporte extendido." },
      { question: "¿Qué pasa si no estoy satisfecho con el resultado?", answer: "Trabajamos contigo hasta que estés conforme. Nuestro proceso incluye revisiones y ajustes según tus comentarios." },
      { question: "¿El servicio incluye capacitación para usar mi sitio?", answer: "Sí, incluimos capacitación básica para que puedas administrar tu sitio con facilidad." }
    ]
  },
  {
    title: "Tienda en línea (WooCommerce)",
    slug: "tienda-online-woocommerce",
    description: "Vende **productos o servicios 24/7** con una plataforma de e-commerce **robusta, escalable y fácil de gestionar**.",
    icon: "🛒",
    image: "/services/tiendaonline-min.jpg",
    bullets: [
      "Acepta pagos con tarjeta, transferencia y más (Integración de Pasarelas)",
      "Control total de tu stock y catálogo (Gestión de Inventario)",
      "Toma decisiones informadas con métricas clave (Reportes de Ventas)"
    ],
    price: "Desde $13,000 MXN (Pago Único)",
    plans: [
      {
        name: "Starter: Despegue Digital",
        description: "Ideal para iniciar tu negocio online. **Catálogo limitado** y las funcionalidades esenciales para empezar a vender de inmediato.",
        price: "$13,000 MXN",
        features: [
          "Pasarelas de Pago (Acepta tarjetas y métodos populares)",
          "Gestión de Productos (Control de tu catálogo)",
          "Hasta 20 Productos incluidos en la configuración inicial",
          "Capacitación Personalizada para que administres tu tienda",
          "1 Mes de Soporte Técnico post-lanzamiento"
        ]
      },
      {
        name: "Avanzada: Crecimiento y Control",
        description: "Perfecto para negocios en crecimiento que necesitan **mayor catálogo**, automatización y **datos avanzados** para optimizar sus ventas..",
        price: "$22,000 MXN",
        features: [
          "Todo lo incluido en el plan Starter",
          "Integración con Servicios de Envío (Calcula costos y genera guías)",
          "Reportes de Ventas Personalizados y segmentados (Mejores métricas)",
          "Ampliación del Catálogo (Hasta 100 productos)",
          "2 Meses de Soporte Técnico con prioridad",
          "Capacitación incluida y manual de usuario"
        ]
      }
    ],
    features: [
      { label: "Plataforma", value: "WooCommerce, WordPress" },
      { label: "Pasarelas de pago", value: "PayPal, Stripe, MercadoPago" },
      { label: "Soporte", value: "2 meses incluido" },
      { label: "Gestión de envíos", value: "Sí, configurable" },
      { label: "Multi-idioma", value: "Opcional" }
    ],
    gallery: [
      "/projects/woocommerce/bellaterraloscabos-min.png",
      "/projects/woocommerce/nacuii-min.png",
      "/projects/woocommerce/romiboutique-min.png",
      "/projects/woocommerce/saboracabo-min.png"
    ],
    testimonials: [
      { quote: "Nuestra tienda online incrementó ventas desde el primer mes.", author: "Negocio local" },
      { quote: "La integración de pagos fue rápida y sin complicaciones.", author: "Dueña de boutique" }
    ],
    faq: [
      { question: "¿Puedo gestionar mis productos fácilmente?", answer: "Sí, el panel es intuitivo y te capacitamos en su uso." },
      { question: "¿Incluye integración con envíos?", answer: "Sí, puedes configurar proveedores de envío nacionales e internacionales." },
      { question: "¿Puedo vender productos digitales?", answer: "Sí, WooCommerce soporta productos físicos y digitales." },
      { question: "¿Cuáles son las formas de pago disponibles?", answer: "Aceptamos transferencia bancaria, tarjetas de crédito/débito y pagos en efectivo en Los Cabos." },
      { question: "¿Puedo solicitar factura?", answer: "Sí, emitimos factura electrónica (CFDI) para todos nuestros servicios. Solicítala al momento de tu pago." },
      { question: "¿Cuánto tarda el proceso desde la contratación hasta la entrega?", answer: "El tiempo depende del servicio y la carga de trabajo, pero te damos una estimación clara antes de iniciar y mantenemos comunicación constante." },
      { question: "¿Puedo solicitar cambios una vez iniciado el proyecto?", answer: "Sí, puedes solicitar ajustes. Dependiendo del alcance, pueden generar costos adicionales, pero siempre te avisaremos antes." },
      { question: "¿Ofrecen soporte después de la entrega?", answer: "Sí, todos nuestros servicios incluyen un periodo de soporte. También ofrecemos paquetes de soporte extendido." },
      { question: "¿Qué pasa si no estoy satisfecho con el resultado?", answer: "Trabajamos contigo hasta que estés conforme. Nuestro proceso incluye revisiones y ajustes según tus comentarios." },
      { question: "¿El servicio incluye capacitación para usar mi tienda?", answer: "Sí, incluimos capacitación básica para que puedas administrar tu tienda con facilidad." }
    ]
  },
  {
    title: "Landing Page de Alto Impacto (Generación de Leads)",
    slug: "landing-page-impacto",
    description: "Páginas de aterrizaje diseñadas con un único objetivo: **convertir visitantes en prospectos (leads) o clientes**. Optimiza tu inversión en publicidad.",
    icon: "🚀",
    image: "/services/landingpage-min.jpg",
    bullets: [
      "Diseño Estratégico (Enfocado 100% en la Conversión)",
      "Captación de Datos (Integración con Formularios de Leads o CRM)",
      "Máximo Alcance (Optimización para Móviles y Carga Rápida)"
    ],
    price: "Desde $4,500 MXN (Pago Único)",
    plans: [
      {
        name: "Estrategia Simple: Generación de Leads",
        description: "Una landing page **potente y personalizada** para el lanzamiento de un producto, servicio o promoción específica. Lista para atraer prospectos.",
        price: "$4,500 MXN",
        features: [
          "Diseño de Alto Impacto y 100% responsive",
          "Estructura de 1 Sección Única con scroll (No 3 páginas)",
          "Integración Profesional de Formularios (Recibe leads en tu correo o CRM)",
          "Integración de Píxeles de seguimiento (Facebook, Google Ads)",
          "Asesoría de Copy (Recomendaciones para el texto de conversión)",
          "1 Mes de Soporte Técnico post-lanzamiento"
        ]
      },
      {
        name: "Estrategia Dual: Optimización A/B Testing",
        description: "Ideal para campañas publicitarias que buscan **maximizar su retorno de inversión (ROI)**. Creamos variantes para encontrar el diseño más efectivo.",
        price: "$6,500 MXN",
        features: [
          "Todo lo incluido en el plan 'Estrategia Simple'",
          "Diseño de 2 Variantes de Landing Page (A y B)",
          "Implementación de Pruebas A/B (Con herramientas de testeo)",
          "Informe Detallado de Resultados (Identificación de la variante ganadora y lecciones)",
          "Asesoría en Optimización Continua",
          "1 Mes de Soporte Técnico"
        ]
      }
    ],
    features: [
      { label: "Tiempo de entrega", value: "1 semana" },
      { label: "Formularios", value: "Personalizados y conectados a tu email" },
      { label: "Optimización SEO", value: "Incluida" },
      { label: "A/B Testing", value: "Opcional" },
      { label: "Animaciones", value: "Sí, modernas y ligeras" }
    ],
    gallery: [
      "/projects/landingpage/pokerkings-min.png",
      "/projects/landingpage/revitalizingrenovations-min.png"
    ],
    testimonials: [
      { quote: "Duplicamos nuestros leads en menos de un mes.", author: "Agencia de marketing" }
    ],
    faq: [
      { question: "¿Puedo conectar la landing con mi CRM?", answer: "Sí, podemos integrar la landing con tu CRM favorito." },
      { question: "¿El diseño es único?", answer: "Sí, cada landing es personalizada para tu marca y objetivo." }
    ]
  },
  {
    title: "Mantenimiento y Soporte Web Proactivo",
    slug: "mantenimiento-soporte-web",
    description: "Asegura la **continuidad y seguridad** de tu negocio digital. Olvídate de problemas, fallos y amenazas. Tu sitio **siempre estará al día y en óptimas condiciones**..",
    icon: "🛠️",
    image: "/services/maintenance-support-min.jpg",
    bullets: [
      "Prevención de Fallos (Actualizaciones Periódicas de Código y Plugins)",
      "Seguridad Total (Backups Automáticos y Monitoreo de Amenazas)",
      "Asistencia Rápida (Soporte Técnico Prioritario)",
      "Rendimiento Óptimo (Optimización de Velocidad)"
    ],
    price: "Desde $1,900 MXN / mes",
    plans: [
      {
        name: "Básico: Esencial",
        description: "Ideal para Landing Pages, Sitios Institucionales y blogs. Mantenimiento preventivo que garantiza la **seguridad y operatividad básica**.",
        price: "$1,900 MXN / mes",
        features: [
          "Backups Semanales (Almacenamiento en la Nube)",
          "Actualizaciones Mensuales de Plugins, Temas y Núcleo de WordPress",
          "Monitoreo de Seguridad Básico y Anti-Malware",
          "Reporte Mensual de Actividades y Rendimiento",
          "30 Minutos de cambios de contenido menores/mes (No acumulables)",
          "Garantía de Respuesta: 24 Horas Hábiles"
        ]
      },
      {
        name: "Pro: Estratégico (Recomendado)",
        description: "Nuestro plan más popular. Perfecto para PyMEs y Sitios Corporativos. Incluye **soporte proactivo, optimización de velocidad y horas de desarrollo**.",
        price: "$4,500 MXN / mes",
        features: [
          "Todo lo incluido en el plan Básico",
          "Backups Diarios (Histórico de 30 días)",
          "Actualizaciones Semanales (Revisión y aplicación de parches de seguridad)",
          "Monitoreo de Amenazas 24/7 y Firewall de Aplicación Web (WAF)",
          "Optimización Mensual de Base de Datos y Caché Avanzada",
          "1 Hora de desarrollo/cambios de contenido/mes (No acumulables)",
          "Garantía de Respuesta Prioritaria: 4 Horas Hábiles"
        ]
      },
      {
        name: "E-commerce: Premium 24/7",
        description: "Diseñado para Tiendas en Línea y Sistemas Críticos. Máxima prioridad y monitoreo constante para **prevenir pérdidas por caídas del sistema**.",
        price: "$7,500 MXN / mes",
        features: [
          "Todo lo incluido en el plan Pro",
          "Backups Cada 12 Horas (Histórico de 60 días)",
          "Actualizaciones Diarias (En horario de bajo tráfico)",
          "Seguridad de Nivel Empresarial y Monitoreo de Integridad de Archivos",
          "Monitoreo y Pruebas Mensuales de Pasarelas de Pago/Carrito",
          "2 Horas de desarrollo y soporte prioritario/mes (No acumulables)",
          "Garantía de Respuesta Crítica: 1 Hora Hábil (30 minutos para fallos mayores)"
        ]
      }
    ],
    features: [
      { label: "Sitios Cubiertos", value: "WordPress, WooCommerce y Sitios Estáticos" },
      { label: "Frecuencia de Backups", value: "Semanal a Cada 12 Horas (Depende del plan)" },
      { label: "Monitoreo de Seguridad", value: "24/7 contra Malware y Amenazas (WAF incluido en planes Pro+)" },
      { label: "Tiempo de Respuesta", value: "Prioritario (Garantía de respuesta de 24 horas a 1 hora, según el plan)" },
      { label: "Horas de Desarrollo/Soporte", value: "Incluidas en todos los planes para cambios de contenido y desarrollo menor" },
      { label: "Reporte", value: "Mensual detallado de actividades y seguridad" }
    ],
    gallery: [

    ],
    testimonials: [
      { quote: "Nunca más he tenido problemas de caídas o hackeos.", author: "Administrador de portal" },
      { quote: "El soporte responde rápido y siempre soluciona.", author: "Pyme digital" }
    ],
    faq: [
      {
    question: "¿Por qué necesito un plan de mantenimiento si mi sitio ya está terminado?",
    answer: "El mantenimiento es crucial porque los sitios web requieren actualizaciones constantes de software (WordPress, plugins y temas) para protegerse de vulnerabilidades de seguridad y asegurar la compatibilidad. Sin mantenimiento, su sitio corre el riesgo de ser atacado o fallar después de una actualización mayor."
  },
  {
    question: "¿El servicio incluye la corrección de fallos o errores?",
    answer: "Sí. Nuestros planes incluyen la **restauración inmediata** de su sitio desde el último backup en caso de fallos críticos. La corrección de errores de código que no sean resultado de actualizaciones o fallos de seguridad se cubrirá con las horas de soporte incluidas en su plan."
  },
  {
    question: "¿Qué pasa si se agotan mis minutos/horas de soporte incluidas?",
    answer: "Si requiere más cambios o desarrollo una vez agotadas las horas de su plan, el trabajo se cotizará y facturará por separado a nuestra tarifa preferencial por hora. Siempre le notificaremos antes de exceder el tiempo incluido para que mantenga el control total de los costos."
  },
  {
    question: "¿Puedo acumular las horas de desarrollo/soporte de un mes a otro?",
    answer: "No. Las horas de soporte y desarrollo incluidas en cada plan están diseñadas para un uso mensual proactivo. Si no se utilizan dentro del mes, las horas no son acumulables para el siguiente periodo. Esto nos permite garantizar un servicio consistente y una disponibilidad óptima para todos nuestros clientes."
  },
  {
    question: "¿Mi plan de mantenimiento incluye el costo de Hosting o Licencias Premium?",
    answer: "No. El costo de Hosting y las licencias de software de pago (ej. constructor de páginas o plugins especializados) son gastos externos que deben ser pagados directamente por el cliente. Nosotros nos encargamos de gestionarlos, actualizarlos y aplicarlos correctamente."
  },
  {
    question: "¿Qué plataformas cubren sus planes de mantenimiento?",
    answer: "Nuestros planes cubren principalmente sitios desarrollados en **WordPress** (incluyendo Tiendas con WooCommerce) y también podemos ofrecer soporte para sitios estáticos o de otras tecnologías, previa auditoría técnica."
  },
  {
    question: "¿El soporte cubre cambios de contenido o diseño en mi sitio?",
    answer: "Sí, nuestros planes incluyen horas específicas (30 min, 1h o 2h, según el plan) que puede utilizar para cambios de texto, subir imágenes, modificar menús o realizar tareas de desarrollo menor. Los proyectos de diseño o funcionalidad nuevos se cotizan aparte."
  },
  {
    question: "¿Cuál es el proceso si mi sitio es hackeado?",
    answer: "Actuamos inmediatamente. Gracias al monitoreo 24/7 (en planes Pro y E-commerce), detectamos amenazas al instante. El proceso incluye: **1) Aislamiento**, **2) Limpieza profunda** de malware y, **3) Restauración** desde un backup limpio para minimizar el tiempo de inactividad. Esta asistencia está incluida en su plan."
  },
  {
    question: "¿Puedo cancelar el servicio en cualquier momento?",
    answer: "Sí. Todos nuestros planes de mantenimiento se contratan de forma mensual sin plazos forzosos. Puede cancelar en cualquier momento notificándonos con 30 días de antelación sin ninguna penalización."
  }
    ]
  },
  {
    title: "Desarrollo de Software y Sistemas a Medida",
    slug: "desarrollo-a-medida",
    description: "Transformamos tus necesidades de negocio en **soluciones digitales únicas, eficientes y escalables**. Desde módulos especializados hasta sistemas completos (ERP/CRM lite).",
    icon: "💡",
    image: "/services/customdevelopment-min.jpg",
    bullets: [
      "Funcionalidad Única (Solución 100% Adaptada a tu Proceso)",
      "Conexión con tu Ecosistema (Integraciones Avanzadas y APIs)",
      "Listo para Crecer (Diseño Modular y Escalabilidad Garantizada)"
    ],
    price: "Cotización Personalizada (Basado en Horas/Alcance)",
    plans: [
      {
        name: "Módulo Básico y Optimización",
        description: "Desarrollo de funcionalidades específicas y acotadas (ej. Calculadoras personalizadas, Módulos de gestión simples, Mejoras de rendimiento).",
        price: "Desde $7,000 MXN"
      },
      {
        name: "Sistema Completo y Arquitectura",
        description: "Construcción de sistemas robustos, Portales de Clientes/Proveedores, Integración con múltiples plataformas o desarrollo de Backends y APIs.",
        price: "A cotizar"
      }
    ],
    features: [
      { label: "Tecnologías y Frameworks", value: "WordPress (Avanzado), Astro, Svelte, Vue, Laravel, Node.js y más. Utilizamos la pila tecnológica adecuada." },
      { label: "Integraciones Críticas", value: "Conexión a APIs propias y de terceros, Pasarelas de Pago, CRMs, ERPs, Sistemas de Logística" },
      { label: "Metodología de Trabajo", value: "Ágil (Scrum/Kanban), con entregas iterativas y revisión constante" },
      { label: "Garantía", value: "Periodo de corrección de errores (Bug fixing) incluido post-lanzamiento" },
      { label: "Entrega", value: "ÁCódigo limpio, Documentación Técnica y Capacitación del Sistema" }
    ],
    gallery: [
      "/projects/customdevelopment/saboracabo-min.png",
      "/projects/customdevelopment/bellaterraloscabos-min.png"
    ],
    testimonials: [
      { quote: "El desarrollo superó las expectativas y fue justo la herramienta que necesitábamos para automatizar el proceso de ventas.", author: "CEO, Startup tecnológica" },
      { quote: "Excelente comunicación, metodología clara y resultados entregados a tiempo. Un socio estratégico confiable.", author: "Director de IT, Pyme digital" }
    ],
    faq: [
      { question: "¿Qué tipos de proyectos desarrollan?", answer: "Cualquier proyecto que requiera lógica de negocio específica: desde sistemas internos, automatizaciones, APIs, hasta portales o extensiones para tu sitio web." },
      { question: "¿Cómo se define el precio?", answer: "El precio se define en base al alcance del proyecto y las horas de desarrollo estimadas. Iniciamos con una fase de análisis y levantamiento de requerimientos." }
    ]
  },
  {
    title: "Consultoría y Asesoría Web",
    slug: "consultoria-asesoria-web",
    description: "Resuelve dudas y obtén **claridad, dirección y un plan de acción** para tu proyecto digital. Te ayudamos a resolver problemas complejos y a **tomar las decisiones estratégicas** correctas.",
    icon: "🎯",
    image: "/services/consultingservices-min.jpg",
    bullets: [
      "Diagnóstico y Auditoría (Identificación profesional de áreas de mejora)",
      "Ruta de Acción (Recomendaciones y Prioridades Personalizadas)",
      "Toma de Decisiones (Acompañamiento Estratégico y Técnico)"
    ],
    price: "Desde $1,800 MXN",
    plans: [
      {
        name: "Sesión Estratégica Rápida",
        description: "Perfecto para **resolver un cuello de botella o una duda específica** de forma inmediata. Enfocado en obtener una solución viable en 60 minutos.",
        price: "$1,800 MXN",
        features: [
          "1 Hora de Consultoría 1 a 1 (Vía Zoom/Google Meet)",
          "Recomendaciones Inmediatas y Plan de Acción Rápido",
          "Informe Digital de la Sesión (Resumen de temas y acuerdos)",
          "Modalidad: Online o Presencial (Según disponibilidad)"
        ]
      },
      {
        name: "Acompañamiento Estratégico Mensual",
        description: "Un experto a tu lado de forma continua. Ideal para **lanzamientos, optimización de campañas o gestión de proyectos complejos** a largo plazo.",
        price: "$5,000 MXN",
        features: [
          "4 Sesiones de 1 Hora (Una por semana para un avance constante)",
          "Seguimiento y Revisión de Tareas entre sesiones",
          "Soporte de Dudas por WhatsApp/Telegram (Prioritario)",
          "Enfoque en Resultados Medibles (KPIs)"
        ]
      }
    ],
    features: [
      { label: "Especialidades", value: "SEO/SEM, Arquitectura Web, Estrategia de Contenido, E-commerce, Migraciones" },
      { label: "Modalidad de Encuentro", value: "Online (Recomendado) o Presencial (Sujeto a ubicación)" },
      { label: "Entrega", value: "Informe escrito con las conclusiones y pasos a seguir, incluido en todas las sesiones" },
      { label: "Valor Añadido", value: "Revisión previa de materiales para optimizar el tiempo de la sesión" }
    ],
    gallery: [

    ],
    testimonials: [
      { quote: "Las sesiones de consultoría no solo resolvieron nuestras dudas técnicas, sino que nos ayudaron a definir una estrategia clara que ha aumentado nuestro tráfico orgánico.", author: "Gerente de Marketing, Pyme digital" }
    ],
    faq: [
      { question: "¿Qué incluye el informe posterior a la sesión?", answer: "El informe documenta los puntos clave discutidos, las recomendaciones específicas y el plan de acción acordado para que tengas una guía de implementación." },
      { question: "¿La consultoría es solo para WordPress?", answer: "No. Ofrecemos asesoría estratégica en diversas plataformas y tecnologías (SEO, e-commerce, arquitectura de sistemas) para cualquier tipo de proyecto digital." }
    ]
  },
  {
    title: "Migraciones, Rescate y Ciberseguridad",
    slug: "migraciones-rescate-web",
    description: "Servicios críticos para tu sitio: **Migración sin interrupciones** (a nuevo hosting o dominio) y **limpieza de sitios hackeados** o con malware. ¡Tu SEO está a salvo!",
    icon: "🔄",
    image: "/services/webbackup-min.jpg",
    bullets: [
      "Transición Cero-Riesgo (Migración Segura y Monitorizada)",
      "Solución de Crisis (Recuperación y Limpieza de Sitios Hackeados)",
      "Blindaje de Posicionamiento (Preservación Total del SEO)",
      "Activación Rápida (Garantía de Tiempo de Inactividad Mínimo)"
    ],
    price: "Desde $3,500 MXN",
    plans: [
      {
        name: "Migración Express (Hosting/Dominio)",
        description: "Traslado seguro de tu sitio web a un nuevo servidor o dominio. Enfocado en la **integridad de datos** y la **continuidad operativa**.",
        price: "$3,500 MXN",
        features: [
          "Migración Técnica de archivos y base de datos (10GB máx.)",
          "Revisión y Configuración Básica Post-Traslado",
          "Garantía de Preservación de URLs y Metadatos (SEO)",
          "Tiempo de Inactividad (Downtime) Mínimo",
          "Análisis de Seguridad Inicial (Escaneo de amenazas)"
        ]
      },
      {
        name: "Rescate y Reestructuración PRO",
        description: "Ideal para la **limpieza de malware**, sitios hackeados o migraciones complejas (ej. a CMS o plataformas distintas). Incluye optimización y blindaje.",
        price: "Desde $7,500 MXN",
        features: [
          "Todo lo incluido en el plan 'Express'",
          "Limpieza de Malware y Eliminación de Código Malicioso",
          "Reestructuración de Bases de Datos y Optimización de Velocidad",
          "Configuración de Seguridad Avanzada (Firewall, Backups automáticos)",
          "Reporte Post-Rescate y Plan de Prevención",
          "1 Mes de Soporte Técnico Post-Trabajo"
        ]
      }
    ],
    features: [
      { label: "Especialización", value: "WordPress, WooCommerce, Sitios Estáticos y Migraciones entre CMS comunes" },
      { label: "Garantía de Datos", value: "Integridad de la Información y Contenido 100% garantizada" },
      { label: "Garantía de SEO", value: "Implementación de Redirecciones 301 para proteger tu posicionamiento" },
      { label: "Tiempo de Respuesta", value: "Servicio de Rescate y Limpieza con Atención Prioritaria" }
    ],
    gallery: [

    ],
    testimonials: [
      { quote: "Gracias a su intervención, recuperamos nuestro sitio hackeado en menos de 24 horas sin perder datos cruciales ni impacto en nuestro ranking de Google.", author: "Jackie B. - Marketing Bellaterra Los Cabos" }
    ],
    faq: [
      { question: "¿Cuánto tiempo tarda una migración estándar?", answer: "Una migración sencilla (plan Express) suele completarse en menos de 24 horas, minimizando al máximo el tiempo de inactividad de tu sitio." },
      { question: "¿Qué pasa si mi sitio está hackeado?", answer: "El plan 'Rescate PRO' incluye una limpieza profunda de código, eliminación de malware, y un análisis para prevenir futuros ataques." }
    ]
  },
  {
    title: "Renta de Equipo de Cómputo Profesional",
    slug: "renta-equipo-computo",
    description: "Soluciones de cómputo **rápidas y confiables** para eventos, oficinas temporales, *home office* o necesidades de alta demanda en Los Cabos. Equipos listos para trabajar.",
    icon: "💻",
    image: "/services/renta-laptops-min.jpg",
    bullets: [
      "Equipos de Última Generación (Listos para usar con software básico)",
      "Flexibilidad Total (Renta por Día, Semana o Mes)",
      "Logística Incluida (Entrega, Recolección y Soporte en Los Cabos)",
      "Variedad de Opciones (Windows y Apple para cada necesidad)",
      "Tarifas especiales: Obtén un 11% de descuento al rentar 3+ días o 5+ equipos."
    ],
    price: "Desde $900 MXN por día (Tarifas especiales por volumen)",
    plans: [
      {
        name: "Básico: Tareas de Oficina",
        description: "El equipo esencial para tareas administrativas, puntos de venta, registros de evento y navegación web.",
        price: "$900 MXN por día",
        features: [
          "**Procesador** Dual Core o equivalente moderno (Rendimiento estable)",
          "**Memoria/Almacenamiento** 4GB RAM / 128GB SSD",
          "Sistema Operativo: Windows 10/11",
          "Incluye **Paquetería** y Antivirus"
        ]
      },
      {
        name: "Productividad: Intermedio Rápido",
        description: "Ideal para reuniones, trabajo multitarea, y profesionales que requieren más velocidad y mejor rendimiento.",
        price: "$1,300 MXN por día",
        features: [
          "**Procesador** Intel Core i5 o AMD Ryzen 5",
          "**Memoria/Almacenamiento** 8GB RAM / 256GB SSD (Velocidad mejorada)",
          "Sistema Operativo: Windows 10/11",
          "Perfecto para **Videoconferencias y Suites de Negocio**"
        ]
      },
      {
        name: "Alto Rendimiento: Edición y Desarrollo",
        description: "Máxima potencia. Diseñado para tareas exigentes como edición de video/foto, desarrollo de software, o simulaciones en eventos.",
        price: "$2,000 MXN por día",
        features: [
          "**Procesador** Intel Core i7 (o equivalente superior)",
          "**Memoria/Almacenamiento** 16GB RAM / 512GB SSD",
          "**Gráficos dedicados** (Según modelo, para tareas visuales)",
          "Ideal para **Software de Diseño (Adobe) y Multitarea Pesada**"
        ]
      },
      {
        name: "Especializado: Apple MacBook Pro",
        description: "Potencia, diseño y compatibilidad macOS para creativos, desarrolladores y usuarios avanzados de la plataforma Apple.",
        price: "$2,500 MXN por día",
        features: [
          "**Modelo** Apple MacBook Pro (Chip i7 o equivalente)",
          "**Memoria/Almacenamiento** 16GB RAM / 512GB SSD",
          "Sistema Operativo: macOS (Última versión disponible)",
          "**Incluye Adaptadores** esenciales (USB-C/HDMI)"
        ]
      }
    ],
    features: [
      { label: "Entrega y Recolección", value: "**Sin costo** dentro de la zona de Los Cabos (Cabo San Lucas y San José del Cabo)" },
      { label: "Soporte Técnico", value: "**Reemplazo Inmediato** de equipo en caso de falla durante el periodo de renta" },
      { label: "Software Incluido", value: "Windows o macOS, Office Básico (o Suite de Productividad) y Antivirus" },
      { label: "Flexibilidad de Plazo", value: "Tarifas preferenciales por **semana o mes**" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "La logística de entrega y recolección fue impecable. La laptop funcionó perfectamente para nuestro evento de tres días. ¡Servicio de 5 estrellas!", author: "Organizador de Evento Corporativo" },
      { quote: "Excelente servicio, los equipos siempre en óptimas condiciones y el soporte técnico es inmediato. Son nuestros proveedores de cabecera en Los Cabos.", author: "Gerente Administrativo" }
    ],
    faq: [
      { question: "¿Incluye software adicional?", answer: "Incluye software básico (Office o equivalente, navegador, antivirus). Se puede solicitar la instalación de software específico con cargo adicional." },
      { question: "¿Se requiere depósito de seguridad?", answer: "Sí, se solicita un depósito reembolsable cuya cantidad varía según el valor del equipo rentado. Este se detalla en la cotización." },
      { question: "¿Hay tarifas preferenciales por renta extendida?", answer: "Sí, ofrecemos tarifas significativamente más bajas para rentas por semana o mes. Contáctanos para una cotización a largo plazo." },
      { question: "¿Qué pasa si el equipo presenta fallas técnicas?", answer: "Garantizamos el **reemplazo inmediato** del equipo sin costo extra durante el periodo de renta, asegurando la continuidad de tu trabajo." },
      { question: "¿Puedo solicitar factura electrónica (CFDI)?", answer: "Sí, emitimos factura electrónica (CFDI) para todos nuestros servicios. Por favor, solicita tu factura al momento de confirmar el pago." }
    ]
  }
];
