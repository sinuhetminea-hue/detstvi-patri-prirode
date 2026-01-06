import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "cs" | "de" | "en";
export type Variant = "families" | "seniors";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  variant: Variant;
  setVariant: (v: Variant) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("cs");
  const [variant, setVariant] = useState<Variant>("families");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, variant, setVariant }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

// Překlady
export const reviewsData = {
  cs: {
    families: [
      {
        name: "Petra Novotná",
        role: "Rodina s dětmi",
        rating: 5,
        text: "Nádherné místo pro rodinu! Děti si užily svobodu v přírodě a my jsme si odpočinuli. Bungalov je krásně vybavený a ticho tady je neocenitené.",
        image: "/images/review-1.jpg"
      },
      {
        name: "David Kučera",
        role: "Rodina s dětmi",
        rating: 5,
        text: "Skvělé místo pro rodinný pobyt! Děti si hrály venku, my jsme si čítali knihy. Bungalov má vše, co potřebujete. Určitě se vrátíme!",
        image: "/images/review-2.jpg"
      },
      {
        name: "Jana Svobodová",
        role: "Rodina s dětmi",
        rating: 5,
        text: "Nejlepší rozhodnutí, které jsme udělali! Děti se tady cítí jako doma a my máme čas na sebe. Doporučuji všem!",
        image: "/images/review-3.jpg"
      }
    ],
    seniors: [
      {
        name: "Jan Svoboda",
        role: "Senior",
        rating: 5,
        text: "Dlouho jsem hledal takové místo. Klid, příroda a vše, co potřebuji. Personál je velmi milý a vždy ochotný pomoci. Určitě se vrátím!",
        image: "/images/review-4.jpg"
      },
      {
        name: "Marie Kucharová",
        role: "Senior",
        rating: 5,
        text: "Nádherný bungalov v krásné přírodě. Konečně jsem si našla místo, kde se cítím opravdu dobře. Děkuji!",
        image: "/images/review-5.jpg"
      },
      {
        name: "František Horák",
        role: "Senior",
        rating: 5,
        text: "Výborná volba pro důchod! Příroda, klid a všechno, co potřebuji. Doporučuji všem svým přátelům.",
        image: "/images/review-6.jpg"
      }
    ]
  },
  de: {
    families: [
      {
        name: "Petra Novotná",
        role: "Familie mit Kindern",
        rating: 5,
        text: "Wunderschöner Ort für Familien! Die Kinder genossen die Freiheit in der Natur und wir konnten uns ausruhen. Der Bungalow ist wunderbar ausgestattet und die Ruhe hier ist unbezahlbar.",
        image: "/images/review-1.jpg"
      },
      {
        name: "David Kučera",
        role: "Familie mit Kindern",
        rating: 5,
        text: "Großartiger Ort für einen Familienaufenthalt! Die Kinder spielten draußen, wir lasen Bücher. Der Bungalow hat alles, was Sie brauchen. Wir kommen sicher zurück!",
        image: "/images/review-2.jpg"
      },
      {
        name: "Jana Svobodová",
        role: "Familie mit Kindern",
        rating: 5,
        text: "Die beste Entscheidung, die wir getroffen haben! Die Kinder fühlen sich hier wie zu Hause und wir haben Zeit füreinander. Ich empfehle es allen!",
        image: "/images/review-3.jpg"
      }
    ],
    seniors: [
      {
        name: "Jan Svoboda",
        role: "Senior",
        rating: 5,
        text: "Ich habe lange nach so einem Ort gesucht. Ruhe, Natur und alles, was ich brauche. Das Personal ist sehr freundlich und immer hilfsbereit. Ich komme sicher zurück!",
        image: "/images/review-4.jpg"
      },
      {
        name: "Marie Kucharová",
        role: "Senior",
        rating: 5,
        text: "Wunderschöner Bungalow in wunderschöner Natur. Endlich habe ich einen Ort gefunden, an dem ich mich wirklich wohlfühle. Danke!",
        image: "/images/review-5.jpg"
      },
      {
        name: "František Horák",
        role: "Senior",
        rating: 5,
        text: "Ausgezeichnete Wahl für den Ruhestand! Natur, Ruhe und alles, was ich brauche. Ich empfehle es all meinen Freunden.",
        image: "/images/review-6.jpg"
      }
    ]
  },
  en: {
    families: [
      {
        name: "Petra Novotná",
        role: "Family with children",
        rating: 5,
        text: "Beautiful place for families! The children enjoyed the freedom in nature and we could relax. The bungalow is beautifully equipped and the peace here is priceless.",
        image: "/images/review-1.jpg"
      },
      {
        name: "David Kučera",
        role: "Family with children",
        rating: 5,
        text: "Great place for a family stay! The children played outside, we read books. The bungalow has everything you need. We'll definitely come back!",
        image: "/images/review-2.jpg"
      },
      {
        name: "Jana Svobodová",
        role: "Family with children",
        rating: 5,
        text: "Best decision we ever made! The children feel at home here and we have time for each other. I recommend it to everyone!",
        image: "/images/review-3.jpg"
      }
    ],
    seniors: [
      {
        name: "Jan Svoboda",
        role: "Senior",
        rating: 5,
        text: "I've been looking for a place like this for a long time. Peace, nature and everything I need. The staff is very friendly and always helpful. I'll definitely be back!",
        image: "/images/review-4.jpg"
      },
      {
        name: "Marie Kucharová",
        role: "Senior",
        rating: 5,
        text: "Beautiful bungalow in beautiful nature. Finally I found a place where I really feel good. Thank you!",
        image: "/images/review-5.jpg"
      },
      {
        name: "František Horák",
        role: "Senior",
        rating: 5,
        text: "Excellent choice for retirement! Nature, peace and everything I need. I recommend it to all my friends.",
        image: "/images/review-6.jpg"
      }
    ]
  }
};

