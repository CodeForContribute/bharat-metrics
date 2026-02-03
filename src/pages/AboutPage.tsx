import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import MissionVision from "@/components/sections/about/MissionVision";
import TeamGrid from "@/components/sections/about/TeamGrid";
import { companyInfo, aboutUs, credibilityCompanies } from "@/data/company";

const AboutPage = () => {
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
              <span className="text-[hsl(var(--gold-primary))]">About Us</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="text-[hsl(var(--gold-primary))]">{companyInfo.name}</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {aboutUs.paragraph1} {aboutUs.paragraph2}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-[hsl(var(--gold-primary))] font-semibold text-sm uppercase tracking-wider">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))] mt-3 mb-6">
                Bihar's Leading Business Consultancy
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  BharatMetrics is a Bihar-based business consultancy offering comprehensive business solutions across various domains. We extend our expertise to various business areas, making it a one-stop consultancy solution.
                </p>
                <p>
                  Our team comprises elite minds from premier B-Schools and industry leaders, bringing experience from companies like AWS, Oracle, J.W. Marriott, Whirlpool, and Parle Agro.
                </p>
                <p>
                  We don't just advise — we partner deeply, becoming an integral extension of your business, committed to driving transformative growth and sustainable success.
                </p>
              </div>

              {/* Credibility */}
              <div className="mt-8 p-6 bg-[hsl(var(--navy-light))] rounded-2xl">
                <p className="text-sm font-medium text-[hsl(var(--navy-deep))] mb-4">
                  Team with experience from:
                </p>
                <div className="flex flex-wrap gap-3">
                  {credibilityCompanies.map((company) => (
                    <span
                      key={company}
                      className="px-4 py-2 bg-white rounded-lg text-[hsl(var(--navy-deep))] font-semibold text-sm shadow-sm"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[hsl(var(--navy-deep))] rounded-3xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "11+", label: "Expert Consultants" },
                    { value: "6+", label: "Core Services" },
                    { value: "50+", label: "Clients Served" },
                    { value: "100%", label: "Client Satisfaction" },
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-center p-6 bg-white/10 rounded-2xl"
                    >
                      <div className="text-4xl font-bold text-[hsl(var(--gold-primary))] mb-2">
                        {stat.value}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--gold-primary))] rounded-2xl flex items-center justify-center shadow-[var(--shadow-gold)]"
              >
                <span className="text-[hsl(var(--navy-deep))] font-bold text-3xl">B</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionVision />

      {/* Team */}
      <TeamGrid />

      {/* CTA Section */}
      <section className="py-20 bg-[var(--gradient-gold)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))] mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-[hsl(var(--navy-deep))]/80 mb-8">
              Let's discuss how we can help transform your business and achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[hsl(var(--navy-deep))] text-white font-semibold rounded-lg hover:bg-[hsl(var(--navy-deep))]/90 transition-colors shadow-[var(--shadow-corporate)]"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
