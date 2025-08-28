import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all translation files
const enTranslations = {
  navigation: {
    home: "Home",
    about: "About Us",
    faqs: "FAQs",
  },
  hero: {
    getStarted: "GET STARTED",
    headline:
      "Moving, Upgraded. No stress. No guesswork. Just tap, snap, and relax.",
    subheadline:
      "Our platform uses AI to instantly identify your items, match you with trusted movers, and streamline the entire process. One photo. One minute. One less headache.",
    getQuote: "GET A QUOTE",
    trackMove: "TRACK MOVE",
    activeUsers: "active users are happy with Zinter",
  },
  features: {
    smarterTitle: "Smarter Than a Form. Easier Than a Call",
    smarterDescription:
      "Upload a few photos of your space and our AI scans your inventory and instantly pulls in competitive quotes from our network of professional movers.",
    sellingPoint: "SELLING POINT",
    eliteTitle: "Elite Movers. Fully Vetted. Always Reliable.",
    eliteDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    seamlessBooking: "Seamless and easy booking process",
    trustedNetwork: "Trusted network of moving companies",
    expertGuidance: "Expert guidance and swift support anytime",
    getStartedBtn: "Get Started",
  },
  process: {
    title: "Your Move, in 60 Seconds.",
    step1Title: "Submit your move details",
    step1Description:
      "Fill in our quick form with your move's start and end locations, and size of your move",
    step2Title: "Snap your space",
    step2Description:
      "Take a few quick photos of the rooms or items you're moving.",
    step3Title: "Get real-time quotes",
    step3Description:
      "Our AI scans your inventory and returns accurate estimates from trusted pros.",
    step4Title: "Pick your match",
    step4Description:
      "Compare offers. Read reviews. Book the mover that fits your needs and budget.",
    letsGetMoving: "Let's Get You Moving",
  },
  testimonials: {
    title: "Real People. Real Moves. Real Peace of Mind.",
    main: "Testimonials",
    testimonial1:
      "I uploaded five photos from my phone and had a quote in minutes. Movers showed up exactly when they said they would.",
    testimonial1Type: "Studio Move",
    testimonial2:
      "Honestly, it felt too easy. I expected forms and stress but it was all handled through the platform.",
    testimonial2Type: "Family Move",
    testimonial3:
      "I hate moving. But this time? It was smooth, fast, and didn't wreck my weekend.",
    testimonial3Type: "2-Bedroom Apartment",
  },
  faq: {
    title: "Frequently Asked Questions",
    paymentMethods: "What payment methods are supported?",
    howEarly: "How early should I book my move?",
    packing: "Will the movers pack my stuff too?",
    whatsIncluded: "What's included in my quote?",
    packingExtra: "Is packing part of the deal or extra?",
    reschedule: "Can I reschedule if plans change?",
    tracking: "Can I track my move in real time?",
    storage: "What if I need storage, can you help?",
    costCalculation: "How is the cost of moving worked out?",
  },
  newsletter: {
    title: "Don't Miss a Move.",
    header: "NEWS LETTER",
    description:
      "Get insider tips, limited deals, and moving hacks, straight to your inbox.",
  },
  contact: {
    title: "CONTACT US",
    description:
      "Join us on our journey to redefine logistics with innovation and excellence!",
    enquiry:
      "For inquiries, partnerships, or service bookings, reach out to us at 📧 support@zinter.nl",
  },
  footer: {
    quicklinks: "Quicklinks",
    aboutUs: "About Us",
    reportIssue: "Report an issue",
    faq: "Frequently Asked Questions",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    contact: "Contact",
    schedule: "Mon. - Fri.: 08:00 - 19:00\nSat.: 09:00 - 17:00",
    copyright: "© 2025 All rights Reserved",
  },
  aboutheader: {
    title: "About Zinter",
    description: "Our mission is to revolutionize the logistics industry.",
  },
  hasslefree: {
    title: "HASSLE FREE MOVE",
    description:
      "Our mission is to revolutionize the logistics industry by offering seamless, tech-driven solutions",
    founded: "Founded",
    more: "That simplify and optimize the moving experience for individuals and businesses alike. Zinter BV is committed to innovation, efficiency, and customer satisfaction.",
    founded_year: "2024",
    location: "Location",
    location_name: "Netherlands",
  },
};

