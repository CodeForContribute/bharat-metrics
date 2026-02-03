import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { services } from "@/data/services";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-[hsl(var(--navy-deep))] z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-6 pt-24">
              {/* Main Navigation */}
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? "bg-[hsl(var(--gold-primary))] text-[hsl(var(--navy-deep))]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Services List */}
              <div className="mt-8">
                <h3 className="text-[hsl(var(--gold-primary))] font-semibold text-sm uppercase tracking-wider mb-4 px-4">
                  Our Services
                </h3>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={onClose}
                      className="flex items-center justify-between px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <service.icon className="w-5 h-5 text-[hsl(var(--gold-primary))]" />
                        <span className="text-sm">{service.shortTitle}</span>
                      </div>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8 px-4">
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block w-full text-center px-6 py-3 bg-[hsl(var(--gold-primary))] text-[hsl(var(--navy-deep))] font-semibold rounded-lg hover:bg-[hsl(var(--gold-light))] transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Contact Info */}
              <div className="mt-8 px-4 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm">Contact Us</p>
                <p className="text-white text-sm mt-2">(+91) 790 349 9877</p>
                <p className="text-white text-sm">info@bharatmetrics.net</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
