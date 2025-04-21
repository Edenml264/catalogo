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
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Diseño personalizado",
      "Optimización SEO básica",
      "Soporte y capacitación"
    ],
    price: "Desde $350 USD",
    plans: [
      {
        name: "Básico",
        description: "Sitio institucional de hasta 5 páginas.",
        price: "$350 USD",
        features: [
          "Diseño personalizado",
          "SEO básico",
          "Capacitación incluida"
        ]
      },
      {
        name: "Pro",
        description: "Incluye tienda básica y blog.",
        price: "$600 USD",
        features: [
          "Todo lo del Básico",
          "Tienda WooCommerce",
          "Blog corporativo"
        ]
      },
      {
        name: "Premium",
        description: "Hasta 15 páginas, optimización avanzada y soporte extendido.",
        price: "$950 USD",
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
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Integración de pagos",
      "Gestión de inventario",
      "Reportes de ventas"
    ],
    price: "Desde $700 USD",
    plans: [
      {
        name: "Starter",
        description: "Tienda básica hasta 20 productos.",
        price: "$700 USD",
        features: [
          "Pasarelas de pago",
          "Gestión de productos",
          "SEO básico"
        ]
      },
      {
        name: "Avanzada",
        description: "Incluye integraciones y reportes avanzados.",
        price: "$1200 USD",
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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Diseño enfocado en conversiones",
      "Integración con formularios",
      "Optimización para móviles"
    ],
    price: "$250 USD",
    plans: [
      {
        name: "Landing única",
        description: "Página de aterrizaje personalizada.",
        price: "$250 USD",
        features: [
          "Diseño responsive",
          "Integración con formularios",
          "Optimización SEO"
        ]
      },
      {
        name: "Landing + A/B Testing",
        description: "Incluye testeo de variantes y reportes.",
        price: "$350 USD",
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
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
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
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=400&q=80"
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
// Fin del array de servicios
  {
    title: "Desarrollo a Medida",
    slug: "desarrollo-a-medida",
    description: "Soluciones personalizadas en WordPress, Astro, Svelte, Vue, Laravel y más.",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
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
        price: "Desde $400 USD"
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
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Auditoría SEO completa",
      "Optimización de carga",
      "Mejores prácticas técnicas"
    ],
    features: [
      { label: "Tipo de optimización", value: "SEO técnico, On-page, velocidad de carga" },
      { label: "Herramientas usadas", value: "Google PageSpeed, GTmetrix, SEMrush" },
      { label: "Informe de resultados", value: "Incluido" },
      { label: "Soporte", value: "1 mes post-servicio" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Diagnóstico profesional",
      "Recomendaciones personalizadas",
      "Acompañamiento estratégico"
    ],
    features: [
      { label: "Modalidad", value: "Online o presencial" },
      { label: "Duración", value: "Sesiones de 1h o paquetes mensuales" },
      { label: "Informe de sesión", value: "Incluido" },
      { label: "Seguimiento", value: "Opcional" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?auto=format&fit=crop&w=400&q=80"
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
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Migración segura",
      "Recuperación de sitios hackeados",
      "Preservación de SEO"
    ],
    features: [
      { label: "Tipos de migración", value: "WordPress, WooCommerce, sitios estáticos" },
      { label: "Preservación de datos", value: "Sí, garantizamos la integridad de tu información" },
      { label: "Soporte post-migración", value: "1 mes incluido" },
      { label: "Análisis de seguridad", value: "Incluido" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "Recuperamos nuestro sitio web sin perder datos ni SEO.", author: "Dueño de sitio web" }
    ],
    faq: [
      { question: "¿Puedo migrar mi sitio yo mismo?", answer: "Sí, pero recomendamos nuestro servicio para evitar pérdidas de datos o SEO." },
      { question: "¿Incluye soporte técnico?", answer: "Sí, te ayudamos en cualquier problema técnico post-migración." }
    ]
  }
];