const esTranslations = {
  navigation: {
    home: "Inicio",
    about: "Acerca de",
    faqs: "Preguntas Frecuentes",
  },
  hero: {
    getStarted: "COMENZAR",
    headline:
      "Mudanza, Mejorada. Sin estrés. Sin conjeturas. Solo toca, fotografía y relájate.",
    subheadline:
      "Nuestra plataforma usa IA para identificar instantáneamente tus artículos, conectarte con mudanceros confiables y agilizar todo el proceso. Una foto. Un minuto. Un dolor de cabeza menos.",
    getQuote: "OBTENER COTIZACIÓN",
    trackMove: "RASTREAR MUDANZA",
    activeUsers: "usuarios activos están felices con Zinter",
  },
  features: {
    smarterTitle:
      "Más Inteligente que un Formulario. Más Fácil que una Llamada",
    smarterDescription:
      "Sube unas fotos de tu espacio y nuestra IA escanea tu inventario e instantáneamente obtiene cotizaciones competitivas de nuestra red de mudanceros profesionales.",
    sellingPoint: "PUNTO DE VENTA",
    eliteTitle:
      "Mudanceros Elite. Completamente Verificados. Siempre Confiables.",
    eliteDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    seamlessBooking: "Proceso de reserva fluido y fácil",
    trustedNetwork: "Red confiable de empresas de mudanzas",
    expertGuidance: "Orientación experta y soporte rápido en cualquier momento",
    getStartedBtn: "Comenzar",
  },
  process: {
    title: "Tu Mudanza, en 60 Segundos.",
    step1Title: "Envía los detalles de tu mudanza",
    step1Description:
      "Completa nuestro formulario rápido con las ubicaciones de inicio y destino de tu mudanza, y el tamaño de tu mudanza",
    step2Title: "Fotografía tu espacio",
    step2Description:
      "Toma unas fotos rápidas de las habitaciones o artículos que vas a mudar.",
    step3Title: "Obtén cotizaciones en tiempo real",
    step3Description:
      "Nuestra IA escanea tu inventario y devuelve estimaciones precisas de profesionales confiables.",
    step4Title: "Elige tu pareja perfecta",
    step4Description:
      "Compara ofertas. Lee reseñas. Reserva el mudancero que se ajuste a tus necesidades y presupuesto.",
    letsGetMoving: "Pongámonos en Marcha",
  },
  testimonials: {
    main: "Testimonios.",
    title: "Personas Reales. Mudanzas Reales. Tranquilidad Real.",
    testimonial1:
      "Subí cinco fotos desde mi teléfono y tuve una cotización en minutos. Los mudanceros llegaron exactamente cuando dijeron que lo harían.",
    testimonial1Type: "Mudanza de Estudio",
    testimonial2:
      "Honestamente, se sintió demasiado fácil. Esperaba formularios y estrés pero todo se manejó a través de la plataforma.",
    testimonial2Type: "Mudanza Familiar",
    testimonial3:
      "Odio mudarme. Pero esta vez? Fue suave, rápido y no arruinó mi fin de semana.",
    testimonial3Type: "Apartamento de 2 Habitaciones",
  },
  faq: {
    title: "Preguntas Frecuentes",
    paymentMethods: "¿Qué métodos de pago son compatibles?",
    howEarly: "¿Con qué anticipación debo reservar mi mudanza?",
    packing: "¿Los mudanceros también empaquetarán mis cosas?",
    whatsIncluded: "¿Qué está incluido en mi cotización?",
    packingExtra: "¿El empaque es parte del trato o es extra?",
    reschedule: "¿Puedo reprogramar si cambian los planes?",
    tracking: "¿Puedo rastrear mi mudanza en tiempo real?",
    storage: "¿Qué pasa si necesito almacenamiento, pueden ayudar?",
    costCalculation: "¿Cómo se calcula el costo de la mudanza?",
  },
  newsletter: {
    title: "No te Pierdas una Mudanza.",
    header: "boletín informativo",
    description:
      "Obtén consejos internos, ofertas limitadas y trucos de mudanza, directamente en tu bandeja de entrada.",
  },
  contact: {
    title: "CONTÁCTENOS",
    description:
      "Únase a nosotros en nuestro viaje para redefinir la logística con innovación y excelencia.",
    enquiry:
      "Para consultas, asociaciones o reservas de servicios, contáctenos en 📧 support@zinter.nl",
  },
  footer: {
    quicklinks: "Enlaces Rápidos",
    aboutUs: "Acerca de",
    reportIssue: "Reportar un problema",
    faq: "Preguntas Frecuentes",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    contact: "Contacto",
    schedule: "Lun. - Vie.: 08:00 - 19:00\nSáb.: 09:00 - 17:00",
    copyright: "© 2025 Todos los derechos reservados",
  },
  aboutheader: {
    title: "Acerca de Zinter",
    description: "Nuestra misión es revolucionar la industria logística.",
  },
  hasslefree: {
    title: "MUDANZA SIN COMPLICACIONES",
    description:
      "Nuestra misión es revolucionar la industria logística ofreciendo soluciones fluidas e impulsadas por la tecnología",
    more: "Que simplifican y optimizan la experiencia de mudanza tanto para particulares como para empresas. Zinter BV está comprometida con la innovación, la eficiencia y la satisfacción del cliente.",
    founded: "Fundada",
    founded_year: "2024",
    location: "Ubicación",
    location_name: "Países Bajos",
  },
};

