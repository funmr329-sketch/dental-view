'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MapPin, Phone, Clock, Envelope, PaperPlaneTilt, CheckCircle, Spinner } from '@phosphor-icons/react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const reduce = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] rounded-full bg-dental-500/3 dark:bg-dental-500/5 blur-3xl" />
      </div>

      <div className="container-page">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="section-label">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Book Your{' '}
            <span className="text-gradient">Visit Today</span>
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Ready to transform your smile? Fill out the form and we will contact you within 24 hours to confirm your appointment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Address', value: '123 Wellness Drive, Suite 100\nNew York, NY 10001' },
                  { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
                  { icon: Envelope, label: 'Email', value: 'hello@dentalcare.com' },
                  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 8am–6pm\nSat: 9am–3pm' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-dental-500/10 dark:bg-dental-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-dental-600 dark:text-dental-400" weight="bold" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500">{item.label}</p>
                        <p className="text-sm font-medium whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-dental-500/20 flex items-center justify-center mb-4"
                >
                  <CheckCircle size={32} className="text-dental-500" weight="fill" />
                </motion.div>
                <h3 className="text-xl font-bold">Thank You!</h3>
                <p className="text-sm text-zinc-500 mt-2 text-center max-w-sm">
                  Your appointment request has been submitted. We will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-primary mt-6"
                >
                  Book Another
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-zinc-500 mb-1.5">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-500/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-zinc-500 mb-1.5">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-500/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-zinc-500 mb-1.5">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-500/30 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-zinc-500 mb-1.5">Service *</label>
                    <select
                      id="service"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-500/30 transition-colors text-sm appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="implants">Implants & Restorations</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-xs font-medium text-zinc-500 mb-1.5">Message</label>
                    <textarea
                      id="message"
                      rows={3}
                      placeholder="Any specific concerns or preferences..."
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-dental-500 focus:outline-none focus:ring-1 focus:ring-dental-500/30 transition-colors text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full mt-5 justify-center disabled:opacity-60"
                >
                  {loading ? (
                    <Spinner size={18} weight="bold" className="animate-spin" />
                  ) : (
                    <PaperPlaneTilt size={16} weight="bold" />
                  )}
                  {loading ? 'Sending...' : 'Submit Request'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}