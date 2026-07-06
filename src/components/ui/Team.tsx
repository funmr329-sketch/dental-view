'use client';

import { motion, useReducedMotion } from 'motion/react';
import { team } from '@/lib/data';

const gradients = [
  'from-dental-500 to-emerald-400',
  'from-emerald-500 to-cyan-400',
  'from-dental-600 to-dental-400',
  'from-teal-500 to-dental-400',
];

export function Team() {
  const reduce = useReducedMotion();

  return (
    <section id="team" className="relative section-padding overflow-hidden">
      <div className="container-page">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label">Our Team</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Meet Your{' '}
            <span className="text-gradient">Dental Experts</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            A dedicated team of experienced professionals committed to your dental health and beautiful smile.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="team-card group"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center overflow-hidden">
                <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110`}>
                  <span className="text-2xl font-bold text-white">{member.initials}</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${gradients[i]} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}