const deTranslations = {
  navigation: {
    home: "Startseite",
    about: "Über uns",
    faqs: "Häufig gestellte Fragen",
  },
  hero: {
    getStarted: "LOSLEGEN",
    headline:
      "Umzug, Verbessert. Kein Stress. Kein Rätselraten. Einfach tippen, fotografieren und entspannen.",
    subheadline:
      "Unsere Plattform nutzt KI, um Ihre Gegenstände sofort zu identifizieren, Sie mit vertrauenswürdigen Umzugsunternehmen zu verbinden und den gesamten Prozess zu optimieren. Ein Foto. Eine Minute. Ein Kopfschmerz weniger.",
    getQuote: "ANGEBOT ERHALTEN",
    trackMove: "UMZUG VERFOLGEN",
    activeUsers: "aktive Nutzer sind zufrieden mit Zinter",
  },
  features: {
    smarterTitle: "Intelligenter als ein Formular. Einfacher als ein Anruf",
    smarterDescription:
      "Laden Sie ein paar Fotos Ihres Raums hoch und unsere KI scannt Ihr Inventar und holt sofort wettbewerbsfähige Angebote aus unserem Netzwerk professioneller Umzugsunternehmen.",
    sellingPoint: "VERKAUFSARGUMENT",
    eliteTitle:
      "Elite-Umzugsunternehmen. Vollständig Geprüft. Immer Zuverlässig.",
    eliteDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    seamlessBooking: "Nahtloser und einfacher Buchungsprozess",
    trustedNetwork: "Vertrauensvolles Netzwerk von Umzugsunternehmen",
    expertGuidance: "Expertenhilfe und schneller Support jederzeit",
    getStartedBtn: "Loslegen",
  },
  process: {
    title: "Ihr Umzug, in 60 Sekunden.",
    step1Title: "Geben Sie Ihre Umzugsdetails ein",
    step1Description:
      "Füllen Sie unser schnelles Formular mit den Start- und Zielorten Ihres Umzugs und der Größe Ihres Umzugs aus",
    step2Title: "Fotografieren Sie Ihren Raum",
    step2Description:
      "Machen Sie ein paar schnelle Fotos von den Räumen oder Gegenständen, die Sie umziehen möchten.",
    step3Title: "Erhalten Sie Echtzeitangebote",
    step3Description:
      "Unsere KI scannt Ihr Inventar und liefert genaue Schätzungen von vertrauenswürdigen Profis.",
    step4Title: "Wählen Sie Ihren Partner",
    step4Description:
      "Vergleichen Sie Angebote. Lesen Sie Bewertungen. Buchen Sie das Umzugsunternehmen, das Ihren Bedürfnissen und Ihrem Budget entspricht.",
    letsGetMoving: "Lassen Sie uns loslegen",
  },
  testimonials: {
    title: "Echte Menschen. Echte Umzüge. Echte Seelenruhe.",
    main: "Referenzen",
    testimonial1:
      "Ich habe fünf Fotos von meinem Handy hochgeladen und hatte in Minuten ein Angebot. Die Umzugsunternehmen kamen genau dann, wann sie gesagt hatten.",
    testimonial1Type: "Studio-Umzug",
    testimonial2:
      "Ehrlich gesagt fühlte es sich zu einfach an. Ich erwartete Formulare und Stress, aber alles wurde über die Plattform abgewickelt.",
    testimonial2Type: "Familienumzug",
    testimonial3:
      "Ich hasse Umzüge. Aber diesmal? Es war reibungslos, schnell und hat mein Wochenende nicht ruiniert.",
    testimonial3Type: "2-Zimmer-Wohnung",
  },
  faq: {
    title: "Häufig gestellte Fragen",
    paymentMethods: "Welche Zahlungsmethoden werden unterstützt?",
    howEarly: "Wie früh sollte ich meinen Umzug buchen?",
    packing: "Packen die Umzugsunternehmen auch meine Sachen?",
    whatsIncluded: "Was ist in meinem Angebot enthalten?",
    packingExtra: "Ist das Packen Teil des Deals oder extra?",
    reschedule: "Kann ich umplanen, wenn sich Pläne ändern?",
    tracking: "Kann ich meinen Umzug in Echtzeit verfolgen?",
    storage: "Was ist, wenn ich Lagerung brauche, können Sie helfen?",
    costCalculation: "Wie werden die Umzugskosten berechnet?",
  },
  newsletter: {
    title: "Verpassen Sie keinen Umzug.",
    header: "Rundschreiben",
    description:
      "Erhalten Sie Insider-Tipps, begrenzte Angebote und Umzugstricks direkt in Ihren Posteingang.",
  },
  contact: {
    title: "KONTAKTIEREN SIE UNS",
    description:
      "Begleiten Sie uns auf unserer Reise, die Logistik mit Innovation und Exzellenz neu zu definieren!",
    enquiry:
      "Für Anfragen, Partnerschaften oder Servicebuchungen erreichen Sie uns unter 📧 support@zinter.nl",
  },
  footer: {
    quicklinks: "Schnelllinks",
    aboutUs: "Über uns",
    reportIssue: "Problem melden",
    faq: "Häufig gestellte Fragen",
    privacyPolicy: "Datenschutzrichtlinie",
    termsConditions: "Geschäftsbedingungen",
    contact: "Kontakt",
    schedule: "Mo. - Fr.: 08:00 - 19:00\nSa.: 09:00 - 17:00",
    copyright: "© 2025 Alle Rechte vorbehalten",
  },
  aboutheader: {
    title: "Über Zinter",
    description:
      "Unsere Mission ist es, die Logistikbranche zu revolutionieren.",
  },
  hasslefree: {
    title: "STRESSFREIER UMZUG",
    description:
      "Unsere Mission ist es, die Logistikbranche zu revolutionieren, indem wir nahtlose, technologiegetriebene Lösungen anbieten",
    more: "Die das Umzugserlebnis für Einzelpersonen und Unternehmen gleichermaßen vereinfachen und optimieren. Zinter BV engagiert sich für Innovation, Effizienz und Kundenzufriedenheit.",
    founded: "Gegründet",
    founded_year: "2024",
    location: "Standort",
    location_name: "Niederlande",
  },
};

