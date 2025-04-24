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
  }[];
}

export const services: Service[] = [
  {
    title: "Sitio Web WordPress Profesional",
    slug: "wordpress-profesional",
    description: "Desarrollo de sitios web modernos, seguros y autoadministrables.",
    icon: "🌐",
    image: "/services/wordpress-min.jpg",
    bullets: [
      "Diseño personalizado",
      "Optimización SEO básica",
      "Soporte y capacitación"
    ],
    price: "Desde $6,500 MXN",
    plans: [
      {
        name: "Básico",
        description: "Sitio institucional de hasta 5 páginas.",
        price: "$6,500 MXN",
        features: [
          "Diseño personalizado",
          "SEO básico",
          "Capacitación incluida"
        ]
      },
      {
        name: "Pro",
        description: "Incluye tienda básica y blog.",
        price: "$11,000 MXN",
        features: [
          "Todo lo del Básico",
          "Tienda WooCommerce",
          "Blog corporativo"
        ]
      },
      {
        name: "Premium",
        description: "Hasta 15 páginas, optimización avanzada y soporte extendido.",
        price: "$17,500 MXN",
        features: [
          "Todo lo del Pro",
          "Optimización SEO avanzada",
          "Soporte 6 meses"
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
      { question: "¿El sitio es seguro?", answer: "Sí, aplicamos buenas prácticas de seguridad y actualizaciones." }
    ]
  },
  {
    title: "Tienda en línea (WooCommerce)",
    slug: "tienda-online-woocommerce",
    description: "Vende productos o servicios con una tienda online robusta y fácil de gestionar.",
    icon: "🛒",
    image: "/services/tiendaonline-min.jpg",
    bullets: [
      "Integración de pagos",
      "Gestión de inventario",
      "Reportes de ventas"
    ],
    price: "Desde $13,000 MXN",
    plans: [
      {
        name: "Starter",
        description: "Tienda básica hasta 20 productos.",
        price: "$13,000 MXN",
        features: [
          "Pasarelas de pago",
          "Gestión de productos",
          "SEO básico"
        ]
      },
      {
        name: "Avanzada",
        description: "Incluye integraciones y reportes avanzados.",
        price: "$22,000 MXN",
        features: [
          "Todo lo de Starter",
          "Integración con envíos",
          "Reportes personalizados"
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
      { question: "¿Puedo vender productos digitales?", answer: "Sí, WooCommerce soporta productos físicos y digitales." }
    ]
  },
  {
    title: "Landing Page de Alto Impacto",
    slug: "landing-page-impacto",
    description: "Páginas diseñadas para captar leads y aumentar conversiones.",
    icon: "🚀",
    image: "/services/landingpage-min.jpg",
    bullets: [
      "Diseño enfocado en conversiones",
      "Integración con formularios",
      "Optimización para móviles"
    ],
    price: "$4,500 MXN",
    plans: [
      {
        name: "Landing única",
        description: "Página de aterrizaje personalizada.",
        price: "$4,500 MXN",
        features: [
          "Diseño responsive",
          "Integración con formularios",
          "Optimización SEO"
        ]
      },
      {
        name: "Landing + A/B Testing",
        description: "Incluye testeo de variantes y reportes.",
        price: "$6,500 MXN",
        features: [
          "Todo lo anterior",
          "Implementación de pruebas A/B",
          "Informe de resultados"
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
    title: "Mantenimiento y Soporte Web",
    slug: "mantenimiento-soporte-web",
    description: "Mantén tu web segura, actualizada y libre de problemas.",
    icon: "🛠️",
    image: "/services/maintenance-support-min.jpg",
    bullets: [
      "Actualizaciones periódicas",
      "Backups automáticos",
      "Soporte técnico prioritario"
    ],
    features: [
      { label: "Cobertura", value: "WordPress, WooCommerce y sitios estáticos" },
      { label: "Frecuencia de backups", value: "Diaria o semanal" },
      { label: "Monitoreo de seguridad", value: "Incluido" },
      { label: "Tiempo de respuesta", value: "Menos de 24h" },
      { label: "Soporte", value: "Ilimitado durante el periodo contratado" }
    ],
    gallery: [
      
    ],
    testimonials: [
      { quote: "Nunca más he tenido problemas de caídas o hackeos.", author: "Administrador de portal" },
      { quote: "El soporte responde rápido y siempre soluciona.", author: "Pyme digital" }
    ],
    faq: [
      { question: "¿Incluye restauración ante fallos?", answer: "Sí, restauramos tu sitio desde backups en caso de problemas." },
      { question: "¿El soporte cubre cambios de contenido?", answer: "Incluye cambios menores y asistencia técnica general." },
      { question: "¿Puedo cancelar en cualquier momento?", answer: "Sí, sin penalización." }
    ]
  },
  {
    title: "Desarrollo a Medida",
    slug: "desarrollo-a-medida",
    description: "Soluciones personalizadas en WordPress, Astro, Svelte, Vue, Laravel y más.",
    icon: "💡",
    image: "/services/customdevelopment-min.jpg",
    bullets: [
      "Funcionalidad a la medida",
      "Integraciones avanzadas",
      "Escalabilidad garantizada"
    ],
    price: "A cotizar",
    plans: [
      {
        name: "Desarrollo básico",
        description: "Funcionalidad personalizada simple (formularios, landings, etc.)",
        price: "Desde $7,000 MXN"
      },
      {
        name: "Desarrollo avanzado",
        description: "Integraciones, dashboards, portales, APIs, etc.",
        price: "A cotizar"
      }
    ],
    features: [
      { label: "Lenguajes/Frameworks", value: "WordPress, Astro, Svelte, Vue, Laravel, Node.js" },
      { label: "Integraciones", value: "APIs, pagos, CRMs, ERPs" },
      { label: "Soporte", value: "A medida del proyecto" },
      { label: "Documentación", value: "Incluida" },
      { label: "Metodología", value: "Ágil, entregas iterativas" }
    ],
    gallery: [
      "/projects/customdevelopment/saboracabo-min.png",
      "/projects/customdevelopment/bellaterraloscabos-min.png"
    ],
    testimonials: [
      { quote: "El desarrollo fue justo lo que necesitábamos, ¡gran trabajo!", author: "Startup tecnológica" },
      { quote: "Excelente comunicación y resultados a tiempo.", author: "Director de IT" }
    ],
    faq: [
      { question: "¿Puedo solicitar cualquier funcionalidad?", answer: "Sí, analizamos tu requerimiento y te asesoramos en la mejor solución." },
      { question: "¿Incluye soporte post-lanzamiento?", answer: "Sí, ofrecemos distintos planes de soporte según tu necesidad." }
    ]
  },
  {
    title: "Optimización SEO y Velocidad",
    slug: "optimizacion-seo-velocidad",
    description: "Mejora el posicionamiento y la rapidez de tu web para atraer más clientes.",
    icon: "⚡",
    image: "/services/seo-min.jpg",
    bullets: [
      "Auditoría SEO completa",
      "Optimización de carga",
      "Mejores prácticas técnicas"
    ],
    price: "Desde $5,500 MXN",
    plans: [
      {
        name: "Básico",
        description: "Optimización de velocidad y ajustes básicos.",
        price: "$5,500 MXN",
        features: [
          "Optimización de velocidad",
          "Ajustes SEO básicos",
          "Informe de resultados"
        ]
      },
      {
        name: "Completo",
        description: "Optimización completa con seguimiento.",
        price: "$8,500 MXN",
        features: [
          "Optimización completa",
          "Informe detallado",
          "Seguimiento 1 mes"
        ]
      }
    ],
    features: [
      { label: "Tipo de optimización", value: "SEO técnico, On-page, velocidad de carga" },
      { label: "Herramientas usadas", value: "Google PageSpeed, GTmetrix, SEMrush" },
      { label: "Informe de resultados", value: "Incluido" },
      { label: "Soporte", value: "1 mes post-servicio" }
    ],
    gallery: [
      
    ],
    testimonials: [
      { quote: "Nuestra web ahora carga en segundos y subimos posiciones en Google.", author: "Empresa de servicios" }
    ],
    faq: [
      { question: "¿Sirve para cualquier tipo de web?", answer: "Sí, analizamos y optimizamos sitios WordPress, tiendas y páginas estáticas." },
      { question: "¿Incluye reporte de mejoras?", answer: "Sí, recibirás un informe detallado antes y después del servicio." }
    ]
  },
  {
    title: "Consultoría y Asesoría Web",
    slug: "consultoria-asesoria-web",
    description: "Resuelve dudas y mejora tu estrategia digital con expertos.",
    icon: "🎯",
    image: "/services/consultingservices-min.jpg",
    bullets: [
      "Diagnóstico profesional",
      "Recomendaciones personalizadas",
      "Acompañamiento estratégico"
    ],
    price: "Desde $1,800 MXN",
    plans: [
      {
        name: "Sesión única",
        description: "Consultoría puntual para resolver dudas específicas.",
        price: "$1,800 MXN",
        features: [
          "1 hora de consultoría",
          "Recomendaciones personalizadas",
          "Informe posterior"
        ]
      },
      {
        name: "Paquete mensual",
        description: "Acompañamiento continuo para tu proyecto digital.",
        price: "$5,000 MXN",
        features: [
          "4 sesiones",
          "Seguimiento semanal",
          "Soporte por WhatsApp"
        ]
      }
    ],
    features: [
      { label: "Modalidad", value: "Online o presencial" },
      { label: "Duración", value: "Sesiones de 1h o paquetes mensuales" },
      { label: "Informe de sesión", value: "Incluido" },
      { label: "Seguimiento", value: "Opcional" }
    ],
    gallery: [
      
    ],
    testimonials: [
      { quote: "Las sesiones de consultoría nos ayudaron a definir una estrategia clara.", author: "Gerente de marketing" }
    ],
    faq: [
      { question: "¿Puedo contratar solo una sesión?", answer: "Sí, puedes solicitar sesiones únicas o paquetes según tu necesidad." },
      { question: "¿Incluye análisis de mi web?", answer: "Sí, revisamos tu web y te damos recomendaciones personalizadas." }
    ]
  },
  {
    title: "Migraciones y Rescate Web",
    slug: "migraciones-rescate-web",
    description: "Recupera o migra tu sitio sin perder información ni posicionamiento.",
    icon: "🔄",
    image: "/services/webbackup-min.jpg",
    bullets: [
      "Migración segura",
      "Recuperación de sitios hackeados",
      "Preservación de SEO"
    ],
    price: "Desde $3,500 MXN",
    plans: [
      {
        name: "Básica",
        description: "Migración de contenido y configuración básica.",
        price: "$3,500 MXN",
        features: [
          "Migración de contenido",
          "Preservación de SEO",
          "Configuración básica"
        ]
      },
      {
        name: "Completa",
        description: "Migración completa con optimización y soporte.",
        price: "$7,500 MXN",
        features: [
          "Migración completa",
          "Optimización",
          "Soporte post-migración"
        ]
      }
    ],
    features: [
      { label: "Tipos de migración", value: "WordPress, WooCommerce, sitios estáticos" },
      { label: "Preservación de datos", value: "Sí, garantizamos la integridad de tu información" },
      { label: "Soporte post-migración", value: "1 mes incluido" },
      { label: "Análisis de seguridad", value: "Incluido" }
    ],
    gallery: [
      
    ],
    testimonials: [
      { quote: "Recuperamos nuestro sitio web sin perder datos ni SEO.", author: "Dueño de sitio web" }
    ],
    faq: [
      { question: "¿Puedo migrar mi sitio yo mismo?", answer: "Sí, pero recomendamos nuestro servicio para evitar pérdidas de datos o SEO." },
      { question: "¿Incluye soporte técnico?", answer: "Sí, te ayudamos en cualquier problema técnico post-migración." }
    ]
  },
  {
    title: "Renta de equipo de cómputo",
    slug: "renta-equipo-computo",
    description: "Renta de laptops para eventos, oficinas temporales o necesidades puntuales. Equipos confiables y listos para usar.",
    icon: "💻",
    image: "/services/renta-laptops-min.jpg",
    bullets: [
      "Laptops listas para usar",
      "Precios por día",
      "Opciones para diferentes necesidades"
    ],
    price: "Desde $900 MXN por día",
    plans: [
      {
        name: "Laptop dual core AMD",
        description: "Equipo básico para tareas de oficina y navegación.",
        price: "$900 MXN por día",
        features: [
          "Procesador dual core AMD",
          "4GB RAM / 128GB SSD",
          "Windows 10 o superior"
        ]
      },
      {
        name: "Laptop I5/R5",
        description: "Equipo intermedio para productividad y multitarea.",
        price: "$1,300 MXN por día",
        features: [
          "Intel Core i5 o Ryzen 5",
          "8GB RAM / 256GB SSD",
          "Windows 10/11"
        ]
      },
      {
        name: "Laptop de alto rendimiento i7+",
        description: "Ideal para tareas exigentes, edición o desarrollo.",
        price: "$2,000 MXN por día",
        features: [
          "Intel Core i7 o superior",
          "16GB RAM / 512GB SSD",
          "Gráficos dedicados (según modelo)"
        ]
      },
      {
        name: "Laptop Apple Macbook Pro i7",
        description: "Potencia y diseño para usuarios Apple.",
        price: "$2,500 MXN por día",
        features: [
          "Apple Macbook Pro i7",
          "16GB RAM / 512GB SSD",
          "macOS"
        ]
      }
    ],
    features: [
      { label: "Entrega y recolección", value: "Incluidas en Los Cabos" },
      { label: "Soporte técnico", value: "Durante el periodo de renta" },
      { label: "Accesorios", value: "Cargador y funda incluidos" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "La laptop funcionó perfecto para nuestro evento.", author: "Organizador de evento" },
      { quote: "Excelente servicio y equipos en buen estado.", author: "Cliente frecuente" }
    ],
    faq: [
      { question: "¿Incluye software?", answer: "Incluye software básico (Office, navegador, antivirus)." },
      { question: "¿Se requiere depósito?", answer: "Sí, se solicita un depósito reembolsable según el equipo." },
      { question: "¿Puedo rentar por más de un día?", answer: "Sí, tenemos tarifas preferenciales por semana o mes." }
    ]
  }
];
