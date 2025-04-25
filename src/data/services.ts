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
    title: "Servicios de DJ",
    slug: "dj",
    description: "DJ profesional para eventos sociales y corporativos. Música personalizada, ambiente y animación para bodas, fiestas y celebraciones.",
    icon: "🎧",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Música personalizada para cada evento",
      "Equipo de audio profesional",
      "Animación y conducción"
    ],
    price: "Desde $8,000 MXN",
    features: [
      { label: "Duración", value: "Hasta 3 horas" },
      { label: "Incluye", value: "DJ, consola, bocinas, micrófono" },
      { label: "Repertorio", value: "Personalizable" },
      { label: "Montaje", value: "1 hora antes del evento" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "¡El DJ puso a todos a bailar toda la noche!", author: "Novia feliz" },
      { quote: "Excelente ambiente y selección musical.", author: "Organizador de evento" }
    ],
    faq: [
      { question: "¿Se puede pedir canciones específicas?", answer: "Sí, puedes compartir tu playlist o pedir canciones durante el evento." },
      { question: "¿Incluye iluminación?", answer: "Podemos cotizar paquetes con iluminación adicional." }
    ]
  },
  {
    title: "Renta de equipo Audiovisual",
    slug: "renta-equipo-audiovisual",
    description: "Renta de bocinas, micrófonos, proyectores, pantallas y más para eventos de cualquier tamaño.",
    icon: "🔊",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Bocinas y audio profesional",
      "Micrófonos inalámbricos",
      "Proyectores y pantallas LED"
    ],
    price: "Desde $2,000 MXN",
    features: [
      { label: "Entrega y recolección", value: "Incluidas en Los Cabos" },
      { label: "Soporte técnico", value: "Durante el evento" },
      { label: "Opciones", value: "Audio, video, iluminación" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "El equipo llegó puntual y todo funcionó perfecto.", author: "Coordinador de boda" }
    ],
    faq: [
      { question: "¿Incluye instalación?", answer: "Sí, nuestro equipo instala y prueba todo antes del evento." },
      { question: "¿Qué marcas manejan?", answer: "Trabajamos con marcas reconocidas y equipos en excelente estado." }
    ]
  },
  {
    title: "Renta de Iluminación Decorativa",
    slug: "renta-iluminacion-decorativa",
    description: "Iluminación ambiental y decorativa para transformar cualquier espacio. Opciones: Bistro Lights, Fairy Lights, Luxury Drape Lights y LED Wash Light.",
    icon: "💡",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Bistro Lights para exteriores",
      "Fairy Lights para ambientes mágicos",
      "Luxury Drape Lights para eventos elegantes",
      "LED Wash Light para resaltar espacios"
    ],
    price: "Desde $1,500 MXN",
    features: [
      { label: "Instalación", value: "Incluida" },
      { label: "Opciones", value: "Bistro, Fairy, Drape, LED Wash" },
      { label: "Consumo energético", value: "Bajo" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "La iluminación transformó nuestro evento por completo.", author: "Cliente satisfecho" }
    ],
    faq: [
      { question: "¿Se puede instalar en exteriores?", answer: "Sí, contamos con opciones para exteriores e interiores." },
      { question: "¿Cuánto tiempo tarda la instalación?", answer: "Dependiendo de la cantidad, usualmente 1-2 horas." }
    ]
  },
  {
    title: "Cortinaje Blanco",
    slug: "cortinaje-blanco",
    description: "Cortinas blancas elegantes para dividir espacios, crear fondos o ambientar eventos.",
    icon: "🕊️",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Cortinas de tela blanca premium",
      "Montaje profesional",
      "Altura y largo personalizables"
    ],
    price: "Desde $2,500 MXN",
    features: [
      { label: "Material", value: "Tela blanca opaca" },
      { label: "Altura", value: "Hasta 4 metros" },
      { label: "Instalación", value: "Incluida" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "El cortinaje le dio un toque elegante a la boda.", author: "Novia" }
    ],
    faq: [
      { question: "¿Se puede instalar en exteriores?", answer: "Sí, siempre que haya estructura para fijarlo." }
    ]
  },
  {
    title: "Letras Volumétricas",
    slug: "letras-volumetricas",
    description: "Letras gigantes iluminadas para personalizar eventos, bodas y celebraciones. Iniciales, nombres o palabras.",
    icon: "🔠",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Letras de 1.2m de alto",
      "Iluminación LED blanca o de color",
      "Personalización de letras y símbolos"
    ],
    price: "Desde $1,800 MXN por letra",
    features: [
      { label: "Altura", value: "1.2 metros" },
      { label: "Material", value: "Madera y acrílico" },
      { label: "Iluminación", value: "LED" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "¡Las letras fueron el centro de atención de la fiesta!", author: "Organizador de evento" }
    ],
    faq: [
      { question: "¿Se pueden rentar solo algunas letras?", answer: "Sí, puedes elegir las que necesites." }
    ]
  },
  {
    title: "Chisperos Fríos",
    slug: "chisperos-frios",
    description: "Efectos de chisperos fríos para entradas, vals, shows y momentos especiales. Seguro para interiores y exteriores.",
    icon: "✨",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Efecto espectacular y seguro",
      "Sin riesgo de quemaduras",
      "Apto para interiores y exteriores"
    ],
    price: "Desde $3,000 MXN (2 chisperos)",
    features: [
      { label: "Duración", value: "Hasta 30 segundos por disparo" },
      { label: "Cantidad", value: "Desde 2 hasta 8 chisperos" },
      { label: "Operación", value: "Personal técnico incluido" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "¡El efecto fue increíble en nuestra entrada!", author: "Novios" }
    ],
    faq: [
      { question: "¿Son seguros para interiores?", answer: "Sí, no generan calor ni humo." }
    ]
  },
  {
    title: "Pistas de Baile Personalizadas",
    slug: "pistas-baile-personalizadas",
    description: "Pistas de baile con acabados de lujo: charol, madera fina o tipo ajedrez. Personaliza tu evento con estilo.",
    icon: "🕺",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Cubierta de charol en color a elegir",
      "Acabados en madera fina",
      "Cubierta tipo ajedrez (blanco y negro)"
    ],
    price: "Desde $7,000 MXN",
    features: [
      { label: "Tamaños", value: "Desde 16m² hasta 64m²" },
      { label: "Acabados", value: "Charol, madera, ajedrez" },
      { label: "Instalación", value: "Incluida" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "La pista lució espectacular en la boda.", author: "Novia" }
    ],
    faq: [
      { question: "¿Se puede personalizar el color?", answer: "Sí, ofrecemos varios colores y acabados." }
    ]
  },
  {
    title: "Estrados Personalizados",
    slug: "estrados-personalizados",
    description: "Estrados y tarimas a la medida para escenarios, pasarelas, pistas y presentaciones. Seguridad y calidad garantizadas.",
    icon: "🎤",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
    bullets: [
      "Altura y tamaño personalizables",
      "Montaje profesional",
      "Estructura segura y resistente"
    ],
    price: "Desde $3,500 MXN",
    features: [
      { label: "Altura", value: "Desde 20cm hasta 1m" },
      { label: "Capacidad", value: "Hasta 2 toneladas" },
      { label: "Superficie", value: "Antiderrapante" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80"
    ],
    testimonials: [
      { quote: "El estrado fue perfecto para el show.", author: "Productor de evento" }
    ],
    faq: [
      { question: "¿Pueden hacer estrados a la medida?", answer: "Sí, nos adaptamos a tus necesidades de tamaño y forma." }
    ]
  }
];