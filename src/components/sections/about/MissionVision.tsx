import { motion } from "framer-motion";
import { Target, Eye, CheckCircle } from "lucide-react";
import { missionStatements, visionStatement } from "@/data/company";

const MissionVision = () => {
  return (
    <section className="py-20 md:py-28 bg-[hsl(var(--navy-light))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--gold-primary))] flex items-center justify-center">
                <Target className="w-7 h-7 text-[hsl(var(--navy-deep))]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))]">
                Our Mission
              </h2>
            </div>

            <div className="space-y-4">
              {missionStatements.map((mission, index) => (
                <motion.div
                  key={mission.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-[hsl(var(--gold-primary))] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[hsl(var(--navy-deep))] mb-2">
                        {mission.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {mission.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--navy-deep))] flex items-center justify-center">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[hsl(var(--navy-deep))]">
                Our Vision
              </h2>
            </div>

            <div className="bg-[hsl(var(--navy-deep))] rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--gold-primary))] flex items-center justify-center mb-6">
                  <span className="text-[hsl(var(--navy-deep))] font-bold text-2xl">B</span>
                </div>

                <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                  "{visionStatement}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="h-1 flex-1 bg-[hsl(var(--gold-primary))]/30 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[hsl(var(--gold-primary))]"
                    />
                  </div>
                  <span className="text-[hsl(var(--gold-primary))] font-semibold text-sm whitespace-nowrap">
                    Bihar's Future
                  </span>
                </div>
              </div>
            </div>

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 bg-white rounded-xl p-6 shadow-sm"
            >
              <h4 className="font-bold text-[hsl(var(--navy-deep))] mb-2">
                Our Commitment
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We don't just advise — we partner deeply, becoming an integral extension of your business, committed to driving transformative growth and sustainable success in Bihar and beyond.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
