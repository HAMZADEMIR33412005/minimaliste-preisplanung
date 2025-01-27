import { motion } from "framer-motion";
import { MapPin, Check, AlertTriangle, Info } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      info: "Idealer Standort für internationale Geschäfte mit 0% Einkommensteuer und strategischer Lage zwischen Ost und West.",
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
      info: "Perfekt für den amerikanischen Markt mit vorteilhaftem Steuersystem und einfachem Zugang zum US-Markt.",
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
    <section className="w-full py-16 px-4 bg-gradient-primary animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
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
                  ? "border-veluxe-light ring-2 ring-veluxe-light"
                  : "border-gray-100 hover:border-veluxe-light"
              }`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-8 h-8 text-veluxe-primary mr-2" />
                    <h3 className="text-2xl font-bold">{location.city}</h3>
                  </div>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-5 h-5 text-gray-400 hover:text-veluxe-primary transition-colors" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>{location.info}</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-veluxe-primary">
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
                      <Check className="w-5 h-5 text-veluxe-primary flex-shrink-0" />
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
                      ? "bg-veluxe-dark"
                      : "bg-veluxe-primary hover:bg-veluxe-dark"
                  }`}
                >
                  {selectedLocation === location.city ? "Ausgewählt" : "Auswählen"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <Alert className="mt-8 bg-white/90 border-veluxe-primary">
          <AlertTriangle className="h-5 w-5 text-veluxe-primary" />
          <AlertDescription className="text-veluxe-dark ml-2">
            <strong>Wichtige Information für österreichische Staatsbürger:</strong>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Der Aufenthalt an einem Ort darf nicht länger als 6 Monate betragen</li>
              <li>Es dürfen keine Anmeldungen (z.B. Wohnung) in Österreich bestehen</li>
              <li>Der Lebensmittelpunkt darf nicht in Österreich sein</li>
            </ul>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default LocationOptions;