const frTranslations = {
  navigation: {
    home: "Accueil",
    about: "À propos",
    faqs: "Questions Fréquentes",
  },
  hero: {
    getStarted: "COMMENCER",
    headline:
      "Déménagement, Amélioré. Pas de stress. Pas de devinettes. Juste toucher, photographier et se détendre.",
    subheadline:
      "Notre plateforme utilise l'IA pour identifier instantanément vos objets, vous mettre en relation avec des déménageurs de confiance et rationaliser l'ensemble du processus. Une photo. Une minute. Un mal de tête en moins.",
    getQuote: "OBTENIR UN DEVIS",
    trackMove: "SUIVRE LE DÉMÉNAGEMENT",
    activeUsers: "utilisateurs actifs sont satisfaits de Zinter",
  },
  features: {
    smarterTitle: "Plus Intelligent qu'un Formulaire. Plus Facile qu'un Appel",
    smarterDescription:
      "Téléchargez quelques photos de votre espace et notre IA scanne votre inventaire et récupère instantanément des devis compétitifs de notre réseau de déménageurs professionnels.",
    sellingPoint: "ARGUMENT DE VENTE",
    eliteTitle: "Déménageurs d'Élite. Entièrement Vérifiés. Toujours Fiables.",
    eliteDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    seamlessBooking: "Processus de réservation fluide et facile",
    trustedNetwork: "Réseau de confiance d'entreprises de déménagement",
    expertGuidance: "Conseils d'experts et support rapide à tout moment",
    getStartedBtn: "Commencer",
  },
  process: {
    title: "Votre Déménagement, en 60 Secondes.",
    step1Title: "Soumettez les détails de votre déménagement",
    step1Description:
      "Remplissez notre formulaire rapide avec les lieux de départ et d'arrivée de votre déménagement, et la taille de votre déménagement",
    step2Title: "Photographiez votre espace",
    step2Description:
      "Prenez quelques photos rapides des pièces ou objets que vous déménagez.",
    step3Title: "Obtenez des devis en temps réel",
    step3Description:
      "Notre IA scanne votre inventaire et retourne des estimations précises de professionnels de confiance.",
    step4Title: "Choisissez votre partenaire",
    step4Description:
      "Comparez les offres. Lisez les avis. Réservez le déménageur qui correspond à vos besoins et votre budget.",
    letsGetMoving: "Mettons-nous en Mouvement",
  },
  testimonials: {
    main: "Témoignages.",
    title:
      "Vraies Personnes. Vrais Déménagements. Vraie Tranquillité d'Esprit.",
    testimonial1:
      "J'ai téléchargé cinq photos depuis mon téléphone et j'ai eu un devis en quelques minutes. Les déménageurs sont arrivés exactement quand ils avaient dit qu'ils le feraient.",
    testimonial1Type: "Déménagement de Studio",
    testimonial2:
      "Honnêtement, c'était trop facile. Je m'attendais à des formulaires et du stress mais tout a été géré via la plateforme.",
    testimonial2Type: "Déménagement Familial",
    testimonial3:
      "Je déteste déménager. Mais cette fois? C'était fluide, rapide et ça n'a pas gâché mon week-end.",
    testimonial3Type: "Appartement 2 Chambres",
  },
  faq: {
    title: "Questions Fréquemment Posées",
    paymentMethods: "Quels modes de paiement sont pris en charge ?",
    howEarly: "À quelle avance dois-je réserver mon déménagement ?",
    packing: "Les déménageurs vont-ils aussi emballer mes affaires ?",
    whatsIncluded: "Qu'est-ce qui est inclus dans mon devis ?",
    packingExtra:
      "L'emballage fait-il partie de l'offre ou est-il en supplément ?",
    reschedule: "Puis-je reprogrammer si les plans changent ?",
    tracking: "Puis-je suivre mon déménagement en temps réel ?",
    storage: "Et si j'ai besoin de stockage, pouvez-vous aider ?",
    costCalculation: "Comment le coût du déménagement est-il calculé ?",
  },
  newsletter: {
    title: "Ne Ratez Aucun Déménagement.",
    header: "lettre d’information",
    description:
      "Obtenez des conseils d'initiés, des offres limitées et des astuces de déménagement, directement dans votre boîte de réception.",
  },
  contact: {
    title: "CONTACTEZ-NOUS",
    description:
      "Rejoignez-nous dans notre démarche visant à redéfinir la logistique avec innovation et excellence !",
    enquiry:
      "Pour des demandes, des partenariats ou des réservations de services, contactez-nous à 📧 support@zinter.nl",
  },
  footer: {
    quicklinks: "Liens Rapides",
    aboutUs: "À propos",
    reportIssue: "Signaler un problème",
    faq: "Questions Fréquentes",
    privacyPolicy: "Politique de Confidentialité",
    termsConditions: "Termes et Conditions",
    contact: "Contact",
    schedule: "Lun. - Ven.: 08:00 - 19:00\nSam.: 09:00 - 17:00",
    copyright: "© 2025 Tous droits réservés",
  },
  aboutheader: {
    title: "À propos de Zinter",
    description:
      "Notre mission est de révolutionner l'industrie de la logistique.",
  },
  hasslefree: {
    title: "DÉMÉNAGEMENT SANS SOUCI",
    description:
      "Notre mission est de révolutionner l'industrie de la logistique en proposant des solutions fluides et axées sur la technologie",
    more: "Qui simplifient et optimisent l'expérience de déménagement pour les particuliers et les entreprises. Zinter BV s'engage à l'innovation, à l'efficacité et à la satisfaction client.",
    founded: "Fondée",
    founded_year: "2024",
    location: "Emplacement",
    location_name: "Pays-Bas",
  },
};

