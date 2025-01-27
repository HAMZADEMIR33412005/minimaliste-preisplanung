import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-seablue">veluxe.dev</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Ihre Experten für internationale Geschäftsgründung und Optimierung
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-seablue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-seablue transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-seablue transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-seablue transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/imprint" className="text-gray-600 hover:text-seablue transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-seablue transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} veluxe.dev. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;