import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/common/SectionHeading";

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          description="Comprehensive business solutions designed to help your organization thrive in today's competitive landscape."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block h-full bg-white rounded-2xl p-8 border border-gray-200 hover:border-[hsl(var(--gold-primary))] shadow-sm hover:shadow-[var(--shadow-corporate)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[hsl(var(--navy-deep))] flex items-center justify-center mb-6 group-hover:bg-[hsl(var(--gold-primary))] transition-colors">
                  <service.icon className="w-7 h-7 text-white group-hover:text-[hsl(var(--navy-deep))]" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[hsl(var(--navy-deep))] mb-3 group-hover:text-[hsl(var(--gold-primary))] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-[hsl(var(--gold-primary))] font-semibold">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--navy-deep))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy-deep))]/90 transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