export const attractionsData = {
  cs: {
    title: "Zajímavosti a atrakce",
    subtitle: "Objevte krásy okolí našeho bungalovu",
    attractions: [
      {
        name: "Lesní stezka Medvědí vrch",
        type: "Turistická trasa",
        distance: "2 km",
        duration: "45 minut",
        difficulty: "Snadná",
        description: "Krásná lesní stezka s výhledem na okolní krajinu. Ideální pro rodiny s dětmi.",
        icon: "🥾"
      },
      {
        name: "Přírodní rezervace Lipová údolí",
        type: "Přírodní atrakce",
        distance: "5 km",
        duration: "2 hodiny",
        difficulty: "Střední",
        description: "Chráněná přírodní oblast s bohatou flórou a faunou. Ideální pro fotografování a pozorování přírody.",
        icon: "🌿"
      },
      {
        name: "Hrad Lipovský",
        type: "Historická atrakce",
        distance: "8 km",
        duration: "3 hodiny",
        difficulty: "Střední",
        description: "Středověký hrad s muzeem a expozicí. Nádherné výhledy na krajinu z věže.",
        icon: "🏰"
      },
      {
        name: "Jezero Čistá voda",
        type: "Rekreační oblast",
        distance: "6 km",
        duration: "Celodenní",
        difficulty: "Snadná",
        description: "Krásné jezero s pláží, možností koupání a vodních sportů. Ideální pro letní odpočinek.",
        icon: "🏖️"
      },
      {
        name: "Cyklostezka údolím",
        type: "Cyklistická trasa",
        distance: "12 km",
        duration: "1.5 hodiny",
        difficulty: "Snadná",
        description: "Nízkoenergetická cyklostezka podél řeky. Vhodná pro rodiny a seniory.",
        icon: "🚴"
      },
      {
        name: "Farma s dětským koutem",
        type: "Rodinná atrakce",
        distance: "4 km",
        duration: "2-3 hodiny",
        difficulty: "Snadná",
        description: "Interaktivní farma s zvířaty, kde si děti mohou hrát a učit se o zemědělství.",
        icon: "🐄"
      }
    ]
  },
  de: {
    title: "Sehenswürdigkeiten und Attraktionen",
    subtitle: "Entdecken Sie die Schönheit der Umgebung unseres Bungalows",
    attractions: [
      {
        name: "Waldweg Bärenberg",
        type: "Wanderweg",
        distance: "2 km",
        duration: "45 Minuten",
        difficulty: "Leicht",
        description: "Wunderschöner Waldweg mit Ausblick auf die umliegende Landschaft. Ideal für Familien mit Kindern.",
        icon: "🥾"
      },
      {
        name: "Naturschutzgebiet Lindental",
        type: "Naturattraktion",
        distance: "5 km",
        duration: "2 Stunden",
        difficulty: "Mittel",
        description: "Geschütztes Naturgebiet mit reicher Flora und Fauna. Ideal zum Fotografieren und Beobachten der Natur.",
        icon: "🌿"
      },
      {
        name: "Burg Lindenberg",
        type: "Historische Attraktion",
        distance: "8 km",
        duration: "3 Stunden",
        difficulty: "Mittel",
        description: "Mittelalterliche Burg mit Museum und Ausstellung. Wunderschöne Aussicht auf die Landschaft vom Turm.",
        icon: "🏰"
      },
      {
        name: "See Klares Wasser",
        type: "Erholungsgebiet",
        distance: "6 km",
        duration: "Ganztägig",
        difficulty: "Leicht",
        description: "Wunderschöner See mit Strand, Bademöglichkeiten und Wassersportangeboten. Ideal für Sommerferien.",
        icon: "🏖️"
      },
      {
        name: "Radweg durchs Tal",
        type: "Radweg",
        distance: "12 km",
        duration: "1,5 Stunden",
        difficulty: "Leicht",
        description: "Niedriger Radweg entlang des Flusses. Geeignet für Familien und Senioren.",
        icon: "🚴"
      },
      {
        name: "Bauernhof mit Kinderbereich",
        type: "Familienattraktion",
        distance: "4 km",
        duration: "2-3 Stunden",
        difficulty: "Leicht",
        description: "Interaktiver Bauernhof mit Tieren, wo Kinder spielen und die Landwirtschaft kennenlernen können.",
        icon: "🐄"
      }
    ]
  },
  en: {
    title: "Attractions and Points of Interest",
    subtitle: "Discover the beauty of the area around our bungalow",
    attractions: [
      {
        name: "Bear Mountain Forest Trail",
        type: "Hiking Trail",
        distance: "2 km",
        duration: "45 minutes",
        difficulty: "Easy",
        description: "Beautiful forest trail with views of the surrounding landscape. Ideal for families with children.",
        icon: "🥾"
      },
      {
        name: "Linden Valley Nature Reserve",
        type: "Nature Attraction",
        distance: "5 km",
        duration: "2 hours",
        difficulty: "Moderate",
        description: "Protected natural area with rich flora and fauna. Ideal for photography and nature observation.",
        icon: "🌿"
      },
      {
        name: "Lindenberg Castle",
        type: "Historical Attraction",
        distance: "8 km",
        duration: "3 hours",
        difficulty: "Moderate",
        description: "Medieval castle with museum and exhibition. Beautiful views of the landscape from the tower.",
        icon: "🏰"
      },
      {
        name: "Clear Water Lake",
        type: "Recreation Area",
        distance: "6 km",
        duration: "All day",
        difficulty: "Easy",
        description: "Beautiful lake with beach, swimming opportunities and water sports. Ideal for summer vacation.",
        icon: "🏖️"
      },
      {
        name: "Valley Bike Trail",
        type: "Cycling Route",
        distance: "12 km",
        duration: "1.5 hours",
        difficulty: "Easy",
        description: "Low-energy cycling trail along the river. Suitable for families and seniors.",
        icon: "🚴"
      },
      {
        name: "Farm with Kids' Area",
        type: "Family Attraction",
        distance: "4 km",
        duration: "2-3 hours",
        difficulty: "Easy",
        description: "Interactive farm with animals where children can play and learn about farming.",
        icon: "🐄"
      }
    ]
  }
};

