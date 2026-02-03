import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { Service } from "@/data/services";
import { companyInfo } from "@/data/company";

interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[hsl(var(--navy-deep))] pt-32 pb-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-6">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[hsl(var(--gold-primary))]">{service.shortTitle}</span>
            </nav>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold-primary))] flex items-center justify-center mb-6">
              <service.icon className="w-8 h-8 text-[hsl(var(--navy-deep))]" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {service.description1}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* CTA Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[hsl(var(--gold-primary))]/10 border border-[hsl(var(--gold-primary))]/30 rounded-2xl p-6 mb-12"
              >
                <p className="text-[hsl(var(--navy-deep))] font-semibold text-lg">
                  {service.callToAction}
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg leading-relaxed mb-12"
              >
                {service.description2}
              </motion.p>

              {/* Advantages */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-[hsl(var(--navy-deep))] mb-6">
                  Our Advantages
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.advantages.map((advantage, index) => (
                    <motion.div
                      key={advantage.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[hsl(var(--navy-light))] rounded-xl p-5"
                    >
                      <div className="flex gap-3">
                        <CheckCircle className="w-6 h-6 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-[hsl(var(--navy-deep))] mb-1">
                            {advantage.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {advantage.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Expert Services (if available) */}
              {service.expertServices && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-2xl font-bold text-[hsl(var(--navy-deep))] mb-6">
                    Expert Services
                  </h2>
                  <div className="grid gap-4">
                    {service.expertServices.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex gap-4 p-5 bg-white border border-gray-200 rounded-xl hover:border-[hsl(var(--gold-primary))] hover:shadow-sm transition-all"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[hsl(var(--navy-deep))] flex items-center justify-center flex-shrink-0">
                          <span className="text-[hsl(var(--gold-primary))] font-bold text-sm">
                            {index + 1}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[hsl(var(--navy-deep))] mb-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Detailed Offerings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-[hsl(var(--navy-deep))] mb-6">
                  What We Offer
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.offerings.map((offering, index) => (
                    <motion.div
                      key={offering.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[hsl(var(--gold-primary))] hover:shadow-md transition-all"
                    >
                      <h3 className="font-bold text-[hsl(var(--navy-deep))] mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--gold-primary))]" />
                        {offering.title}
                      </h3>
                      <ul className="space-y-2">
                        {offering.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-gray-600 text-sm flex items-start gap-2"
                          >
                            <CheckCircle className="w-4 h-4 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-[hsl(var(--navy-deep))] rounded-2xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-white/80 text-sm mb-6">
                    Let's discuss how our {service.shortTitle.toLowerCase()} services can help your business grow.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[hsl(var(--gold-primary))] text-[hsl(var(--navy-deep))] font-semibold rounded-lg hover:bg-[hsl(var(--gold-light))] transition-colors mb-4"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {companyInfo.phone}
                  </a>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-[hsl(var(--navy-light))] rounded-2xl p-6"
                >
                  <h3 className="font-bold text-[hsl(var(--navy-deep))] mb-4">
                    Why Choose Us
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: "Expert Consultants", value: "11+" },
                      { label: "Client Satisfaction", value: "100%" },
                      { label: "Years Experience", value: "5+" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-600 text-sm">{stat.label}</span>
                        <span className="font-bold text-[hsl(var(--gold-primary))]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[var(--gradient-gold)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[hsl(var(--navy-deep))] mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-[hsl(var(--navy-deep))]/80 mb-8">
            Get in touch with our experts today and discover how we can help you achieve your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--navy-deep))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy-deep))]/90 transition-colors shadow-[var(--shadow-corporate)]"
          >
            Schedule a Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
