import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { reviewsData } from "@/contexts/LanguageContext";

export default function Reviews() {
  const { language, variant } = useLanguage();
  const reviews = reviewsData[language]?.[variant] || [];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            {variant === "families" ? "Co si myslí naši hosté" : "Recenze od našich hostů"}
          </h2>
          <p className="text-lg text-slate-600">
            {variant === "families"
              ? "Přečtěte si, jak se cítili naši hosté během svého pobytu"
              : "Slyšte příběhy od spokojených pronajímatelů"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-8 border-l-4 border-green-600"
            >
              {/* Hvězdy */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text recenze */}
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>

              {/* Autor */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
