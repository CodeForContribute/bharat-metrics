import { motion } from "framer-motion";
import { Award, Target, Handshake, Globe } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const reasons = [
  {
    title: "Industry Expertise",
    description: "Our team brings experience from top companies like AWS, Oracle, and Marriott.",
    icon: Award,
  },
  {
    title: "Tailored Solutions",
    description: "We craft customized strategies that align with your unique business goals.",
    icon: Target,
  },
  {
    title: "End-to-End Support",
    description: "From strategy to execution, we're with you every step of the way.",
    icon: Handshake,
  },
  {
    title: "Local Focus, Global Standards",
    description: "Bihar-based expertise with world-class methodologies and best practices.",
    icon: Globe,
  },
];

const WhyUs = () => {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--navy-light))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="The BharatMetrics Advantage"
          description="Partner with a consultancy that understands your challenges and delivers results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon Container */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <reason.icon className="w-10 h-10 text-[hsl(var(--gold-primary))]" />
                </div>
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[hsl(var(--navy-deep))] text-white text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[hsl(var(--navy-deep))] mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
