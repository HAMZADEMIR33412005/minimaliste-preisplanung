import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b border-gray-200 fixed w-full top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-seablue">veluxe.dev</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-seablue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-seablue transition-colors">
              Über uns
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-seablue transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;