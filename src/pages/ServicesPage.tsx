import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/sections/services/ServiceCard";
import { services } from "@/data/services";

const ServicesPage = () => {
  return (
    <Layout>
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
              <span className="text-[hsl(var(--gold-primary))]">Services</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-[hsl(var(--gold-primary))]">Services</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Comprehensive business solutions designed to help your organization thrive in today's competitive landscape. From talent acquisition to digital transformation, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[hsl(var(--navy-light))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[hsl(var(--gold-primary))] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))] mt-3">
              The BharatMetrics Difference
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Our consultants bring experience from top companies like AWS, Oracle, and J.W. Marriott, ensuring world-class expertise.",
              },
              {
                title: "Tailored Approach",
                description:
                  "We don't believe in one-size-fits-all. Every solution is customized to your unique business challenges and goals.",
              },
              {
                title: "End-to-End Support",
                description:
                  "From strategy to execution, we're with you every step of the way, ensuring seamless implementation and results.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-[hsl(var(--navy-light))] rounded-2xl"
              >
                <div className="w-16 h-16 bg-[hsl(var(--gold-primary))] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-[hsl(var(--navy-deep))] font-bold text-2xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[hsl(var(--navy-deep))] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gradient-gold)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))] mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-[hsl(var(--navy-deep))]/80 mb-8">
              Our experts can help you identify the right solutions for your business. Schedule a free consultation today.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--navy-deep))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy-deep))]/90 transition-colors shadow-[var(--shadow-corporate)]"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
