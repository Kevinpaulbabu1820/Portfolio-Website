import { AnimatePresence } from "framer-motion";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "100vh" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center"
        >
          {/* Close Button */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-4xl focus:outline-none hover:scale-110 transition-transform"
            aria-label="Close Menu"
          >
            &times;
          </button>

          {/* Menu Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 mt-8"
          >
            {["Home", "About", "Projects", "Contact"].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors duration-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + index * 0.1 }}
              >
                {section}
              </motion.a>
            ))}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
