// src/context/TranslationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const translations = {
  en: {
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
      main: "Testimonial",
      title: "Real People. Real Moves. Real Peace of Mind.",
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
      description:
        "Get insider tips, limited deals, and moving hacks, straight to your inbox.",
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
  },
  es: {
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
      expertGuidance:
        "Orientación experta y soporte rápido en cualquier momento",
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
      main: "Testimonios",
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
      description:
        "Obtén consejos internos, ofertas limitadas y trucos de mudanza, directamente en tu bandeja de entrada.",
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
  },
  de: {
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
      main: "Erfahrungsberichte",
      title: "Echte Menschen. Echte Umzüge. Echte Seelenruhe.",
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
      description:
        "Erhalten Sie Insider-Tipps, begrenzte Angebote und Umzugstricks direkt in Ihren Posteingang.",
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
  },
  fr: {
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
      smarterTitle:
        "Plus Intelligent qu'un Formulaire. Plus Facile qu'un Appel",
      smarterDescription:
        "Téléchargez quelques photos de votre espace et notre IA scanne votre inventaire et récupère instantanément des devis compétitifs de notre réseau de déménageurs professionnels.",
      sellingPoint: "ARGUMENT DE VENTE",
      eliteTitle:
        "Déménageurs d'Élite. Entièrement Vérifiés. Toujours Fiables.",
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
      main: "Témoignages",
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
      description:
        "Obtenez des conseils d'initiés, des offres limitées et des astuces de déménagement, directement dans votre boîte de réception.",
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
  },
};

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("zinter_language");
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      localStorage.setItem("zinter_language", lang);
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        console.warn(
          `Translation missing for key: ${key} in language: ${language}`
        );
        return key; // Return key if translation not found
      }
    }

    return value || key;
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        changeLanguage,
        language,
        languages: Object.keys(translations),
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};
