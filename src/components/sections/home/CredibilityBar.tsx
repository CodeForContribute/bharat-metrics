import { motion } from "framer-motion";
import { credibilityCompanies } from "@/data/company";

const CredibilityBar = () => {
  return (
    <section className="py-12 bg-[hsl(var(--navy-light))] border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-[hsl(var(--navy-deep))]/70 text-sm font-medium mb-6">
            Our team brings experience from industry leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {credibilityCompanies.map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-3 h-3 rounded-full bg-[hsl(var(--gold-primary))]" />
                <span className="text-[hsl(var(--navy-deep))] font-semibold text-lg">
                  {company}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CredibilityBar;
