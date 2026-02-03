import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { companyInfo } from "@/data/company";

const CTABanner = () => {
  return (
    <section className="py-20 md:py-28 bg-[var(--gradient-gold)] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(var(--navy-deep))] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[hsl(var(--navy-deep))]/80 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals. Get in touch with our expert consultants today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--navy-deep))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy-deep))]/90 transition-colors group shadow-[var(--shadow-corporate)]"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[hsl(var(--navy-deep))] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
