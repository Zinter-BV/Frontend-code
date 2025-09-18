import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { Upload } from "lucide-react";

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
    suggestedDestinations: "suggestions",
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
  vision: {
    title: "Our Vision",
    main: "At Zinter, we envision a world where logistics is streamlined, intelligent, and effortless.",
    description:
      "By leveraging cutting-edge technology, we aim to provide a hassle-free experience that eliminates common challenges associated with moving and transportation services. Our goal is to create an all-encompassing logistics infrastructure that caters to diverse needs, from residential relocations to commercial moves.",
  },
  services: {
    title: "Our Services",
    description: "Zinter BV does not carry out moves directly",
    more: "Instead, we connect customers with trusted and professional third-party moving service providers. We ensure a seamless booking and logistics experience by leveraging technology to match users with the best available movers. Our services include",
    service1Title: "Residential Moving",
    service1Desc:
      "Tailored solutions for individuals and families moving to new homes",
    service2Title: "Commercial Moving",
    service2Desc:
      "Efficient and reliable business relocations with minimal downtime",
    service3Title: "Customized Solutions",
    service3Desc: "Personalized services to meet unique transportation needs",
    service4Title: "Technology-Driven Logistics",
    service4Desc:
      "As a logistics tech company, Zinter BV integrates advanced technology to optimize processes and enhance the customer experience",
    service5Title: "AI Image Recognition for Inventory",
    service5Desc:
      "Enhancing inventory management by leveraging AI to accurately recognize, categorize, and track items, making moves more efficient and organized.",
  },
  privacy: {
    title: "Privacy Policy",
    infoOne: "1. INTRODUCTION",
    oneDesc:
      'Zinter BV ("we," "us," or "our") is a logistics tech company specializing in moving services. Zinter BV is registered in the Netherlands. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy & Cookies Statement explains how we collect, use, and protect your data when you use our services, including our website and any associated platforms.',
    infoTwo: "2. INFORMATION WE COLLECT",
    infoTwoDesc1:
      "a. Personal Data: When you use our moving services or interact with our platform, we may collect the following information: Identity & Contact Data: Name, phone number, email address, home/office address.",
    infoTwoDesc2:
      "Moving Details: Pick-up and drop-off locations, type and volume of goods, preferred moving dates. Billing & Payment Data: Payment method details, transaction history. Customer Support Data: Communications and queries related to your bookings or service requests.",
    infoTwoDesc3:
      "b. Technical & Usage Data: Device Information: IP address, browser type, operating system. Usage Data: Interactions with our platform, page visits, service preferences. Cookies & Tracking Technologies: Information collected via cookies and analytics tools.",
    infoThree: "3. HOW WE USE YOUR INFORMATION",
    infoThreeHeader: "We use your data to:",
    infoThreeDesc1: "Process and fulfill moving service requests.",
    infoThreeDesc2: "Communicate updates regarding your bookings.",
    infoThreeDesc3: "Improve our services through analytics and feedback.",
    infoThreeDesc4: "Ensure the security and functionality of our platform.",
    infoThreeDesc5: "Comply with legal and regulatory requirements.",
    infoFour: "4. HOW WE SHARE YOUR INFORMATION",
    infoFourHeader:
      "We do not sell your personal data. However, we may share it with:",
    infoFourDesc1:
      "Service Providers: Third-party logistics partners and moving contractors.",
    infoFourDesc2: "Payment Processors: To facilitate transactions securely.",
    infoFourDesc3:
      "Legal Authorities: If required by law or in response to legal requests.",
    infoFive: "5. DATA SECURITY AND RETENTION",
    infoFiveDesc:
      "We implement security measures to protect your data from unauthorized access and breaches. Your data is retained only for as long as necessary to fulfill the purpose of collection or comply with legal obligations.",
    infoSix: "6. YOUR RIGHT & CHOICES",
    infoSixHeader: "You have the right to:",
    infoSixDesc1: "Access, update, or delete your personal data.",
    infoSixDesc2: "Object to processing or request data portability.",
    infoSixDesc3: "Withdraw consent for marketing communications.",
    infoSixDesc4: "Adjust cookie settings via your browser.",
    infoSixDesc5: "To exercise your rights, contact us at privacy@zinter.nl.",
    infoSeven: "7. COOKIES POLICY",
    infoSevenDesc:
      "Zinter BV uses cookies to enhance user experience and analyze platform performance. You can manage your cookie preferences through your browser settings.",
    infoEight: "8. CHANGES TO THIS POLICY",
    infoEight1Header: "Essential Cookies:",
    infoEight1Desc: "Necessary for website functionality.",
    infoEight2Header: "Analytics Cookies:",
    infoEight2Desc: "Help us understand user behavior.",
    infoEight3Header: "Marketing Cookies:",
    infoEight3Desc: "Personalize ads and offers.",
    infoNine: "9. UPDATES TO THIS STATEMENT",
    infoNineDesc:
      "We may update this policy from time to time. Any changes will be communicated on our website.",
    infoTen: "10. CONTACT INFORMATION",
    infoTenDesc:
      "For any inquiries regarding these Terms & Conditions, please contact us: 📧 support@zinter.nl",
  },
  terms: {
    title: "Terms & Conditions",
    infoOne: "1. INTRODUCTION",
    oneDesc:
      "Welcome to Zinter BV! These Terms & Conditions govern your use of our services, including our website, logistics, and moving solutions. By using our services, you agree to comply with these terms. If you do not agree, please refrain from using our services.",
    infoTwo: "2. DEFINITIONS",
    infoTwoDesc1:
      '"Company," "we," "us," "our" refers to Zinter BV, registered in the Netherlands.',
    infoTwoDesc2:
      '"Customer," "you" refers to any individual or business using our services.',
    infoTwoDesc3:
      '"Services" refers to our logistics, moving, and related solutions.',
    infoThree: "3. USE OF SERVICE",
    infoThreeDesc1:
      "You must be at least 18 years old or have legal authority to enter into agreements on behalf of an entity.",
    infoThreeDesc2:
      "You agree to provide accurate and complete information when using our services.",
    infoThreeDesc3:
      "You are responsible for securing any necessary permits or approvals required for your move.",
    infoFour: "4. BOOKINGS AND PAYMENTS",
    infoFourDesc1: "All bookings are subject to availability and confirmation.",
    infoFourDesc2:
      "Payments must be made in full before service commencement unless otherwise agreed.",
    infoFourDesc3:
      "Cancellation fees may apply if you cancel a booking within a specified period before the scheduled service.",
    infoFive: "5. LIABILITY AND INSURANCE",
    infoFiveDesc1:
      "Zinter BV acts as a logistics platform and does not directly carry out the moving services. We connect customers with third-party moving service providers. As such, Zinter BV is not liable for any damages, delays, or losses incurred during the move.",
    infoFiveDesc2:
      "Any claims regarding damage, loss, or service issues should be directed to the third-party moving provider responsible for executing the move.",
    infoFiveDesc3:
      "We encourage customers to review the terms and insurance policies of the assigned moving service provider.",
    infoFiveDesc4:
      "Zinter BV may offer insurance options, and customers are encouraged to purchase additional coverage for high-value items.",
    infoSix: "6. PROHIBITED ITEMS",
    infoSixDescHeader:
      "Customers must not include hazardous, illegal, or perishable items in their moving inventory. Prohibited items include but are not limited to",
    infoSixDesc1: "Flammable materials, explosives, or chemicals.",
    infoSixDesc2: "Illegal substances or contraband.",
    infoSixDesc3:
      "Perishable food items that could spoil during transportation.",
    infoSeven: "7. SERVICE LIMITATIONS",
    infoSevenDesc1:
      "Zinter BV reserves the right to refuse service in cases where the requested move is unsafe, unlawful, or logistically unfeasible.",
    infoSevenDesc2:
      "We are not responsible for delays caused by factors beyond our control, including but not limited to weather conditions, traffic, or regulatory restrictions.",
    infoEight: "8. INTELLECTUAL PROPERTY",
    infoEightDesc1:
      "All content on our website and materials related to our services are owned by Zinter BV.",
    infoEightDesc2:
      "Unauthorized use, reproduction, or distribution of our materials is prohibited.",
    infoNine: "9. AMENDMENTS AND TERMINATION",
    infoNineDesc1:
      "We reserve the right to update these Terms & Conditions at any time.",
    infoNineDesc2:
      "Continued use of our services after changes are made constitutes acceptance of the new terms.",
    infoNineDesc3:
      "Zinter BV may terminate services if a customer violates these terms.",
    infoTen: "10. GOVERNING LAW & DISPUTE RESOLUTION",
    infoTenDesc1:
      "These Terms & Conditions are governed by the laws of the Netherlands.",
    infoTenDesc2:
      "Any disputes shall first be attempted to be resolved amicably. If unresolved, disputes will be handled through the appropriate legal channels in the Netherlands.",
    infoEleven: "11. CONTACT INFORMATION",
    infoElevenDesc:
      "For any inquiries regarding these Terms & Conditions, please contact us: 📧 support@zinter.nl",
  },
  quoteProgress: {
    one: "Location Details",
    oneDesc: "Details of you are moving from",
    two: "Setup Inventory List",
    twoDesc: "Detailed list of items to be moved",
    three: "Moving Information",
    threeDesc: "Date, contacts, restrictions, etc...",
    four: "View Summary",
    fourDesc: "Full summary of your move",
  },
  location: {
    title: "Location Details",
    from: "from",
    to: "to",
    btn: "change",
  },
  quoteContainer: {
    home: "Home",
    desc: "Get a quote for a move",
    back: "GO BACK",
    getQuotes: "GET QUOTES",
    continue: "CONTINUE",
  },
  inventoryList: {
    title: "Add items to your",
    house: "Apartment",
    room: "+ ADDITIONAL ROOM",
  },
  uploadContainer: {
    title: "Image Recognition",
    desc: "Take photos of each room and let the AI create a personalized checklist for your move or relocation",
    btn: "TAKE PHOTO",
    secure: "SECURE & CONFIDENTIAL",
  },
  roomItemContainer: {
    selected: "Items Selected",
    add: "+ ADD ITEMS",
    more: "more",
  },
  uploadModal: {
    title1: "Upload Image",
    title2: " For Image Recognition",
    btn1: "Inventory List",
    btn2: " Upload Image",
    desc: "The images should be of a very good quality, file Size should not be more than 2MB.",
    upload: "UPLOAD IMAGE",
  },
  selectImage: {
    images: "Images Added",
    uploading: "Uploading...",
    failed: "Upload failed. Try again.",
    success: "Uploaded successfully",
    drop: "Drop a file",
    or: "or",
    browse: "Browse",
  },
  moveInformation: {
    title1: "Moving Information",
    title2: "Rooms",
    dateTime: "Date and Time",
    pickupTime: "Pickup Time",
    pickupDate: "Pickup Date",
    moveTime: "Move Time",
    moveDate: "Move Date",
    contactInfo: "Contact Info",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    pickup: "Pickup Details",
    from: "From",
    btn: "CHANGE",
    apartment1: "Apartment Number",
    remark1: "Remarks for the location",
    restrictions: "Restrictions",
    floors1: "Number of floors",
    longCarry1: "Long Carry",
    elevator1: "Elevator?",
    yes: "Yes",
    no: "No",
    insurance1: "Building Insurance",
    shuttle1: "Need Shuttle?",
    needHelp1: "Need help packing your items?",
    to: "To",
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
    suggestedDestinations: "sugerencias",
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
  vision: {
    title: "Nuestra Visión",
    main: "En Zinter, imaginamos un mundo donde la logística sea fluida, inteligente y sin esfuerzo.",
    description:
      "Al aprovechar la tecnología de punta, nuestro objetivo es brindar una experiencia sin complicaciones que elimine los desafíos comunes asociados con los servicios de mudanza y transporte. Nuestra meta es crear una infraestructura logística integral que atienda diversas necesidades, desde mudanzas residenciales hasta mudanzas comerciales.",
  },
  services: {
    title: "Nuestros Servicios",
    description: "Zinter BV no realiza mudanzas directamente",
    more: "En cambio, conectamos a los clientes con proveedores de servicios de mudanza de terceros confiables y profesionales. Garantizamos una experiencia de reserva y logística sin inconvenientes mediante el uso de la tecnología para emparejar a los usuarios con los mejores mudanceros disponibles. Nuestros servicios incluyen",
    service1Title: "Mudanzas Residenciales",
    service1Desc:
      "Soluciones personalizadas para individuos y familias que se mudan a nuevos hogares",
    service2Title: "Mudanzas Comerciales",
    service2Desc:
      "Traslados empresariales eficientes y confiables con mínima interrupción",
    service3Title: "Soluciones Personalizadas",
    service3Desc:
      "Servicios personalizados para satisfacer necesidades únicas de transporte",
    service4Title: "Logística Impulsada por Tecnología",
    service4Desc:
      "Como empresa tecnológica de logística, Zinter BV integra tecnología avanzada para optimizar procesos y mejorar la experiencia del cliente",
    service5Title: "Reconocimiento de Imágenes con IA para Inventario",
    service5Desc:
      "Mejorando la gestión de inventarios mediante el uso de IA para reconocer, categorizar y rastrear artículos con precisión, haciendo las mudanzas más eficientes y organizadas.",
  },
  privacy: {
    title: "Política de Privacidad",
    infoOne: "1. INTRODUCCIÓN",
    oneDesc:
      'Zinter BV ("nosotros", "nos", o "nuestro") es una empresa tecnológica de logística especializada en servicios de mudanza. Zinter BV está registrada en los Países Bajos. Nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Declaración de Privacidad y Cookies explica cómo recopilamos, usamos y protegemos sus datos cuando utiliza nuestros servicios, incluyendo nuestro sitio web y cualquier plataforma asociada.',
    infoTwo: "2. INFORMACIÓN QUE RECOPILAMOS",
    infoTwoDesc1:
      "a. Datos Personales: Cuando utiliza nuestros servicios de mudanza o interactúa con nuestra plataforma, podemos recopilar la siguiente información: Datos de Identidad y Contacto: Nombre, número de teléfono, dirección de correo electrónico, dirección de domicilio/oficina.",
    infoTwoDesc2:
      "Detalles de la Mudanza: Ubicaciones de recogida y entrega, tipo y volumen de bienes, fechas de mudanza preferidas. Datos de Facturación y Pago: Detalles del método de pago, historial de transacciones. Datos de Atención al Cliente: Comunicaciones y consultas relacionadas con sus reservas o solicitudes de servicio.",
    infoTwoDesc3:
      "b. Datos Técnicos y de Uso: Información del Dispositivo: Dirección IP, tipo de navegador, sistema operativo. Datos de Uso: Interacciones con nuestra plataforma, visitas a páginas, preferencias de servicio. Cookies y Tecnologías de Seguimiento: Información recopilada mediante cookies y herramientas analíticas.",
    infoThree: "3. CÓMO USAMOS SU INFORMACIÓN",
    infoThreeHeader: "Usamos sus datos para:",
    infoThreeDesc1:
      "Procesar y cumplir las solicitudes de servicios de mudanza.",
    infoThreeDesc2: "Comunicar actualizaciones sobre sus reservas.",
    infoThreeDesc3:
      "Mejorar nuestros servicios mediante análisis y comentarios.",
    infoThreeDesc4:
      "Garantizar la seguridad y funcionalidad de nuestra plataforma.",
    infoThreeDesc5: "Cumplir con requisitos legales y normativos.",
    infoFour: "4. CÓMO COMPARTIMOS SU INFORMACIÓN",
    infoFourHeader:
      "No vendemos sus datos personales. Sin embargo, podemos compartirlos con:",
    infoFourDesc1:
      "Proveedores de Servicios: Socios logísticos y contratistas de mudanza terceros.",
    infoFourDesc2:
      "Procesadores de Pagos: Para facilitar transacciones de manera segura.",
    infoFourDesc3:
      "Autoridades Legales: Si lo exige la ley o en respuesta a solicitudes legales.",
    infoFive: "5. SEGURIDAD Y RETENCIÓN DE DATOS",
    infoFiveDesc:
      "Implementamos medidas de seguridad para proteger sus datos contra accesos no autorizados y violaciones. Sus datos se conservan solo mientras sea necesario para cumplir con el propósito de la recopilación o cumplir obligaciones legales.",
    infoSix: "6. SUS DERECHOS Y ELECCIONES",
    infoSixHeader: "Usted tiene derecho a:",
    infoSixDesc1: "Acceder, actualizar o eliminar sus datos personales.",
    infoSixDesc2:
      "Oponerse al procesamiento o solicitar la portabilidad de datos.",
    infoSixDesc3: "Retirar el consentimiento para comunicaciones de marketing.",
    infoSixDesc4:
      "Ajustar la configuración de cookies a través de su navegador.",
    infoSixDesc5:
      "Para ejercer sus derechos, contáctenos en privacy@zinter.nl.",
    infoSeven: "7. POLÍTICA DE COOKIES",
    infoSevenDesc:
      "Zinter BV utiliza cookies para mejorar la experiencia del usuario y analizar el rendimiento de la plataforma. Puede gestionar sus preferencias de cookies a través de la configuración de su navegador.",
    infoEight: "8. CAMBIOS EN ESTA POLÍTICA",
    infoEight1Header: "Cookies Esenciales:",
    infoEight1Desc: "Necesarias para la funcionalidad del sitio web.",
    infoEight2Header: "Cookies Analíticas:",
    infoEight2Desc: "Nos ayudan a comprender el comportamiento del usuario.",
    infoEight3Header: "Cookies de Marketing:",
    infoEight3Desc: "Personalizan anuncios y ofertas.",
    infoNine: "9. ACTUALIZACIONES DE ESTA DECLARACIÓN",
    infoNineDesc:
      "Podemos actualizar esta política de vez en cuando. Cualquier cambio se comunicará en nuestro sitio web.",
    infoTen: "10. INFORMACIÓN DE CONTACTO",
    infoTenDesc:
      "Para cualquier consulta sobre estos Términos y Condiciones, contáctenos: 📧 support@zinter.nl",
  },
  terms: {
    title: "Términos y Condiciones",
    infoOne: "1. INTRODUCCIÓN",
    oneDesc:
      "¡Bienvenido a Zinter BV! Estos Términos y Condiciones rigen el uso de nuestros servicios, incluido nuestro sitio web, logística y soluciones de mudanza. Al utilizar nuestros servicios, usted acepta cumplir con estos términos. Si no está de acuerdo, le pedimos que se abstenga de usar nuestros servicios.",
    infoTwo: "2. DEFINICIONES",
    infoTwoDesc1:
      '"Compañía," "nosotros," "nuestro" se refiere a Zinter BV, registrada en los Países Bajos.',
    infoTwoDesc2:
      '"Cliente," "usted" se refiere a cualquier individuo o empresa que utilice nuestros servicios.',
    infoTwoDesc3:
      '"Servicios" se refiere a nuestra logística, mudanzas y soluciones relacionadas.',
    infoThree: "3. USO DEL SERVICIO",
    infoThreeDesc1:
      "Debe tener al menos 18 años o la autoridad legal para celebrar acuerdos en nombre de una entidad.",
    infoThreeDesc2:
      "Usted se compromete a proporcionar información precisa y completa al utilizar nuestros servicios.",
    infoThreeDesc3:
      "Es su responsabilidad obtener los permisos o autorizaciones necesarios requeridos para su mudanza.",
    infoFour: "4. RESERVAS Y PAGOS",
    infoFourDesc1:
      "Todas las reservas están sujetas a disponibilidad y confirmación.",
    infoFourDesc2:
      "Los pagos deben realizarse en su totalidad antes del inicio del servicio, salvo acuerdo en contrario.",
    infoFourDesc3:
      "Se pueden aplicar tarifas de cancelación si cancela una reserva dentro de un período específico antes del servicio programado.",
    infoFive: "5. RESPONSABILIDAD Y SEGUROS",
    infoFiveDesc1:
      "Zinter BV actúa como una plataforma logística y no realiza directamente los servicios de mudanza. Conectamos a los clientes con proveedores de servicios de mudanza externos. Por lo tanto, Zinter BV no se hace responsable de daños, retrasos o pérdidas incurridos durante la mudanza.",
    infoFiveDesc2:
      "Cualquier reclamación relacionada con daños, pérdidas o problemas del servicio debe dirigirse al proveedor de mudanzas responsable de ejecutar la mudanza.",
    infoFiveDesc3:
      "Recomendamos a los clientes revisar los términos y pólizas de seguros del proveedor de mudanza asignado.",
    infoFiveDesc4:
      "Zinter BV puede ofrecer opciones de seguro y se recomienda a los clientes adquirir cobertura adicional para artículos de alto valor.",
    infoSix: "6. ARTÍCULOS PROHIBIDOS",
    infoSixDescHeader:
      "Los clientes no deben incluir en su inventario de mudanza artículos peligrosos, ilegales o perecederos. Los artículos prohibidos incluyen, entre otros:",
    infoSixDesc1: "Materiales inflamables, explosivos o químicos.",
    infoSixDesc2: "Sustancias ilegales o contrabando.",
    infoSixDesc3:
      "Alimentos perecederos que puedan estropearse durante el transporte.",
    infoSeven: "7. LIMITACIONES DEL SERVICIO",
    infoSevenDesc1:
      "Zinter BV se reserva el derecho de rechazar el servicio en casos en los que la mudanza solicitada sea insegura, ilegal o logísticamente inviable.",
    infoSevenDesc2:
      "No somos responsables de los retrasos causados por factores fuera de nuestro control, incluidos, entre otros, las condiciones meteorológicas, el tráfico o las restricciones regulatorias.",
    infoEight: "8. PROPIEDAD INTELECTUAL",
    infoEightDesc1:
      "Todo el contenido de nuestro sitio web y materiales relacionados con nuestros servicios son propiedad de Zinter BV.",
    infoEightDesc2:
      "El uso, reproducción o distribución no autorizada de nuestros materiales está prohibido.",
    infoNine: "9. MODIFICACIONES Y TERMINACIÓN",
    infoNineDesc1:
      "Nos reservamos el derecho de actualizar estos Términos y Condiciones en cualquier momento.",
    infoNineDesc2:
      "El uso continuado de nuestros servicios después de que se realicen cambios constituye la aceptación de los nuevos términos.",
    infoNineDesc3:
      "Zinter BV puede dar por terminados los servicios si un cliente viola estos términos.",
    infoTen: "10. LEY APLICABLE Y RESOLUCIÓN DE DISPUTAS",
    infoTenDesc1:
      "Estos Términos y Condiciones se rigen por las leyes de los Países Bajos.",
    infoTenDesc2:
      "Cualquier disputa debe intentarse resolver de manera amistosa primero. Si no se resuelve, se tratará a través de los canales legales correspondientes en los Países Bajos.",
    infoEleven: "11. INFORMACIÓN DE CONTACTO",
    infoElevenDesc:
      "Para cualquier consulta relacionada con estos Términos y Condiciones, contáctenos: 📧 support@zinter.nl",
  },
  quoteProgress: {
    one: "Detalles de la ubicación",
    oneDesc: "Detalles de dónde te mudas",
    two: "Configurar lista de inventario",
    twoDesc: "Lista detallada de los artículos a trasladar",
    three: "Información de la mudanza",
    threeDesc: "Fecha, contactos, restricciones, etc.",
    four: "Ver resumen",
    fourDesc: "Resumen completo de tu mudanza",
  },
  location: {
    title: "Detalles de la ubicación",
    from: "desde",
    to: "hasta",
    btn: "cambiar",
  },
  quoteContainer: {
    home: "Inicio",
    desc: "Obtén una cotización para una mudanza",
    back: "VOLVER",
    getQuotes: "OBTENER COTIZACIONES",
    continue: "CONTINUAR",
  },
  inventoryList: {
    title: "Agrega artículos a tu",
    house: "Apartamento",
    room: "+ HABITACIÓN ADICIONAL",
  },
  uploadContainer: {
    title: "Reconocimiento de imágenes",
    desc: "Toma fotos de cada habitación y deja que la IA cree una lista personalizada para tu mudanza o traslado",
    btn: "TOMAR FOTO",
    secure: "SEGURO Y CONFIDENCIAL",
  },
  roomItemContainer: {
    selected: "Artículos seleccionados",
    add: "+ AGREGAR ARTÍCULOS",
    more: "más",
  },
  uploadModal: {
    title1: "Subir imagen",
    title2: " Para reconocimiento de imágenes",
    btn1: "Lista de inventario",
    btn2: " Subir imagen",
    desc: "Las imágenes deben ser de muy buena calidad, el tamaño del archivo no debe superar los 2 MB.",
    upload: "SUBIR IMAGEN",
  },
  selectImage: {
    images: "Imágenes agregadas",
    uploading: "Subiendo...",
    failed: "Error al subir. Inténtalo de nuevo.",
    success: "Subido correctamente",
    drop: "Suelta un archivo",
    or: "o",
    browse: "Buscar",
  },
  moveInformation: {
    title1: "Información de la mudanza",
    title2: "Habitaciones",
    dateTime: "Fecha y hora",
    pickupTime: "Hora de recogida",
    pickupDate: "Fecha de recogida",
    moveTime: "Hora de la mudanza",
    moveDate: "Fecha de la mudanza",
    contactInfo: "Información de contacto",
    fullName: "Nombre completo",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    pickup: "Detalles de recogida",
    from: "Desde",
    btn: "CAMBIAR",
    apartment1: "Número de apartamento",
    remark1: "Observaciones sobre la ubicación",
    restrictions: "Restricciones",
    floors1: "Número de pisos",
    longCarry1: "Transporte largo",
    elevator1: "¿Ascensor?",
    yes: "Sí",
    no: "No",
    insurance1: "Seguro del edificio",
    shuttle1: "¿Necesita transporte?",
    needHelp1: "¿Necesita ayuda para empacar sus artículos?",
    to: "Hasta",
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
    suggestedDestinations: "suggestions",
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
  vision: {
    title: "Notre Vision",
    main: "Chez Zinter, nous imaginons un monde où la logistique est rationalisée, intelligente et sans effort.",
    description:
      "En tirant parti des technologies de pointe, nous visons à offrir une expérience sans tracas qui élimine les défis courants associés aux services de déménagement et de transport. Notre objectif est de créer une infrastructure logistique globale qui répond à des besoins divers, des déménagements résidentiels aux déménagements commerciaux.",
  },
  services: {
    title: "Nos Services",
    description: "Zinter BV n'effectue pas les déménagements directement",
    more: "À la place, nous connectons les clients avec des prestataires de services de déménagement tiers fiables et professionnels. Nous garantissons une expérience de réservation et de logistique fluide en utilisant la technologie pour mettre en relation les utilisateurs avec les meilleurs déménageurs disponibles. Nos services incluent",
    service1Title: "Déménagement Résidentiel",
    service1Desc:
      "Solutions sur mesure pour les particuliers et les familles déménageant vers de nouveaux logements",
    service2Title: "Déménagement Commercial",
    service2Desc:
      "Relocalisations d'entreprises efficaces et fiables avec un minimum d'interruption",
    service3Title: "Solutions Personnalisées",
    service3Desc:
      "Services personnalisés pour répondre aux besoins uniques de transport",
    service4Title: "Logistique Axée sur la Technologie",
    service4Desc:
      "En tant qu'entreprise technologique de logistique, Zinter BV intègre des technologies avancées pour optimiser les processus et améliorer l'expérience client",
    service5Title: "Reconnaissance d'Images par IA pour l'Inventaire",
    service5Desc:
      "Amélioration de la gestion des inventaires en utilisant l'IA pour reconnaître, catégoriser et suivre les articles avec précision, rendant les déménagements plus efficaces et organisés.",
  },
  privacy: {
    title: "Politique de Confidentialité",
    infoOne: "1. INTRODUCTION",
    oneDesc:
      'Zinter BV ("nous", "notre" ou "nos") est une entreprise technologique de logistique spécialisée dans les services de déménagement. Zinter BV est enregistrée aux Pays-Bas. Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos informations personnelles. Cette Déclaration de Confidentialité et de Cookies explique comment nous collectons, utilisons et protégeons vos données lorsque vous utilisez nos services, y compris notre site Web et toutes les plateformes associées.',
    infoTwo: "2. INFORMATIONS QUE NOUS COLLECTONS",
    infoTwoDesc1:
      "a. Données Personnelles: Lorsque vous utilisez nos services de déménagement ou interagissez avec notre plateforme, nous pouvons collecter les informations suivantes : Données d'identité et de contact : Nom, numéro de téléphone, adresse e-mail, adresse domicile/bureau.",
    infoTwoDesc2:
      "Détails du Déménagement : Lieux de prise en charge et de livraison, type et volume des biens, dates de déménagement préférées. Données de Facturation et de Paiement : Détails du mode de paiement, historique des transactions. Données du Support Client : Communications et demandes liées à vos réservations ou demandes de service.",
    infoTwoDesc3:
      "b. Données Techniques et d’Utilisation: Informations sur l’appareil : adresse IP, type de navigateur, système d’exploitation. Données d’utilisation : Interactions avec notre plateforme, visites de pages, préférences de service. Cookies et Technologies de Suivi : Informations collectées via des cookies et des outils d’analyse.",
    infoThree: "3. COMMENT NOUS UTILISONS VOS INFORMATIONS",
    infoThreeHeader: "Nous utilisons vos données pour :",
    infoThreeDesc1:
      "Traiter et exécuter les demandes de services de déménagement.",
    infoThreeDesc2: "Communiquer les mises à jour concernant vos réservations.",
    infoThreeDesc3: "Améliorer nos services grâce à l’analyse et aux retours.",
    infoThreeDesc4:
      "Assurer la sécurité et la fonctionnalité de notre plateforme.",
    infoThreeDesc5: "Se conformer aux exigences légales et réglementaires.",
    infoFour: "4. COMMENT NOUS PARTAGEONS VOS INFORMATIONS",
    infoFourHeader:
      "Nous ne vendons pas vos données personnelles. Cependant, nous pouvons les partager avec :",
    infoFourDesc1:
      "Fournisseurs de services : Partenaires logistiques tiers et entrepreneurs de déménagement.",
    infoFourDesc2:
      "Processeurs de paiement : Pour faciliter les transactions en toute sécurité.",
    infoFourDesc3:
      "Autorités légales : Si la loi l’exige ou en réponse à des demandes légales.",
    infoFive: "5. SÉCURITÉ ET CONSERVATION DES DONNÉES",
    infoFiveDesc:
      "Nous mettons en œuvre des mesures de sécurité pour protéger vos données contre tout accès non autorisé et toute violation. Vos données sont conservées uniquement aussi longtemps que nécessaire pour atteindre l’objectif de la collecte ou respecter les obligations légales.",
    infoSix: "6. VOS DROITS ET CHOIX",
    infoSixHeader: "Vous avez le droit de :",
    infoSixDesc1:
      "Accéder, mettre à jour ou supprimer vos données personnelles.",
    infoSixDesc2:
      "Vous opposer au traitement ou demander la portabilité des données.",
    infoSixDesc3:
      "Retirer votre consentement pour les communications marketing.",
    infoSixDesc4: "Ajuster les paramètres des cookies via votre navigateur.",
    infoSixDesc5:
      "Pour exercer vos droits, contactez-nous à privacy@zinter.nl.",
    infoSeven: "7. POLITIQUE DE COOKIES",
    infoSevenDesc:
      "Zinter BV utilise des cookies pour améliorer l’expérience utilisateur et analyser les performances de la plateforme. Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.",
    infoEight: "8. MODIFICATIONS DE CETTE POLITIQUE",
    infoEight1Header: "Cookies Essentiels :",
    infoEight1Desc: "Nécessaires pour le fonctionnement du site Web.",
    infoEight2Header: "Cookies d’Analyse :",
    infoEight2Desc: "Aident à comprendre le comportement des utilisateurs.",
    infoEight3Header: "Cookies Marketing :",
    infoEight3Desc: "Personnalisent les publicités et offres.",
    infoNine: "9. MISES À JOUR DE CETTE DÉCLARATION",
    infoNineDesc:
      "Nous pouvons mettre à jour cette politique de temps à autre. Tout changement sera communiqué sur notre site Web.",
    infoTen: "10. INFORMATIONS DE CONTACT",
    infoTenDesc:
      "Pour toute question concernant ces Termes et Conditions, contactez-nous : 📧 support@zinter.nl",
  },
  terms: {
    title: "Conditions Générales",
    infoOne: "1. INTRODUCTION",
    oneDesc:
      "Bienvenue chez Zinter BV ! Ces Conditions Générales régissent votre utilisation de nos services, y compris notre site web, nos solutions logistiques et de déménagement. En utilisant nos services, vous acceptez de respecter ces conditions. Si vous n’êtes pas d’accord, veuillez ne pas utiliser nos services.",
    infoTwo: "2. DÉFINITIONS",
    infoTwoDesc1:
      '"Société," "nous," "notre" désigne Zinter BV, enregistrée aux Pays-Bas.',
    infoTwoDesc2:
      '"Client," "vous" désigne tout individu ou entreprise utilisant nos services.',
    infoTwoDesc3:
      '"Services" désigne nos solutions logistiques, de déménagement et services associés.',
    infoThree: "3. UTILISATION DU SERVICE",
    infoThreeDesc1:
      "Vous devez avoir au moins 18 ans ou l’autorité légale pour conclure des accords au nom d’une entité.",
    infoThreeDesc2:
      "Vous acceptez de fournir des informations exactes et complètes lors de l’utilisation de nos services.",
    infoThreeDesc3:
      "Vous êtes responsable d’obtenir les autorisations ou permis nécessaires pour votre déménagement.",
    infoFour: "4. RÉSERVATIONS ET PAIEMENTS",
    infoFourDesc1:
      "Toutes les réservations sont soumises à disponibilité et confirmation.",
    infoFourDesc2:
      "Les paiements doivent être effectués en totalité avant le début du service, sauf accord contraire.",
    infoFourDesc3:
      "Des frais d’annulation peuvent s’appliquer si vous annulez une réservation dans un délai déterminé avant la date prévue du service.",
    infoFive: "5. RESPONSABILITÉ ET ASSURANCE",
    infoFiveDesc1:
      "Zinter BV agit comme une plateforme logistique et n’exécute pas directement les services de déménagement. Nous connectons les clients avec des prestataires de services de déménagement tiers. En conséquence, Zinter BV n’est pas responsable des dommages, retards ou pertes survenus pendant le déménagement.",
    infoFiveDesc2:
      "Toute réclamation concernant des dommages, pertes ou problèmes de service doit être adressée au prestataire de déménagement tiers responsable de l’exécution du service.",
    infoFiveDesc3:
      "Nous encourageons les clients à examiner les conditions et polices d’assurance du prestataire de déménagement assigné.",
    infoFiveDesc4:
      "Zinter BV peut proposer des options d’assurance, et les clients sont encouragés à souscrire une couverture supplémentaire pour les articles de grande valeur.",
    infoSix: "6. OBJETS INTERDITS",
    infoSixDescHeader:
      "Les clients ne doivent pas inclure dans leur inventaire de déménagement des articles dangereux, illégaux ou périssables. Les articles interdits incluent, sans s’y limiter :",
    infoSixDesc1: "Matériaux inflammables, explosifs ou chimiques.",
    infoSixDesc2: "Substances illégales ou contrebande.",
    infoSixDesc3:
      "Produits alimentaires périssables susceptibles de se détériorer pendant le transport.",
    infoSeven: "7. LIMITATIONS DU SERVICE",
    infoSevenDesc1:
      "Zinter BV se réserve le droit de refuser un service dans les cas où le déménagement demandé est dangereux, illégal ou logistiquement irréalisable.",
    infoSevenDesc2:
      "Nous ne sommes pas responsables des retards causés par des facteurs indépendants de notre volonté, y compris mais sans s’y limiter aux conditions météorologiques, à la circulation ou aux restrictions réglementaires.",
    infoEight: "8. PROPRIÉTÉ INTELLECTUELLE",
    infoEightDesc1:
      "Tout le contenu de notre site web et les documents liés à nos services appartiennent à Zinter BV.",
    infoEightDesc2:
      "L’utilisation, la reproduction ou la distribution non autorisée de nos documents est interdite.",
    infoNine: "9. MODIFICATIONS ET RÉSILIATION",
    infoNineDesc1:
      "Nous nous réservons le droit de mettre à jour ces Conditions Générales à tout moment.",
    infoNineDesc2:
      "La poursuite de l’utilisation de nos services après modifications constitue une acceptation des nouvelles conditions.",
    infoNineDesc3:
      "Zinter BV peut mettre fin aux services si un client viole ces conditions.",
    infoTen: "10. LOI APPLICABLE ET RÉSOLUTION DES LITIGES",
    infoTenDesc1:
      "Ces Conditions Générales sont régies par les lois des Pays-Bas.",
    infoTenDesc2:
      "Tout litige doit d’abord être tenté d’être résolu à l’amiable. S’il n’est pas résolu, il sera traité par les juridictions compétentes aux Pays-Bas.",
    infoEleven: "11. INFORMATIONS DE CONTACT",
    infoElevenDesc:
      "Pour toute question concernant ces Conditions Générales, veuillez nous contacter : 📧 support@zinter.nl",
  },
  quoteProgress: {
    one: "Détails de l’emplacement",
    oneDesc: "Détails de l’endroit d’où vous déménagez",
    two: "Configurer la liste d’inventaire",
    twoDesc: "Liste détaillée des articles à déplacer",
    three: "Informations sur le déménagement",
    threeDesc: "Date, contacts, restrictions, etc.",
    four: "Voir le résumé",
    fourDesc: "Résumé complet de votre déménagement",
  },
  location: {
    title: "Détails de l’emplacement",
    from: "de",
    to: "à",
    btn: "modifier",
  },
  quoteContainer: {
    home: "Accueil",
    desc: "Obtenez un devis pour un déménagement",
    back: "RETOUR",
    getQuotes: "OBTENIR DES DEVIS",
    continue: "CONTINUER",
  },
  inventoryList: {
    title: "Ajoutez des articles à votre",
    house: "Appartement",
    room: "+ PIÈCE SUPPLÉMENTAIRE",
  },
  uploadContainer: {
    title: "Reconnaissance d’images",
    desc: "Prenez des photos de chaque pièce et laissez l’IA créer une checklist personnalisée pour votre déménagement",
    btn: "PRENDRE PHOTO",
    secure: "SÉCURISÉ ET CONFIDENTIEL",
  },
  roomItemContainer: {
    selected: "Articles sélectionnés",
    add: "+ AJOUTER DES ARTICLES",
    more: "plus",
  },
  uploadModal: {
    title1: "Téléverser l’image",
    title2: " Pour la reconnaissance d’images",
    btn1: "Liste d’inventaire",
    btn2: " Téléverser l’image",
    desc: "Les images doivent être de très bonne qualité, la taille du fichier ne doit pas dépasser 2 Mo.",
    upload: "TÉLÉVERSER L’IMAGE",
  },
  selectImage: {
    images: "Images ajoutées",
    uploading: "Téléversement...",
    failed: "Échec du téléversement. Réessayez.",
    success: "Téléversé avec succès",
    drop: "Déposez un fichier",
    or: "ou",
    browse: "Parcourir",
  },
  moveInformation: {
    title1: "Informations sur le déménagement",
    title2: "Pièces",
    dateTime: "Date et heure",
    pickupTime: "Heure de prise en charge",
    pickupDate: "Date de prise en charge",
    moveTime: "Heure du déménagement",
    moveDate: "Date du déménagement",
    contactInfo: "Informations de contact",
    fullName: "Nom complet",
    email: "Adresse e-mail",
    phone: "Numéro de téléphone",
    pickup: "Détails de la prise en charge",
    from: "De",
    btn: "MODIFIER",
    apartment1: "Numéro d’appartement",
    remark1: "Remarques sur l’emplacement",
    restrictions: "Restrictions",
    floors1: "Nombre d’étages",
    longCarry1: "Transport long",
    elevator1: "Ascenseur ?",
    yes: "Oui",
    no: "Non",
    insurance1: "Assurance du bâtiment",
    shuttle1: "Besoin de navette ?",
    needHelp1: "Besoin d’aide pour emballer vos articles ?",
    to: "À",
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
