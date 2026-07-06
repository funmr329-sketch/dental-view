'use client';

import { motion, useReducedMotion } from 'motion/react';
import { DentalScene } from '@/components/3d/DentalScene';
import { CalendarCheck, CaretRight } from '@phosphor-icons/react';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <DentalScene className="w-full h-full opacity-70 dark:opacity-50" />
      </div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white via-white/95 to-white dark:from-[rgb(10,15,10)] dark:via-[rgb(10,15,10)]/95 dark:to-[rgb(10,15,10)]" />

      <div className="container-page relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dental-500/10 dark:bg-dental-500/20 border border-dental-500/20 text-dental-600 dark:text-dental-400 text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-dental-500 animate-pulse" />
              Accepting New Patients
            </span>
          </motion.div>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Your Smile is{' '}
            <span className="text-gradient">Our Priority</span>
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed"
          >
            Experience modern dentistry in a calm, comfortable environment.
            Where advanced technology meets compassionate care for your entire family.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#contact" className="btn-primary group">
              <CalendarCheck size={18} weight="bold" />
              Book Your Visit
              <CaretRight size={14} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore Services
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center gap-8"
          >
            <div className="flex -space-x-3">
              {['#22c55e', '#16a34a', '#15803d', '#166534'].map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-[rgb(10,15,10)]"
                  style={{
                    background: `linear-gradient(135deg, ${color}, ${['#34d399', '#22c55e', '#16a34a', '#15803d'][i]})`,
                  }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">Trusted by 10,000+ patients</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-xs text-zinc-500 ml-1">4.9/5 from 2,400+ reviews</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[rgb(10,15,10)] to-transparent pointer-events-none -z-10" />
    </section>
  );
}