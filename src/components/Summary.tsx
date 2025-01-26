import { motion } from "framer-motion";

interface SummaryProps {
  selectedPackage: string | null;
  packagePrice: number;
  selectedPages: number;
  pagesPrice: number;
  extras: string[];
  extrasTotal: number;
}

const Summary = ({
  selectedPackage,
  packagePrice,
  selectedPages,
  pagesPrice,
  extras,
  extrasTotal,
}: SummaryProps) => {
  const total = pagesPrice + extrasTotal + (packagePrice * 12);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-lg p-8"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Zusammenfassung</h2>
        <div className="space-y-6">
          {selectedPackage && (
            <div className="flex justify-between items-center border-b pb-4">
              <span className="font-semibold">Gewähltes Paket:</span>
              <span>{selectedPackage} ({packagePrice}€/mo)</span>
            </div>
          )}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="font-semibold">Anzahl Seiten:</span>
            <span>{selectedPages} ({pagesPrice}€)</span>
          </div>
          {extras.length > 0 && (
            <div className="border-b pb-4">
              <span className="font-semibold">Gewählte Extras:</span>
              <ul className="mt-2 space-y-2">
                {extras.map((extra, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{extra}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between mt-2">
                <span className="font-semibold">Extras Gesamt:</span>
                <span>{extrasTotal}€</span>
              </div>
            </div>
          )}
          <div className="flex justify-between items-center pt-4">
            <span className="text-xl font-bold">Gesamtpreis:</span>
            <span className="text-xl font-bold text-seablue">{total}€</span>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4">
            Inklusive {packagePrice}€ monatliche Betreuungsgebühr
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Summary;