import { useLanguage } from "@/contexts/LanguageContext";
import { attractionsData } from "@/contexts/LanguageContext";
import { MapPin, Clock, AlertCircle } from "lucide-react";

export default function Attractions() {
  const { language } = useLanguage();
  const data = attractionsData[language];

  if (!data) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg text-slate-600">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.attractions.map((attraction, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 hover:shadow-lg transition-shadow border-l-4 border-green-600"
            >
              {/* Ikona a název */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{attraction.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {attraction.name}
                  </h3>
                  <p className="text-sm text-green-600 font-semibold">
                    {attraction.type}
                  </p>
                </div>
              </div>

              {/* Popis */}
              <p className="text-slate-700 mb-6 leading-relaxed">
                {attraction.description}
              </p>

              {/* Detaily */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Vzdálenost</p>
                    <p className="font-semibold text-slate-900">
                      {attraction.distance}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Doba</p>
                    <p className="font-semibold text-slate-900">
                      {attraction.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-green-600" />
                  <div>
                    <p className="text-xs text-slate-600">Obtížnost</p>
                    <p className="font-semibold text-slate-900">
                      {attraction.difficulty}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Chcete se dozvědět více o okolí?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Kontaktujte nás a my vám rádi poradíme s plánováním vašeho pobytu.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
          >
            Kontaktujte nás
          </a>
        </div>
      </div>
    </section>
  );
}
