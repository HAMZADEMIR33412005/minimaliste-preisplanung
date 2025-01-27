import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-primary fixed w-full top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/95525972-3531-4227-a33c-2b8c31af4bfe.png" 
              alt="Veluxe Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-white">VELUXE</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white/90 hover:text-white transition-colors">
              Über uns
            </Link>
            <Link to="/contact" className="text-white/90 hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;