export const faqData = {
  cs: {
    families: [
      {
        question: "Jaká je minimální doba pronájmu?",
        answer: "Minimální doba pronájmu je 3 měsíce. Nabízíme flexibilní podmínky pro delší pobyty."
      },
      {
        question: "Co je součástí pronájmu?",
        answer: "Pronájem zahrnuje plně vybavený bungalov s kuchyní, koupelnou, ložnicí a obývacím pokojem. Součástí je také přístup k venkovnímu prostoru a zahradě."
      },
      {
        question: "Je bungalov vhodný pro malé děti?",
        answer: "Ano, bungalov je bezpečně navržen pro rodiny s dětmi. Má bezpečné venkovní prostory a je vybaven vším potřebným pro pohodlný pobyt."
      },
      {
        question: "Jaké jsou podmínky pronájmu?",
        answer: "Požadujeme kaučii a podepsaný pronájem. Bližší informace vám poskytneme po kontaktu."
      },
      {
        question: "Lze bungalov navštívit před pronájmem?",
        answer: "Ano, můžete si bungalov prohlédnout. Kontaktujte nás a domluvíme si termín."
      },
      {
        question: "Jak se dostanu do bungalovu?",
        answer: "Bungalov je snadno dostupný autem. Nachází se v klidné přírodní oblasti s dobrým spojením."
      }
    ],
    seniors: [
      {
        question: "Jaká je minimální doba pronájmu?",
        answer: "Minimální doba pronájmu je 3 měsíce. Nabízíme flexibilní podmínky pro delší pobyty."
      },
      {
        question: "Co je součástí pronájmu?",
        answer: "Pronájem zahrnuje plně vybavený bungalov s kuchyní, koupelnou, ložnicí a obývacím pokojem. Bungalov je navržen s ohledem na potřeby seniorů."
      },
      {
        question: "Je bungalov přístupný pro seniory?",
        answer: "Ano, bungalov je navržen s ohledem na dostupnost. Má bezpečné prostory a je vybaven vším potřebným."
      },
      {
        question: "Jaké jsou podmínky pronájmu?",
        answer: "Požadujeme kaučii a podepsaný pronájem. Bližší informace vám poskytneme po kontaktu."
      },
      {
        question: "Lze bungalov navštívit před pronájmem?",
        answer: "Ano, můžete si bungalov prohlédnout. Kontaktujte nás a domluvíme si termín."
      },
      {
        question: "Je v okolí zdravotní péče?",
        answer: "Ano, v blízkosti se nachází zdravotnická zařízení a lékařské služby."
      }
    ]
  },
  de: {
    families: [
      {
        question: "Was ist die Mindestmietdauer?",
        answer: "Die Mindestmietdauer beträgt 3 Monate. Wir bieten flexible Bedingungen für längere Aufenthalte."
      },
      {
        question: "Was ist in der Miete enthalten?",
        answer: "Die Miete umfasst einen vollständig ausgestatteten Bungalow mit Küche, Bad, Schlafzimmer und Wohnzimmer. Inbegriffen ist auch der Zugang zu Außenbereich und Garten."
      },
      {
        question: "Ist der Bungalow für kleine Kinder geeignet?",
        answer: "Ja, der Bungalow ist sicher für Familien mit Kindern konzipiert. Er verfügt über sichere Außenbereiche und ist mit allem Notwendigen ausgestattet."
      },
      {
        question: "Was sind die Mietbedingungen?",
        answer: "Wir benötigen eine Kaution und einen unterzeichneten Mietvertrag. Weitere Informationen erhalten Sie nach Kontaktaufnahme."
      },
      {
        question: "Kann ich den Bungalow vor der Miete besichtigen?",
        answer: "Ja, Sie können den Bungalow besichtigen. Kontaktieren Sie uns und wir vereinbaren einen Termin."
      },
      {
        question: "Wie komme ich zum Bungalow?",
        answer: "Der Bungalow ist mit dem Auto leicht erreichbar. Er befindet sich in einer ruhigen Naturlandschaft mit guter Anbindung."
      }
    ],
    seniors: [
      {
        question: "Was ist die Mindestmietdauer?",
        answer: "Die Mindestmietdauer beträgt 3 Monate. Wir bieten flexible Bedingungen für längere Aufenthalte."
      },
      {
        question: "Was ist in der Miete enthalten?",
        answer: "Die Miete umfasst einen vollständig ausgestatteten Bungalow mit Küche, Bad, Schlafzimmer und Wohnzimmer. Der Bungalow ist mit Rücksicht auf die Bedürfnisse von Senioren konzipiert."
      },
      {
        question: "Ist der Bungalow für Senioren zugänglich?",
        answer: "Ja, der Bungalow ist mit Rücksicht auf Barrierefreiheit konzipiert. Er verfügt über sichere Räume und ist mit allem Notwendigen ausgestattet."
      },
      {
        question: "Was sind die Mietbedingungen?",
        answer: "Wir benötigen eine Kaution und einen unterzeichneten Mietvertrag. Weitere Informationen erhalten Sie nach Kontaktaufnahme."
      },
      {
        question: "Kann ich den Bungalow vor der Miete besichtigen?",
        answer: "Ja, Sie können den Bungalow besichtigen. Kontaktieren Sie uns und wir vereinbaren einen Termin."
      },
      {
        question: "Gibt es medizinische Versorgung in der Nähe?",
        answer: "Ja, in der Nähe befinden sich medizinische Einrichtungen und ärztliche Dienste."
      }
    ]
  },
  en: {
    families: [
      {
        question: "What is the minimum rental period?",
        answer: "The minimum rental period is 3 months. We offer flexible terms for longer stays."
      },
      {
        question: "What is included in the rental?",
        answer: "The rental includes a fully equipped bungalow with kitchen, bathroom, bedroom, and living room. Access to outdoor space and garden is also included."
      },
      {
        question: "Is the bungalow suitable for small children?",
        answer: "Yes, the bungalow is safely designed for families with children. It has secure outdoor spaces and is equipped with everything needed."
      },
      {
        question: "What are the rental conditions?",
        answer: "We require a deposit and a signed rental agreement. We will provide more details after you contact us."
      },
      {
        question: "Can I visit the bungalow before renting?",
        answer: "Yes, you can view the bungalow. Contact us and we will arrange a time."
      },
      {
        question: "How do I get to the bungalow?",
        answer: "The bungalow is easily accessible by car. It is located in a quiet natural area with good connections."
      }
    ],
    seniors: [
      {
        question: "What is the minimum rental period?",
        answer: "The minimum rental period is 3 months. We offer flexible terms for longer stays."
      },
      {
        question: "What is included in the rental?",
        answer: "The rental includes a fully equipped bungalow with kitchen, bathroom, bedroom, and living room. The bungalow is designed with seniors' needs in mind."
      },
      {
        question: "Is the bungalow accessible for seniors?",
        answer: "Yes, the bungalow is designed with accessibility in mind. It has safe spaces and is equipped with everything needed."
      },
      {
        question: "What are the rental conditions?",
        answer: "We require a deposit and a signed rental agreement. We will provide more details after you contact us."
      },
      {
        question: "Can I visit the bungalow before renting?",
        answer: "Yes, you can view the bungalow. Contact us and we will arrange a time."
      },
      {
        question: "Is there medical care nearby?",
        answer: "Yes, there are medical facilities and healthcare services nearby."
      }
    ]
  }
};

