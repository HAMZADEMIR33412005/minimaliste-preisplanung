import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const PricingTable = () => {
  const plans = [
    {
      name: "BASIC",
      price: "129,90€",
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
    <section className="w-full py-16 px-4 animate-fadeIn">
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
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-seablue transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-center text-seablue mb-1">
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
                            <Check className="w-5 h-5 text-seablue" />
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
                <button className="w-full py-3 px-6 text-white bg-seablue rounded-lg hover:bg-seablue-dark transition-colors duration-300 transform hover:scale-105">
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