// Resource configuration
const resources = {
  en: { translation: enTranslations },
  es: { translation: esTranslations },
  de: { translation: deTranslations },
  fr: { translation: frTranslations },
};

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: false, // Set to true for development

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    detection: {
      // Language detection options
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],

      // Optional: Exclude certain languages from detection
      excludeCacheFor: ["cimode"],

      // Check for language in localStorage
      lookupLocalStorage: "i18nextLng",

      // Check for language in cookies
      lookupCookie: "i18next",

      // Check for language in query string
      lookupQuerystring: "lng",

      // Check for language in path
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,

      // Only detect languages that we have resources for
      checkWhitelist: true,
    },

    // Whitelist of supported languages
    supportedLngs: ["en", "es", "de", "fr"],

    // Don't load a fallback language if no resources are found
    nonExplicitSupportedLngs: false,

    // Additional options
    returnEmptyString: false,
    returnNull: false,
    returnObjects: false,

    // Namespace configuration (optional)
    defaultNS: "translation",
    ns: ["translation"],

    // Key separator for nested translations
    keySeparator: ".",
    nsSeparator: ":",

    // Pluralization options
    pluralSeparator: "_",
    contextSeparator: "_",

    // Loading options
    load: "languageOnly",
    preload: ["en"],

    // Save missing translations
    saveMissing: false,

    // React specific options
    react: {
      useSuspense: true,
      wait: false,
      bindI18n: "languageChanged",
      bindI18nStore: "added removed",
      transEmptyNodeValue: "",
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
    },
  });

export default i18n;
