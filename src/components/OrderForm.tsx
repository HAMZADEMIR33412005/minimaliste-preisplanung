import { useState } from "react";
import { motion } from "framer-motion";

const OrderForm = () => {
  const [selectedPages, setSelectedPages] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [extras, setExtras] = useState<string[]>([]);

  const pageOptions = [
    { pages: 1, price: 600 },
    { pages: 2, price: 800 },
    { pages: 3, price: 1000 },
    { pages: 4, price: 1200 },
    { pages: 5, price: 1400 },
  ];

  const pageTypes = [
    "Home",
    "Produktpage",
    "Contact Page",
    "About Us",
    "Info Page",
  ];

  const extraOptions = [
    { name: "3D Model Implementierung", price: 300 },
    { name: "Custom Mauszeiger", price: 50 },
    { name: "Interaktives Element", price: 200 },
    { name: "Business-Email & Domain Begleitung", price: 50 },
    { name: "Logo Design", price: 50 },
    { name: "Weitere Produktseiten", price: 200 },
  ];

  const handlePageTypeChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else if (selectedTypes.length < selectedPages) {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleExtraChange = (extra: string) => {
    if (extras.includes(extra)) {
      setExtras(extras.filter((e) => e !== extra));
    } else {
      setExtras([...extras, extra]);
    }
  };

  const calculateTotal = () => {
    const basePrice = pageOptions.find((opt) => opt.pages === selectedPages)?.price || 0;
    const extrasTotal = extraOptions
      .filter((opt) => extras.includes(opt.name))
      .reduce((sum, opt) => sum + opt.price, 0);
    return basePrice + extrasTotal;
  };

  return (
    <section className="py-16 px-4 bg-gray-50 animate-fadeIn">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Bestellformular
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Anzahl der Seiten</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {pageOptions.map((option) => (
                <button
                  key={option.pages}
                  onClick={() => setSelectedPages(option.pages)}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    selectedPages === option.pages
                      ? "border-seablue bg-seablue text-white"
                      : "border-gray-200 hover:border-seablue"
                  }`}
                >
                  <div className="text-sm">{option.pages} Page{option.pages > 1 ? "s" : ""}</div>
                  <div className="font-semibold">{option.price}€</div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Seitentypen</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pageTypes.map((type) => (
                <label
                  key={type}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    selectedTypes.includes(type)
                      ? "border-seablue bg-seablue/5"
                      : "border-gray-200"
                  } ${
                    selectedTypes.length >= selectedPages &&
                    !selectedTypes.includes(type)
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:border-seablue"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handlePageTypeChange(type)}
                    disabled={
                      selectedTypes.length >= selectedPages &&
                      !selectedTypes.includes(type)
                    }
                    className="mr-3"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Extras</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extraOptions.map((option) => (
                <label
                  key={option.name}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                    extras.includes(option.name)
                      ? "border-seablue bg-seablue/5"
                      : "border-gray-200 hover:border-seablue"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={extras.includes(option.name)}
                    onChange={() => handleExtraChange(option.name)}
                    className="mr-3"
                  />
                  <div className="flex justify-between w-full">
                    <span>{option.name}</span>
                    <span className="font-semibold">{option.price}€</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold mb-4">
              Gesamtpreis: {calculateTotal()}€
            </div>
            <button className="py-3 px-8 bg-seablue text-white rounded-lg hover:bg-seablue-dark transition-colors duration-300">
              Anfrage absenden
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderForm;