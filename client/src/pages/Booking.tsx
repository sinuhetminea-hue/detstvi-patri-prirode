import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, AlertCircle } from "lucide-react";

/**
 * Design Philosophy: Organic Minimalism with Nature Focus
 * - Long-term rental inquiry form with clean, intuitive design
 * - Sage green accents (#6B8E6F) for consistency
 * - Form validation and success confirmation
 */

interface RentalFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  startMonth: string;
  rentalDuration: number;
  durationUnit: "months" | "years";
  specialRequests: string;
}

const MONTHLY_PRICE_CZK = 25000; // Kč za měsíc
const MONTHLY_PRICE_EUR = 1000; // EUR za měsíc

export default function Booking() {
  const [formData, setFormData] = useState<RentalFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    startMonth: "",
    rentalDuration: 1,
    durationUnit: "months",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateTotalPrice = () => {
    const months = formData.durationUnit === "years" ? formData.rentalDuration * 12 : formData.rentalDuration;
    return {
      czk: months * MONTHLY_PRICE_CZK,
      eur: months * MONTHLY_PRICE_EUR,
    };
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "Jméno je povinné";
    if (!formData.lastName.trim()) newErrors.lastName = "Příjmení je povinné";
    if (!formData.email.trim()) newErrors.email = "Email je povinný";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Neplatný email";
    if (!formData.phone.trim()) newErrors.phone = "Telefonní číslo je povinné";
    if (!formData.startMonth) newErrors.startMonth = "Měsíc počátku pronájmu je povinný";
    if (formData.rentalDuration < 1) newErrors.rentalDuration = "Délka pronájmu musí být alespoň 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          startMonth: "",
          rentalDuration: 1,
          durationUnit: "months",
          specialRequests: "",
        });
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rentalDuration" ? parseInt(value) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const totalPrice = calculateTotalPrice();
  const months = formData.durationUnit === "years" ? formData.rentalDuration * 12 : formData.rentalDuration;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-[#6B8E6F]">Dětství patří přírodě</div>
          <div className="hidden md:flex gap-8">
            <a href="/" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              Domů
            </a>
            <a href="/#o-projektu" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              O projektu
            </a>
            <a href="/gallery" className="text-gray-700 hover:text-[#6B8E6F] transition-colors">
              Galerie
            </a>
            <a href="/booking" className="text-gray-700 hover:text-[#6B8E6F] transition-colors font-semibold">
              Pronájem
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
            Pronájem bungalovu
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Zajímá vás dlouhodobý pronájem našeho bungalovu? Vyplňte formulář a my vás budeme kontaktovat s podrobnostmi.
          </p>
        </div>
      </section>

      {/* Rental Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 rounded-full p-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-green-600 mb-2">Poptávka přijata!</h2>
                  <p className="text-gray-700 mb-4">
                    Děkujeme za váš zájem o pronájem. Potvrzovací email jsme vám poslali na adresu <strong>{formData.email}</strong>.
                  </p>
                  <p className="text-gray-600">Naši tým vás bude kontaktovat v nejbližších 24 hodinách s nabídkou a dalšími informacemi.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-[#F5F1E8] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">Osobní údaje</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jméno *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            errors.firstName ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                          }`}
                          placeholder="Petr"
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Příjmení *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            errors.lastName ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                          }`}
                          placeholder="Novák"
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            errors.email ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                          }`}
                          placeholder="petr@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefonní číslo *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            errors.phone ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                          }`}
                          placeholder="+420 123 456 789"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Rental Details */}
                  <div className="bg-[#F5F1E8] p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#2C3E3F] mb-4">Podmínky pronájmu</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Počátek pronájmu *</label>
                        <input
                          type="month"
                          name="startMonth"
                          value={formData.startMonth}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
                            errors.startMonth ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                          }`}
                        />
                        {errors.startMonth && <p className="text-red-500 text-sm mt-1">{errors.startMonth}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Délka pronájmu *</label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            name="rentalDuration"
                            value={formData.rentalDuration}
                            onChange={handleChange}
                            min="1"
                            className={`flex-1 px-4 py-2 border rounded-lg focus:outline-none ${
                              errors.rentalDuration ? "border-red-500" : "border-gray-300 focus:border-[#6B8E6F]"
                            }`}
                          />
                          <select
                            name="durationUnit"
                            value={formData.durationUnit}
                            onChange={handleChange}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6B8E6F] bg-white"
                          >
                            <option value="months">měsíců</option>
                            <option value="years">roků</option>
                          </select>
                        </div>
                        {errors.rentalDuration && <p className="text-red-500 text-sm mt-1">{errors.rentalDuration}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Speciální požadavky</label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#6B8E6F]"
                      placeholder="Např. požadavky na vybavení, speciální podmínky..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#6B8E6F] hover:bg-[#5a7a5f] text-white rounded-lg"
                  >
                    Poslat poptávku
                  </Button>
                </form>
              )}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#F5F1E8] rounded-xl p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-[#2C3E3F] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Souhrn
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Bungalov</p>
                    <p className="font-semibold text-[#2C3E3F]">Ekologický bungalov</p>
                  </div>

                  {formData.startMonth && (
                    <>
                      <div>
                        <p className="text-sm text-gray-600">Počátek pronájmu</p>
                        <p className="font-semibold text-[#2C3E3F]">
                          {new Date(formData.startMonth + "-01").toLocaleDateString("cs-CZ", {
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-gray-600">Délka pronájmu</p>
                        <p className="font-semibold text-[#2C3E3F]">
                          {formData.rentalDuration} {formData.durationUnit === "years" ? "rok(y)" : "měsíc(ů)"}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                <div className="border-t border-gray-300 pt-6">
                  <div className="flex justify-between mb-2">
                    <p className="text-gray-600">Cena za měsíc</p>
                    <p className="font-semibold text-[#2C3E3F]">{MONTHLY_PRICE_CZK.toLocaleString("cs-CZ")} Kč / {MONTHLY_PRICE_EUR.toLocaleString("cs-CZ")} €</p>
                  </div>
                  <div className="flex justify-between mb-4">
                    <p className="text-gray-600">Počet měsíců</p>
                    <p className="font-semibold text-[#2C3E3F]">{months}</p>
                  </div>
                  <div className="flex justify-between text-lg mb-2">
                    <p className="font-bold text-[#2C3E3F]">Celkem (CZK)</p>
                    <p className="font-bold text-[#E8956E]">{totalPrice.czk.toLocaleString("cs-CZ")} Kč</p>
                  </div>
                  <div className="flex justify-between text-lg">
                    <p className="font-bold text-[#2C3E3F]">Celkem (EUR)</p>
                    <p className="font-bold text-[#E8956E]">{totalPrice.eur.toLocaleString("cs-CZ")} €</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex gap-2">
                    <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700">
                      Cena je orientační. Finální cena bude potvrzena po kontaktu s naším týmem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
