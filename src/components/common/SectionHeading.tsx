import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  label,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${
            light ? "text-[hsl(var(--gold-light))]" : "text-[hsl(var(--gold-primary))]"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-[hsl(var(--navy-deep))]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
