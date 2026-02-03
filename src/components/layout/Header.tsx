import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/services";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", hasDropdown: true },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--navy-deep))] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[hsl(var(--gold-primary))] rounded-lg flex items-center justify-center">
              <span className="text-[hsl(var(--navy-deep))] font-bold text-xl">B</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Bharat<span className="text-[hsl(var(--gold-primary))]">Metrics</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[hsl(var(--gold-primary))] ${
                    isActive(link.path) ? "text-[hsl(var(--gold-primary))]" : "text-white"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Mega Menu for Services */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-white rounded-xl shadow-2xl p-6 w-[600px] grid grid-cols-2 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              to={`/services/${service.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[hsl(var(--navy-light))] transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[hsl(var(--navy-deep))] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--gold-primary))] transition-colors">
                                <service.icon className="w-5 h-5 text-white group-hover:text-[hsl(var(--navy-deep))]" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-[hsl(var(--navy-deep))] text-sm">
                                  {service.shortTitle}
                                </h4>
                                <p className="text-xs text-gray-600 mt-0.5 line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-[hsl(var(--gold-primary))] text-[hsl(var(--navy-deep))] font-semibold rounded-lg hover:bg-[hsl(var(--gold-light))] transition-colors shadow-[var(--shadow-gold)]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="lg:hidden p-2 text-white hover:text-[hsl(var(--gold-primary))] transition-colors"
          >
            {isMobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
