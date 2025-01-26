import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="w-full py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Ihr Partner für erfolgreichen E-Commerce
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Wir entwickeln, skalieren und betreuen Ihren Online-Shop mit modernster Technologie und bewährten Strategien.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-lg text-gray-700"
          >
            ✓ Professionelles Webdesign
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-lg text-gray-700"
          >
            ✓ Kontinuierliche Betreuung
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-lg text-gray-700"
          >
            ✓ Technische Optimierung
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;