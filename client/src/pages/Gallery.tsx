import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * Design Philosophy: Organic Minimalism with Nature Focus
 * - Gallery showcasing individual bungalows with detailed photos
 * - Sage green accents (#6B8E6F) for consistency
 * - Light, airy layout with modal image viewer
 */

interface BungalowImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

const bungalowImages: BungalowImage[] = [
  {
    id: "1",
    title: "Exteriér - Moderní design",
    category: "Exteriér",
    image: "/images/bungalow-deluxe-exterior.jpg",
    description: "Architektura navržená v souladu s přírodou. Solární panely, přírodní materiály a velká okna.",
  },
  {
    id: "2",
    title: "Interiér - Obývací pokoj",
    category: "Interiér",
    image: "/images/bungalow-deluxe-interior.jpg",
    description: "Spacious open-plan living area s přirozeným osvětlením a výhledem do přírody.",
  },
  {
    id: "3",
    title: "Ložnice - Pohodlí a klid",
    category: "Ložnice",
    image: "/images/bungalow-family-bedroom.jpg",
    description: "Útulná ložnice s přírodním nábytkem a výhledem do lesa.",
  },
  {
    id: "4",
    title: "Kuchyně a jídelna",
    category: "Kuchyně",
    image: "/images/bungalow-kitchen-dining.jpg",
    description: "Moderní kuchyň s přírodními materiály a velkým jídelním stolem pro rodinné chvíle.",
  },
  {
    id: "5",
    title: "Koupelna - Luxus a wellness",
    category: "Koupelna",
    image: "/images/bungalow-bathroom.jpg",
    description: "Luxusní ekologická koupelna s přírodním kamenem a dřevem.",
  },
  {
    id: "6",
    title: "Venkovní prostor - Relaxace",
    category: "Venkovní prostor",
    image: "/images/bungalow-outdoor-space.jpg",
    description: "Krásný venkovní prostor s ohništěm a pohodlným sezením pro rodinu.",
  },
];

const categories = ["Všechny", "Exteriér", "Interiér", "Ložnice", "Kuchyně", "Koupelna", "Venkovní prostor"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Všechny");
  const [selectedImage, setSelectedImage] = useState<BungalowImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    selectedCategory === "Všechny"
      ? bungalowImages
      : bungalowImages.filter((img) => img.category === selectedCategory);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    setSelectedImage(filteredImages[(currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1)]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    setSelectedImage(filteredImages[(currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1)]);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#6B8E6F]">Dětství patří přírodě</div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              Domů
            </a>
            <a href="/#o-projektu" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              O projektu
            </a>
            <a href="/#nabidka" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              Nabídka
            </a>
            <a href="/#kontakt" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#F5F1E8] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-[#2C3E3F] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fotogalerie bungalovů
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Prohlédněte si detailní fotografie našich prémiových bungalovů a jejich vybavení.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentIndex(0);
                  setSelectedImage(null);
                }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-[#6B8E6F] text-white"
                    : "bg-[#F5F1E8] text-[#2C3E3F] hover:bg-[#E8956E] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all"
                onClick={() => {
                  setSelectedImage(image);
                  setCurrentIndex(index);
                }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
                <div className="p-6 bg-white">
                  <div className="inline-block bg-[#E8956E]/10 text-[#E8956E] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E3F] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {image.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
            >
              <X className="w-6 h-6 text-black" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Image Info */}
            <div className="bg-white p-6 mt-4 rounded-lg">
              <div className="inline-block bg-[#E8956E]/10 text-[#E8956E] px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {selectedImage.category}
              </div>
              <h2 className="text-2xl font-bold text-[#2C3E3F] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {selectedImage.title}
              </h2>
              <p className="text-gray-600">{selectedImage.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                Obrázek {currentIndex + 1} z {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#2C3E3F] text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            &copy; 2025 Dětství patří přírodě. Všechna práva vyhrazena.
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Koncept Tomáše Černického
          </p>
        </div>
      </footer>
    </div>
  );
}
