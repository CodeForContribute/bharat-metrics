import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ContactForm from "@/components/common/ContactForm";
import { companyInfo } from "@/data/company";

const ContactPage = () => {
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
              <span className="text-[hsl(var(--gold-primary))]">Contact</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="text-[hsl(var(--gold-primary))]">Touch</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Ready to transform your business? We'd love to hear from you. Reach out to our team and let's start a conversation about your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-[hsl(var(--navy-deep))] mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--navy-light))] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[hsl(var(--gold-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--navy-deep))] mb-1">
                      Our Office
                    </h3>
                    <p className="text-gray-600 text-sm">{companyInfo.address}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--navy-light))] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[hsl(var(--gold-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--navy-deep))] mb-1">
                      Phone
                    </h3>
                    <a
                      href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-gray-600 text-sm hover:text-[hsl(var(--gold-primary))] transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--navy-light))] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[hsl(var(--gold-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--navy-deep))] mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-gray-600 text-sm hover:text-[hsl(var(--gold-primary))] transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[hsl(var(--navy-light))] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-[hsl(var(--gold-primary))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--navy-deep))] mb-1">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-[hsl(var(--navy-deep))] mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[hsl(var(--navy-deep))] flex items-center justify-center text-white hover:bg-[hsl(var(--gold-primary))] hover:text-[hsl(var(--navy-deep))] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[hsl(var(--navy-deep))] flex items-center justify-center text-white hover:bg-[hsl(var(--gold-primary))] hover:text-[hsl(var(--navy-deep))] transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-[hsl(var(--navy-deep))] flex items-center justify-center text-white hover:bg-[hsl(var(--gold-primary))] hover:text-[hsl(var(--navy-deep))] transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-[hsl(var(--navy-light))] rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-[hsl(var(--navy-deep))] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Have a question or want to discuss a project? Fill out the form below.
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-[hsl(var(--navy-deep))]/10">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[hsl(var(--navy-deep))]/30 mx-auto mb-4" />
            <p className="text-[hsl(var(--navy-deep))]/50 font-medium">
              {companyInfo.address}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