export const translations = {
  cs: {
    families: {
      title: "Dětství patří přírodě",
      subtitle: "Prémiové soběstačné bungalovy navržené pro rodiny, které hledají zdravé prostředí a svobodu v přírodě.",
      hero_description: "Vytvořili jsme místo, kde vaše děti mohou vyrůstat v souladu s přírodou. Naše bungalovy kombinují moderní pohodlí s autentickým přírodním zážitkem.",
      about_title: "O projektu",
      about_text: "Naše bungalovy jsou speciálně navrženy pro rodiny s dětmi. Každý bungalov je vybaven vším, co potřebujete pro pohodlný pobyt v přírodě - od moderní kuchyně až po bezpečné venkovní prostory.",
      offer_title: "Nabídka",
      offer_text: "Dlouhodobý pronájem ekologického bungalovu s kompletním vybavením. Ideální pro rodiny, které chtějí strávit více času v přírodě.",
      why_nature_title: "Proč příroda?",
      why_nature_text: "Příroda má pozitivní vliv na fyzické a mentální zdraví dětí. Pobyt v přírodě podporuje kreativitu, nezávislost a vztah k životnímu prostředí.",
      contact_title: "Kontakt",
      contact_text: "Máte dotazy? Kontaktujte nás a my vám rádi poradíme.",
      gallery_title: "Fotogalerie",
      gallery_subtitle: "Prohlédněte si detailní fotografie našich prémiových bungalovů a jejich vybavení.",
      booking_title: "Pronájem bungalovu",
      booking_subtitle: "Zajímá vás dlouhodobý pronájem našeho bungalovu? Vyplňte formulář a my vás budeme kontaktovat s podrobnostmi.",
      booking_button: "Pronájem",
      gallery_button: "Galerie",
      view_gallery: "Prohlédnout galerii",
      reserve_button: "Rezervovat",
      home: "Domů",
      about: "O projektu",
      offer: "Nabídka",
      contact: "Kontakt",
    },
    seniors: {
      title: "Život v přírodě",
      subtitle: "Klidné a pohodlné bungalovy v přírodě pro seniory, kteří si přejí aktivní a zdravý životní styl.",
      hero_description: "Užijte si klid a harmoniia v přírodě. Naše bungalovy poskytují ideální prostředí pro zdravý a aktivní životní styl v důchodu.",
      about_title: "O projektu",
      about_text: "Naše bungalovy jsou navrženy s ohledem na potřeby seniorů. Pohodlné prostory, bezpečné vybavení a krásné okolí pro relaxaci a aktivní odpočinek.",
      offer_title: "Nabídka",
      offer_text: "Dlouhodobý pronájem ekologického bungalovu s kompletním vybavením. Ideální pro seniory, kteří chtějí strávit více času v přírodě.",
      why_nature_title: "Proč příroda?",
      why_nature_text: "Pobyt v přírodě má pozitivní vliv na zdraví a pohodu. Ticho, čistý vzduch a přírodní krása podporují fyzické a mentální zdraví.",
      contact_title: "Kontakt",
      contact_text: "Máte dotazy? Kontaktujte nás a my vám rádi poradíme.",
      gallery_title: "Fotogalerie",
      gallery_subtitle: "Prohlédněte si detailní fotografie našich bungalovů a jejich vybavení.",
      booking_title: "Pronájem bungalovu",
      booking_subtitle: "Zajímá vás dlouhodobý pronájem? Vyplňte formulář a my vás budeme kontaktovat s podrobnostmi.",
      booking_button: "Pronájem",
      gallery_button: "Galerie",
      view_gallery: "Prohlédnout galerii",
      reserve_button: "Rezervovat",
      home: "Domů",
      about: "O projektu",
      offer: "Nabídka",
      contact: "Kontakt",
    },
  },
  de: {
    families: {
      title: "Kindheit in der Natur",
      subtitle: "Premium-Selbstversorgerbungalows für Familien, die eine gesunde Umgebung und Freiheit in der Natur suchen.",
      hero_description: "Wir haben einen Ort geschaffen, an dem Ihre Kinder in Harmonie mit der Natur aufwachsen können. Unsere Bungalows verbinden modernen Komfort mit authentischem Naturerlebnis.",
      about_title: "Über das Projekt",
      about_text: "Unsere Bungalows sind speziell für Familien mit Kindern konzipiert. Jeder Bungalow ist mit allem ausgestattet, was Sie für einen komfortablen Aufenthalt in der Natur benötigen.",
      offer_title: "Angebot",
      offer_text: "Langfristiges Mietangebot für einen ökologischen Bungalow mit vollständiger Ausstattung. Ideal für Familien, die mehr Zeit in der Natur verbringen möchten.",
      why_nature_title: "Warum Natur?",
      why_nature_text: "Die Natur hat einen positiven Einfluss auf die physische und mentale Gesundheit von Kindern. Ein Aufenthalt in der Natur fördert Kreativität, Unabhängigkeit und Umweltbewusstsein.",
      contact_title: "Kontakt",
      contact_text: "Haben Sie Fragen? Kontaktieren Sie uns und wir helfen Ihnen gerne weiter.",
      gallery_title: "Fotogalerie",
      gallery_subtitle: "Schauen Sie sich detaillierte Fotos unserer Premium-Bungalows und deren Ausstattung an.",
      booking_title: "Bungalow-Vermietung",
      booking_subtitle: "Interessiert Sie eine Langzeitmiete unseres Bungalows? Füllen Sie das Formular aus und wir kontaktieren Sie mit Details.",
      booking_button: "Vermietung",
      gallery_button: "Galerie",
      view_gallery: "Galerie anschauen",
      reserve_button: "Reservieren",
      home: "Startseite",
      about: "Über uns",
      offer: "Angebot",
      contact: "Kontakt",
    },
    seniors: {
      title: "Leben in der Natur",
      subtitle: "Ruhige und komfortable Bungalows in der Natur für Senioren, die einen aktiven und gesunden Lebensstil wünschen.",
      hero_description: "Genießen Sie Ruhe und Harmonie in der Natur. Unsere Bungalows bieten die ideale Umgebung für einen gesunden und aktiven Lebensstil im Ruhestand.",
      about_title: "Über das Projekt",
      about_text: "Unsere Bungalows sind mit Rücksicht auf die Bedürfnisse von Senioren konzipiert. Komfortable Räume, sichere Ausstattung und eine wunderschöne Umgebung zum Entspannen und aktiven Ausruhen.",
      offer_title: "Angebot",
      offer_text: "Langfristiges Mietangebot für einen ökologischen Bungalow mit vollständiger Ausstattung. Ideal für Senioren, die mehr Zeit in der Natur verbringen möchten.",
      why_nature_title: "Warum Natur?",
      why_nature_text: "Ein Aufenthalt in der Natur hat einen positiven Einfluss auf Gesundheit und Wohlbefinden. Stille, saubere Luft und natürliche Schönheit fördern physische und mentale Gesundheit.",
      contact_title: "Kontakt",
      contact_text: "Haben Sie Fragen? Kontaktieren Sie uns und wir helfen Ihnen gerne weiter.",
      gallery_title: "Fotogalerie",
      gallery_subtitle: "Schauen Sie sich detaillierte Fotos unserer Bungalows und deren Ausstattung an.",
      booking_title: "Bungalow-Vermietung",
      booking_subtitle: "Interessiert Sie eine Langzeitmiete? Füllen Sie das Formular aus und wir kontaktieren Sie.",
      booking_button: "Vermietung",
      gallery_button: "Galerie",
      view_gallery: "Galerie anschauen",
      reserve_button: "Reservieren",
      home: "Startseite",
      about: "Über uns",
      offer: "Angebot",
      contact: "Kontakt",
    },
  },
  en: {
    families: {
      title: "Childhood in Nature",
      subtitle: "Premium self-catering bungalows for families seeking a healthy environment and freedom in nature.",
      hero_description: "We've created a place where your children can grow in harmony with nature. Our bungalows combine modern comfort with authentic nature experience.",
      about_title: "About the Project",
      about_text: "Our bungalows are specially designed for families with children. Each bungalow is equipped with everything you need for a comfortable stay in nature.",
      offer_title: "Offer",
      offer_text: "Long-term rental of an ecological bungalow with complete equipment. Ideal for families who want to spend more time in nature.",
      why_nature_title: "Why Nature?",
      why_nature_text: "Nature has a positive impact on children's physical and mental health. Time in nature promotes creativity, independence, and environmental awareness.",
      contact_title: "Contact",
      contact_text: "Have questions? Contact us and we'll be happy to help.",
      gallery_title: "Photo Gallery",
      gallery_subtitle: "View detailed photos of our premium bungalows and their equipment.",
      booking_title: "Bungalow Rental",
      booking_subtitle: "Interested in long-term rental of our bungalow? Fill out the form and we'll contact you with details.",
      booking_button: "Rental",
      gallery_button: "Gallery",
      view_gallery: "View Gallery",
      reserve_button: "Reserve",
      home: "Home",
      about: "About",
      offer: "Offer",
      contact: "Contact",
    },
    seniors: {
      title: "Life in Nature",
      subtitle: "Quiet and comfortable bungalows in nature for seniors seeking an active and healthy lifestyle.",
      hero_description: "Enjoy peace and harmony in nature. Our bungalows provide the ideal environment for a healthy and active lifestyle in retirement.",
      about_title: "About the Project",
      about_text: "Our bungalows are designed with seniors' needs in mind. Comfortable spaces, safe equipment, and beautiful surroundings for relaxation and active rest.",
      offer_title: "Offer",
      offer_text: "Long-term rental of an ecological bungalow with complete equipment. Ideal for seniors who want to spend more time in nature.",
      why_nature_title: "Why Nature?",
      why_nature_text: "Time in nature has a positive impact on health and well-being. Quiet, clean air, and natural beauty promote physical and mental health.",
      contact_title: "Contact",
      contact_text: "Have questions? Contact us and we'll be happy to help.",
      gallery_title: "Photo Gallery",
      gallery_subtitle: "View detailed photos of our bungalows and their equipment.",
      booking_title: "Bungalow Rental",
      booking_subtitle: "Interested in long-term rental? Fill out the form and we'll contact you.",
      booking_button: "Rental",
      gallery_button: "Gallery",
      view_gallery: "View Gallery",
      reserve_button: "Reserve",
      home: "Home",
      about: "About",
      offer: "Offer",
      contact: "Contact",
    },
  },
};
