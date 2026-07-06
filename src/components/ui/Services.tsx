'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Tooth, Sparkle, ArrowsOut, Anchor, Heart, Lightning, CaretDown, CaretUp } from '@phosphor-icons/react';
import { services, type Service } from '@/lib/data';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ElementType> = {
  Tooth, Sparkle, ArrowsOut, Anchor, Heart, Lightning,
};

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="services" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-[600px] h-[600px] rounded-full bg-dental-500/3 dark:bg-dental-500/5 blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full bg-emerald-300/3 dark:bg-emerald-300/5 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label">Our Treatments</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Comprehensive{' '}
            <span className="text-gradient">Dental Care</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            From routine check-ups to advanced cosmetic procedures, we offer everything you need for a healthy, beautiful smile under one roof.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Tooth;
            const isExpanded = expandedId === service.id;

            return (
              <motion.div
                key={service.id}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div
                  className={cn(
                    'service-card cursor-pointer h-full',
                    isExpanded && 'border-dental-500/40 shadow-lg shadow-dental-500/5'
                  )}
                  onClick={() => setExpandedId(isExpanded ? null : service.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter') setExpandedId(isExpanded ? null : service.id); }}
                >
                  <div className="w-10 h-10 rounded-xl bg-dental-500/10 dark:bg-dental-500/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-dental-600 dark:text-dental-400" weight="bold" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{service.description}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-zinc-200 dark:border-zinc-700">
                          <ul className="grid grid-cols-2 gap-2">
                            {service.features.map((feat) => (
                              <li key={feat} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-dental-500 flex-shrink-0" />
                                {feat}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center text-xs text-dental-600 dark:text-dental-400 font-medium">
                    {isExpanded ? 'Show less' : 'View details'}
                    {isExpanded ? <CaretUp size={12} weight="bold" className="ml-1" /> : <CaretDown size={12} weight="bold" className="ml-1" />}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}