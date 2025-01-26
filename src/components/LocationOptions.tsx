import { motion } from "framer-motion";
import { MapPin, Check } from "lucide-react";

interface LocationOptionsProps {
  onSelectLocation: (city: string, initialPrice: number, yearlyPrice: number) => void;
  selectedLocation: string | null;
}

const LocationOptions = ({ onSelectLocation, selectedLocation }: LocationOptionsProps) => {
  const locations = [
    {
      city: "Dubai",
      initialPrice: 14000,
      yearlyPrice: 8000,
      benefits: [
        "Umfassende Beratung",
        "Visa-Beantragung",
        "Steueroptimierung",
        "Geschäftskonto-Eröffnung",
        "Büroräumlichkeiten",
        "Rechtliche Unterstützung",
      ],
    },
    {
      city: "Miami",
      initialPrice: 8000,
      yearlyPrice: 4000,
      benefits: [
        "Geschäftsregistrierung",
        "Visa-Unterstützung",
        "Steuerberatung",
        "Bankkonto-Setup",
        "Virtuelle Büroaddresse",
        "Compliance-Beratung",
      ],
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Firmensitz Optionen
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {locations.map((location) => (
            <motion.div
              key={location.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border transition-all duration-300 transform hover:scale-105 ${
                selectedLocation === location.city
                  ? "border-seablue ring-2 ring-seablue"
                  : "border-gray-100 hover:border-seablue"
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-seablue mr-2" />
                  <h3 className="text-2xl font-bold">{location.city}</h3>
                </div>
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-seablue">
                    {location.initialPrice}€
                  </p>
                  <p className="text-gray-600">einmalig</p>
                  <p className="text-2xl font-semibold mt-4">
                    {location.yearlyPrice}€
                  </p>
                  <p className="text-gray-600">jährlich für Verlängerung</p>
                </div>
                <div className="space-y-4">
                  {location.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <Check className="w-5 h-5 text-seablue flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-gray-50">
                <button
                  onClick={() => onSelectLocation(location.city, location.initialPrice, location.yearlyPrice)}
                  className={`w-full py-3 px-6 text-white rounded-lg transition-colors duration-300 ${
                    selectedLocation === location.city
                      ? "bg-seablue-dark"
                      : "bg-seablue hover:bg-seablue-dark"
                  }`}
                >
                  {selectedLocation === location.city ? "Ausgewählt" : "Auswählen"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationOptions;