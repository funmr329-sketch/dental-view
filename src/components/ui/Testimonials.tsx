'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { testimonials } from '@/lib/data';
import { Star, Quotes, CaretLeft, CaretRight } from '@phosphor-icons/react';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const current = testimonials[active];
  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative section-padding bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-dental-500/3 dark:bg-dental-500/5 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label">Patient Stories</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Real Smiles.{' '}
            <span className="text-gradient">Real Results.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center px-4"
              >
                <Quotes size={32} className="mx-auto text-dental-500/30 dark:text-dental-400/30 mb-6" weight="fill" />

                <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed italic max-w-2xl">
                  &ldquo;{current.content}&rdquo;
                </p>

                <div className="flex justify-center gap-1 mt-6 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-amber-400" weight="fill" />
                  ))}
                </div>

                <p className="font-semibold text-sm">{current.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{current.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:border-dental-500 hover:text-dental-600 dark:hover:text-dental-400 transition-all duration-300"
              aria-label="Previous"
            >
              <CaretLeft size={16} weight="bold" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 bg-dental-500' : 'w-1.5 bg-zinc-300 dark:bg-zinc-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 flex items-center justify-center hover:border-dental-500 hover:text-dental-600 dark:hover:text-dental-400 transition-all duration-300"
              aria-label="Next"
            >
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}