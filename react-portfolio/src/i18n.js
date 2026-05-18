import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        skills: "Skills",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        hireMe: "Hire Me"
      },
      hero: {
        available: "AVAILABLE FOR NEW PROJECTS",
        title1: "Building",
        title2: "Digital Legacy.",
        desc: "Hi, I'm <1>Ronak Jethva</1>. A passionate Fullstack Developer. I specialize in building <2>immersive digital experiences</2> that bridge the gap between design and technology.",
        explore: "Explore Work",
        getInTouch: "Get In Touch"
      },
      about: {
        title1: "About",
        title2: "Me.",
        p1: "My journey as a Fullstack Developer began with a simple curiosity: how do complex systems manage vast amounts of data seamlessly? As a self-taught developer, I didn't follow the traditional classroom route. Instead, I dove head-first into documentation, open-source projects, and late-night debugging sessions.",
        p2: "I specialized early on in PHP and MySQL, recognizing their power in building robust management systems. From inventory trackers to lecturers' payment management suites, I learned to architect databases that are both performant and scalable.",
        p3: "As the web evolved, so did I. I transitioned into the modern frontend ecosystem, mastering React and the Vite build tool. Today, I combine the reliability of PHP-based architectures with the fluid performance of React and Tailwind CSS to create full-stack applications that look premium and run flawlessly."
      },
      skills: {
        title1: "My Technical",
        title2: "Arsenal.",
        desc: "A versatile stack focused on building scalable web applications and high-performance solutions.",
        years: "Years Building",
        projects: "Projects",
        frontend: "Frontend Development",
        frontendDesc: "Crafting responsive and interactive user interfaces.",
        backend: "Backend & Systems",
        backendDesc: "Building robust APIs and server-side logic.",
        arch: "Architecture & Tools",
        archDesc: "Managing project lifecycles and deployments."
      },
      services: {
        title1: "My",
        title2: "Services.",
        webDev: "Web Development",
        webDevDesc: "Full-stack web applications built for performance and scalability.",
        respDesign: "Responsive Design",
        respDesignDesc: "Mobile-first designs ensuring your site looks great on any device.",
        uiux: "UI/UX Implementation",
        uiuxDesc: "Bringing Figma designs to life with pixel-perfect accuracy."
      },
      projects: {
        title1: "Featured",
        title2: "Work.",
        desc: "Some of the selected projects I have worked on recently.",
        beauti: "New Era Beauti Care",
        beautiDesc: "Premium beauty parlour website with booking system.",
        ecommerce: "Enterprise E-Commerce",
        ecommerceDesc: "A comprehensive enterprise-level e-commerce solution built with PHP, featuring advanced product management, inventory tracking, and seamless checkout processes.",
        camera: "Camera Store Marketplace",
        cameraDesc: "A modern marketplace for camera equipment and photography gear. Designed with a sleek user interface using Tailwind CSS and robust backend logic in PHP.",
        business: "Business Listings Website",
        businessDesc: "A premium business directory with robust search and interactive map integrations.",
        payment: "Lecturers Payment Management System",
        paymentDesc: "A specialized administrative system focused on streamlining lecturer payment workflows, tracking hours, and generating automated financial reports.",
        liveDemo: "Live Demo",
        sourceCode: "Source Code"
      },
      contact: {
        title1: "Ready to start your next",
        title2: "project?",
        desc: "Let's work together to build something great. Reach out to me via email or connect on social media.",
        fullName: "Full Name",
        email: "Email Address",
        message: "Message",
        send: "Send Message",
        placeholderName: "John Doe",
        placeholderEmail: "john@example.com",
        placeholderMessage: "Tell me about your project..."
      },
      footer: {
        rights: "Ronak Jethva. All rights reserved."
      }
    }
  },
  es: {
    translation: {
      nav: {
        about: "Sobre mí",
        skills: "Habilidades",
        services: "Servicios",
        projects: "Proyectos",
        contact: "Contacto",
        hireMe: "Contrátame"
      },
      hero: {
        available: "DISPONIBLE PARA NUEVOS PROYECTOS",
        title1: "Construyendo",
        title2: "Legado Digital.",
        desc: "Hola, soy <1>Ronak Jethva</1>. Un apasionado Desarrollador Fullstack. Me especializo en construir <2>experiencias digitales inmersivas</2> que cierran la brecha entre el diseño y la tecnología.",
        explore: "Explorar Trabajo",
        getInTouch: "Ponerse en contacto"
      },
      about: {
        title1: "Sobre",
        title2: "Mí.",
        p1: "Mi viaje como Desarrollador Fullstack comenzó con una simple curiosidad: ¿cómo gestionan los sistemas complejos grandes cantidades de datos a la perfección? Como desarrollador autodidacta, no seguí la ruta tradicional del aula. En su lugar, me sumergí de lleno en documentación, proyectos de código abierto y sesiones nocturnas de depuración.",
        p2: "Me especialicé desde el principio en PHP y MySQL, reconociendo su poder en la construcción de sistemas de gestión robustos. Desde rastreadores de inventario hasta suites de gestión de pagos, aprendí a diseñar bases de datos que son a la vez eficientes y escalables.",
        p3: "A medida que la web evolucionó, yo también lo hice. Hice la transición al ecosistema frontend moderno, dominando React y Vite. Hoy en día, combino la confiabilidad de las arquitecturas basadas en PHP con el rendimiento fluido de React y Tailwind CSS para crear aplicaciones full-stack premium."
      },
      skills: {
        title1: "Mi Arsenal",
        title2: "Técnico.",
        desc: "Un stack versátil centrado en la creación de aplicaciones web escalables y soluciones de alto rendimiento.",
        years: "Años de experiencia",
        projects: "Proyectos",
        frontend: "Desarrollo Frontend",
        frontendDesc: "Creación de interfaces de usuario responsivas e interactivas.",
        backend: "Backend y Sistemas",
        backendDesc: "Construcción de APIs robustas y lógica del lado del servidor.",
        arch: "Arquitectura y Herramientas",
        archDesc: "Gestión de ciclos de vida de proyectos e implementaciones."
      },
      services: {
        title1: "Mis",
        title2: "Servicios.",
        webDev: "Desarrollo Web",
        webDevDesc: "Aplicaciones web full-stack creadas para rendimiento y escalabilidad.",
        respDesign: "Diseño Responsivo",
        respDesignDesc: "Diseños mobile-first que garantizan que tu sitio se vea genial en cualquier dispositivo.",
        uiux: "Implementación UI/UX",
        uiuxDesc: "Dando vida a los diseños de Figma con precisión de píxeles."
      },
      projects: {
        title1: "Trabajo",
        title2: "Destacado.",
        desc: "Algunos de los proyectos seleccionados en los que he trabajado recientemente.",
        beauti: "New Era Beauti Care",
        beautiDesc: "Sitio web premium de salón de belleza con sistema de reservas.",
        ecommerce: "Comercio Electrónico Empresarial",
        ecommerceDesc: "Una solución integral de comercio electrónico a nivel empresarial construida con PHP, con gestión avanzada de productos, seguimiento de inventario y procesos de pago fluidos.",
        camera: "Mercado de Cámaras",
        cameraDesc: "Un mercado moderno para equipos de cámara y fotografía. Diseñado con una elegante interfaz de usuario usando Tailwind CSS y lógica de backend robusta en PHP.",
        business: "Sitio Web de Directorio de Negocios",
        businessDesc: "Un directorio empresarial premium con búsqueda robusta e integraciones de mapas interactivos.",
        payment: "Sistema de Gestión de Pagos",
        paymentDesc: "Un sistema administrativo especializado enfocado en agilizar los flujos de pago de profesores, el seguimiento de horas y la generación de informes financieros automatizados.",
        liveDemo: "Demostración",
        sourceCode: "Código Fuente"
      },
      contact: {
        title1: "¿Listo para empezar tu próximo",
        title2: "proyecto?",
        desc: "Trabajemos juntos para construir algo grandioso. Contáctame por correo electrónico o conéctate en las redes sociales.",
        fullName: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Mensaje",
        send: "Enviar Mensaje",
        placeholderName: "Juan Pérez",
        placeholderEmail: "juan@ejemplo.com",
        placeholderMessage: "Cuéntame sobre tu proyecto..."
      },
      footer: {
        rights: "Ronak Jethva. Todos los derechos reservados."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        skills: "Compétences",
        services: "Services",
        projects: "Projets",
        contact: "Contact",
        hireMe: "Engagez-moi"
      },
      hero: {
        available: "DISPONIBLE POUR DE NOUVEAUX PROJETS",
        title1: "Construire un",
        title2: "Héritage Numérique.",
        desc: "Bonjour, je suis <1>Ronak Jethva</1>. Un Développeur Fullstack passionné. Je me spécialise dans la création <2>d'expériences numériques immersives</2> qui comblent le fossé entre le design et la technologie.",
        explore: "Explorer le travail",
        getInTouch: "Prendre contact"
      },
      about: {
        title1: "À",
        title2: "Propos.",
        p1: "Mon parcours en tant que Développeur Fullstack a commencé par une simple curiosité : comment des systèmes complexes gèrent-ils d'énormes quantités de données de manière transparente ? En tant que développeur autodidacte, je n'ai pas suivi la voie traditionnelle de la salle de classe.",
        p2: "Je me suis très tôt spécialisé dans PHP et MySQL, reconnaissant leur puissance dans la création de systèmes de gestion robustes. Des suivis d'inventaire aux suites de gestion des paiements, j'ai appris à concevoir des bases de données performantes et évolutives.",
        p3: "À mesure que le Web a évolué, moi aussi. J'ai fait la transition vers l'écosystème frontend moderne, en maîtrisant React et l'outil de construction Vite. Aujourd'hui, je combine la fiabilité des architectures basées sur PHP avec les performances fluides de React et Tailwind CSS."
      },
      skills: {
        title1: "Mon Arsenal",
        title2: "Technique.",
        desc: "Une stack polyvalente axée sur la création d'applications web évolutives et de solutions performantes.",
        years: "Années d'expérience",
        projects: "Projets",
        frontend: "Développement Frontend",
        frontendDesc: "Création d'interfaces utilisateur réactives et interactives.",
        backend: "Backend et Systèmes",
        backendDesc: "Création d'APIs robustes et de logique côté serveur.",
        arch: "Architecture et Outils",
        archDesc: "Gestion des cycles de vie des projets et des déploiements."
      },
      services: {
        title1: "Mes",
        title2: "Services.",
        webDev: "Développement Web",
        webDevDesc: "Applications web full-stack conçues pour la performance et l'évolutivité.",
        respDesign: "Design Réactif",
        respDesignDesc: "Conceptions mobile-first garantissant que votre site soit superbe sur n'importe quel appareil.",
        uiux: "Implémentation UI/UX",
        uiuxDesc: "Donner vie aux conceptions Figma avec une précision au pixel près."
      },
      projects: {
        title1: "Travail",
        title2: "En vedette.",
        desc: "Quelques-uns des projets sélectionnés sur lesquels j'ai travaillé récemment.",
        beauti: "New Era Beauti Care",
        beautiDesc: "Site web premium de salon de beauté avec système de réservation.",
        ecommerce: "E-Commerce d'Entreprise",
        ecommerceDesc: "Une solution de commerce électronique complète au niveau de l'entreprise conçue avec PHP, dotée d'une gestion avancée des produits, d'un suivi des stocks et de processus de paiement fluides.",
        camera: "Marché d'appareils photo",
        cameraDesc: "Un marché moderne pour l'équipement photo et la photographie. Conçu avec une interface utilisateur élégante utilisant Tailwind CSS et une logique backend robuste en PHP.",
        business: "Site Web d'annonces commerciales",
        businessDesc: "Un annuaire d'entreprises premium avec une recherche robuste et des intégrations de cartes interactives.",
        payment: "Système de Gestion des Paiements",
        paymentDesc: "Un système administratif spécialisé axé sur la rationalisation des flux de paiement des conférenciers, le suivi des heures et la génération de rapports financiers automatisés.",
        liveDemo: "Démo en Direct",
        sourceCode: "Code Source"
      },
      contact: {
        title1: "Prêt à démarrer votre prochain",
        title2: "projet?",
        desc: "Travaillons ensemble pour construire quelque chose de grand. Contactez-moi par e-mail ou sur les réseaux sociaux.",
        fullName: "Nom Complet",
        email: "Adresse E-mail",
        message: "Message",
        send: "Envoyer le message",
        placeholderName: "Jean Dupont",
        placeholderEmail: "jean@exemple.com",
        placeholderMessage: "Parlez-moi de votre projet..."
      },
      footer: {
        rights: "Ronak Jethva. Tous droits réservés."
      }
    }
  },
  hi: {
    translation: {
      nav: {
        about: "मेरे बारे में",
        skills: "कौशल",
        services: "सेवाएं",
        projects: "प्रोजेक्ट्स",
        contact: "संपर्क",
        hireMe: "मुझे काम दें"
      },
      hero: {
        available: "नए प्रोजेक्ट्स के लिए उपलब्ध",
        title1: "डिजिटल",
        title2: "विरासत।",
        desc: "नमस्ते, मैं <1>Ronak Jethva</1> हूँ। एक फुलस्टैक डेवलपर। मैं <2>इमर्सिव डिजिटल अनुभव</2> बनाने में माहिर हूँ।",
        explore: "काम देखें",
        getInTouch: "संपर्क करें"
      },
      about: {
        title1: "मेरे",
        title2: "बारे में।",
        p1: "एक फुलस्टैक डेवलपर के रूप में मेरी यात्रा एक साधारण जिज्ञासा से शुरू हुई: जटिल प्रणालियाँ इतने बड़े डेटा को सहजता से कैसे प्रबंधित करती हैं? मैंने सीधे दस्तावेज़ीकरण और ओपन-सोर्स प्रोजेक्ट्स में छलांग लगाई।",
        p2: "मैंने शुरुआत में ही PHP और MySQL में विशेषज्ञता हासिल की। इन्वेंट्री ट्रैकर्स से लेकर मैनेजमेंट सूट तक, मैंने स्केलेबल डेटाबेस बनाना सीखा।",
        p3: "आज, मैं फुल-स्टैक एप्लिकेशन बनाने के लिए PHP-आधारित आर्किटेक्चर की विश्वसनीयता को React और Tailwind CSS के तरल प्रदर्शन के साथ जोड़ता हूँ।"
      },
      skills: {
        title1: "मेरा",
        title2: "तकनीकी शस्त्रागार।",
        desc: "स्केलेबल वेब एप्लिकेशन और उच्च-प्रदर्शन समाधान बनाने पर केंद्रित एक बहुमुखी स्टैक।",
        years: "वर्षों का अनुभव",
        projects: "प्रोजेक्ट्स",
        frontend: "फ्रंटएंड डेवलपमेंट",
        frontendDesc: "रेस्पॉन्सिव और इंटरैक्टिव यूजर इंटरफेस तैयार करना।",
        backend: "बैकएंड और सिस्टम",
        backendDesc: "मजबूत एपीआई और सर्वर-साइड लॉजिक बनाना।",
        arch: "आर्किटेक्चर",
        archDesc: "प्रोजेक्ट जीवनचक्र और परिनियोजन का प्रबंधन।"
      },
      services: {
        title1: "मेरी",
        title2: "सेवाएं।",
        webDev: "वेब विकास",
        webDevDesc: "प्रदर्शन और स्केलेबिलिटी के लिए बनाए गए फुल-स्टैक वेब एप्लिकेशन।",
        respDesign: "रेस्पॉन्सिव डिज़ाइन",
        respDesignDesc: "यह सुनिश्चित करना कि आपकी साइट किसी भी डिवाइस पर अच्छी लगे।",
        uiux: "UI/UX कार्यान्वयन",
        uiuxDesc: "Figma डिज़ाइन को पिक्सेल-परफेक्ट सटीकता के साथ जीवंत करना।"
      },
      projects: {
        title1: "विशेष",
        title2: "कार्य।",
        desc: "कुछ चयनित प्रोजेक्ट जिन पर मैंने हाल ही में काम किया है।",
        ecommerce: "ई-कॉमर्स",
        business: "बिजनेस वेबसाइट",
        payment: "मैनेजमेंट सिस्टम"
      },
      contact: {
        title1: "प्रोजेक्ट शुरू करने के लिए",
        title2: "तैयार हैं?",
        desc: "कुछ बेहतरीन बनाने के लिए साथ मिलकर काम करें। मुझे ईमेल करें।",
        fullName: "पूरा नाम",
        email: "ईमेल",
        message: "संदेश",
        send: "संदेश भेजें"
      },
      footer: {
        rights: "Ronak Jethva. सर्वाधिकार सुरक्षित।"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
