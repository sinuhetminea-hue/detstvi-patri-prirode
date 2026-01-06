import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { faqData } from "@/contexts/LanguageContext";

/**
 * Design Philosophy: Organic Minimalism with Nature Focus
 * - Sage green primary (#6B8E6F) for nature connection
 * - Warm cream backgrounds (#F5F1E8) for calm, welcoming feel
 * - Asymmetric layouts and organic spacing
 * - Typography: Playfair Display for headings, Inter for body
 */

export default function FAQPage() {
  const { language, variant } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  
  const faqs = faqData[language][variant];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-[#6B8E6F]">
            {variant === "families" ? "Dětství patří přírodě" : "Život v přírodě"}
          </a>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              {language === "cs" ? "Domů" : language === "de" ? "Startseite" : "Home"}
            </a>
            <a href="/gallery" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              {language === "cs" ? "Galerie" : language === "de" ? "Galerie" : "Gallery"}
            </a>
            <a href="/booking" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              {language === "cs" ? "Pronájem" : language === "de" ? "Vermietung" : "Rental"}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2C3E3F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === "cs" ? "Často kladené otázky" : language === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
          </h1>
          <p className="text-xl text-gray-600">
            {language === "cs"
              ? "Najděte odpovědi na nejčastěji kladené otázky o našem projektu a pronájmu."
              : language === "de"
              ? "Finden Sie Antworten auf häufig gestellte Fragen zu unserem Projekt und der Vermietung."
              : "Find answers to frequently asked questions about our project and rental."}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-[#F5F1E8] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#2C3E3F] text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B8E6F] flex-shrink-0 transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-4 bg-[#F5F1E8] border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 bg-[#6B8E6F] text-white rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              {language === "cs"
                ? "Máte další otázky?"
                : language === "de"
                ? "Haben Sie weitere Fragen?"
                : "Have more questions?"}
            </h2>
            <p className="mb-6 text-lg opacity-90">
              {language === "cs"
                ? "Kontaktujte nás a my vám rádi poradíme."
                : language === "de"
                ? "Kontaktieren Sie uns und wir helfen Ihnen gerne weiter."
                : "Contact us and we'll be happy to help."}
            </p>
            <a
              href="/"
              className="inline-block bg-white text-[#6B8E6F] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {language === "cs"
                ? "Kontaktovat"
                : language === "de"
                ? "Kontakt"
                : "Contact"}
            </a>
          </div>
        </div>
      </section>

      {/* Developer Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#2C3E3F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {language === "cs" ? "Kontaktujte vývojáře" : language === "de" ? "Kontaktieren Sie den Entwickler" : "Contact the Developer"}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === "cs"
              ? "Máte otázky nebo chcete něco změnit na webu?"
              : language === "de"
              ? "Haben Sie Fragen oder möchten Sie etwas auf der Website ändern?"
              : "Have questions or want to make changes to the website?"}
          </p>
          <a href="mailto:tomas.cernicky@gmail.com" className="inline-block bg-[#6B8E6F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#5a7a5f] transition-colors">
            📧 tomas.cernicky@gmail.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E3F] text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; 2025 {variant === "families" ? "Dětství patří přírodě" : "Život v přírodě"}. Všechna práva vyhrazena.
          </p>
        </div>
      </footer>
    </div>
  );
}
