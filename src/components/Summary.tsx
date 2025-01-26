import { motion } from "framer-motion";

interface SummaryProps {
  selectedPackage: string | null;
  packagePrice: number;
  selectedPages: number;
  pagesPrice: number;
  extras: string[];
  extrasTotal: number;
  selectedLocation: string | null;
  locationInitialPrice: number;
  locationYearlyPrice: number;
}

const Summary = ({
  selectedPackage,
  packagePrice,
  selectedPages,
  pagesPrice,
  extras,
  extrasTotal,
  selectedLocation,
  locationInitialPrice,
  locationYearlyPrice,
}: SummaryProps) => {
  const monthlyTotal = packagePrice;
  const oneTimeTotal = pagesPrice + extrasTotal + (locationInitialPrice || 0);
  const yearlyTotal = (packagePrice * 12) + (locationYearlyPrice || 0);

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
              <span>{selectedPackage} ({packagePrice.toFixed(2)}€/mo)</span>
            </div>
          )}
          <div className="flex justify-between items-center border-b pb-4">
            <span className="font-semibold">Anzahl Seiten:</span>
            <span>{selectedPages} ({pagesPrice.toFixed(2)}€)</span>
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
                <span>{extrasTotal.toFixed(2)}€</span>
              </div>
            </div>
          )}
          {selectedLocation && (
            <div className="border-b pb-4">
              <span className="font-semibold">Gewählter Firmensitz:</span>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span>{selectedLocation}</span>
                  <span>{locationInitialPrice.toFixed(2)}€ einmalig</span>
                </div>
                <div className="flex justify-between">
                  <span>Jährliche Verlängerung</span>
                  <span>{locationYearlyPrice.toFixed(2)}€/Jahr</span>
                </div>
              </div>
            </div>
          )}
          <div className="pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Einmalige Kosten:</span>
              <span className="text-xl font-bold text-seablue">{oneTimeTotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Monatliche Kosten:</span>
              <span className="text-xl font-bold text-seablue">{monthlyTotal.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xl font-bold">Jährliche Kosten:</span>
              <span className="text-xl font-bold text-seablue">{yearlyTotal.toFixed(2)}€</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Summary;