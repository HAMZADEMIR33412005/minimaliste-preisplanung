import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

interface PricingTableProps {
  onSelectPackage: (name: string, price: number) => void;
  selectedPackage: string | null;
}

const PricingTable = ({ onSelectPackage, selectedPackage }: PricingTableProps) => {
  const plans = [
    {
      name: "BASIC",
      price: "129,90€",
      priceNumber: 129.9,
      suffix: "/mo",
      features: [
        { name: "Software-Aktualisierungen", included: true },
        { name: "Produkte", value: "20" },
        { name: "Design-Änderungen", value: "5" },
        { name: "Aktuelle Legal Pages", included: false },
        { name: "E-Mail-Kampagnen", value: "1" },
        { name: "Kundensupport", value: "24/7" },
      ],
    },
    {
      name: "PREMIUM",
      price: "169,90€",
      priceNumber: 169.9,
      suffix: "/mo",
      features: [
        { name: "Software-Aktualisierungen", included: true },
        { name: "Produkte", value: "100" },
        { name: "Design-Änderungen", value: "25" },
        { name: "Aktuelle Legal Pages", included: true },
        { name: "E-Mail-Kampagnen", value: "4" },
        { name: "Kundensupport", value: "24/7" },
      ],
    },
  ];

  return (
    <section id="pricing" className="w-full py-16 px-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Unsere Pakete
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border transition-all duration-300 transform hover:scale-105 ${
                selectedPackage === plan.name
                  ? "border-veluxe-primary ring-2 ring-veluxe-primary"
                  : "border-gray-100 hover:border-veluxe-primary"
              }`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{plan.name}</h3>
                <p className="text-4xl font-bold text-center text-veluxe-primary mb-1">
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">{plan.suffix}</span>
                </p>
                <div className="space-y-4 mt-8">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.name}
                      className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-gray-600">{feature.name}</span>
                      <span className="font-medium">
                        {"included" in feature ? (
                          feature.included ? (
                            <Check className="w-5 h-5 text-veluxe-primary" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400" />
                          )
                        ) : (
                          <span className="text-gray-900">{feature.value}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 bg-gray-50">
                <button
                  onClick={() => onSelectPackage(plan.name, plan.priceNumber)}
                  className={`w-full py-3 px-6 text-white rounded-lg transition-colors duration-300 transform hover:scale-105 ${
                    selectedPackage === plan.name
                      ? "bg-veluxe-dark"
                      : "bg-veluxe-primary hover:bg-veluxe-dark"
                  }`}
                >
                  Auswählen
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;