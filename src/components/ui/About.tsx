'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '@/lib/data';
import { Sparkle, ShieldCheck, Microscope, Clock } from '@phosphor-icons/react';

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative section-padding bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-dental-500/10 via-emerald-400/5 to-cyan-400/10 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-dental-500/20 flex items-center justify-center">
                  <Microscope size={48} className="text-dental-600 dark:text-dental-400" weight="duotone" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-gradient-to-br from-dental-500 to-emerald-400 flex items-center justify-center shadow-xl shadow-dental-500/20">
                <div className="text-center text-white">
                  <p className="text-3xl font-bold">15+</p>
                  <p className="text-[10px] font-medium opacity-80 -mt-1">Years</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About Us</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Modern Dentistry.{' '}
              <span className="text-gradient">Compassionate Care.</span>
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              At DentalCare, we believe a trip to the dentist should be something to look forward to. 
              Our state-of-the-art facility combines cutting-edge technology with a warm, welcoming 
              atmosphere designed to put you at ease from the moment you walk in.
            </p>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every member of our team shares a common philosophy: treat every patient like family. 
              We take the time to listen, explain, and work with you to create a personalized treatment plan 
              that fits your needs, goals, and budget.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Sparkle, label: 'Advanced Technology', desc: 'Digital scanning, 3D imaging, laser dentistry' },
                { icon: ShieldCheck, label: 'Sterilization Standards', desc: 'Hospital-grade infection control protocols' },
                { icon: Clock, label: 'Flexible Scheduling', desc: 'Early morning, evening & weekend appointments' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    <div className="w-9 h-9 rounded-lg bg-dental-500/10 dark:bg-dental-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-dental-600 dark:text-dental-400" weight="bold" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-zinc-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 grid grid-cols-4 gap-6 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold text-dental-600 dark:text-dental-400">{stat.value}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}