import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const RequirementsList = () => {
  const requirements = [
    "Produktbilder",
    "Beschreibung",
    "Preise",
    "Versandtarife",
    "Farbwahl (3 Farben: Akzent bis Hauptfarbe)",
  ];

  return (
    <section className="py-16 px-4 animate-fadeIn">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Was wir brauchen
          </h2>
          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <motion.div
                key={requirement}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50"
              >
                <CheckCircle className="w-6 h-6 text-seablue flex-shrink-0" />
                <span className="text-gray-700">{requirement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequirementsList;