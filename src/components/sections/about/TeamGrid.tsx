import { motion } from "framer-motion";
import { teamMembers, teamDescription } from "@/data/team";
import SectionHeading from "@/components/common/SectionHeading";

const TeamGrid = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Meet the Experts"
          description="A talented team of professionals committed to your success."
        />

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative mb-4 overflow-hidden rounded-2xl">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--navy-deep))]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-[hsl(var(--navy-deep))] mb-1">
                {member.name}
              </h3>
              <p className="text-[hsl(var(--gold-primary))] font-medium text-sm mb-1">
                {member.title}
              </p>
              {member.department && (
                <p className="text-gray-500 text-xs">{member.department}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Team Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-[hsl(var(--navy-light))] rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>{teamDescription.paragraph1}</p>
              <p>{teamDescription.paragraph2}</p>
              <p className="font-medium text-[hsl(var(--navy-deep))]">
                {teamDescription.paragraph3}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamGrid;
