import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[hsl(var(--gold-primary))] shadow-sm hover:shadow-[var(--shadow-corporate)] transition-all duration-300"
      >
        {/* Header */}
        <div className="bg-[hsl(var(--navy-deep))] p-6 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="w-14 h-14 rounded-xl bg-[hsl(var(--gold-primary))] flex items-center justify-center group-hover:scale-110 transition-transform">
              <service.icon className="w-7 h-7 text-[hsl(var(--navy-deep))]" />
            </div>
            <ArrowRight className="w-6 h-6 text-white/50 group-hover:text-[hsl(var(--gold-primary))] group-hover:translate-x-2 transition-all" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-[hsl(var(--navy-deep))] mb-3 group-hover:text-[hsl(var(--gold-primary))] transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 mb-6 line-clamp-3">
            {service.description}
          </p>

          {/* Preview of offerings */}
          <div className="space-y-2">
            {service.offerings.slice(0, 3).map((offering, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--gold-primary))]" />
                {offering.title}
              </div>
            ))}
            {service.offerings.length > 3 && (
              <div className="text-sm text-[hsl(var(--gold-primary))] font-medium">
                +{service.offerings.length - 3} more
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
