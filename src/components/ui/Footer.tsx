'use client';

import { CaretRight, Tooth } from '@phosphor-icons/react';

const footerSections = {
  Services: ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Implants', 'Emergency Care'],
  Patients: ['New Patients', 'Patient Forms', 'Insurance', 'Financing', 'FAQs'],
  Practice: ['About Us', 'Our Team', 'Testimonials', 'Gallery', 'Careers'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="container-page py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dental-500 to-emerald-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">+</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Dental<span className="text-dental-600 dark:text-dental-400">Care</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed max-w-xs">
              Modern dentistry with a gentle touch. Advanced technology, compassionate care, beautiful smiles.
            </p>
            <div className="flex gap-3 mt-6">
              {['#22c55e', '#16a34a', '#15803d', '#166534'].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-700 hover:border-dental-500 transition-colors cursor-pointer"
                  style={{ background: i === 0 ? color : 'transparent' }}
                >
                  <span className="text-xs font-bold" style={{ color: i === 0 ? '#fff' : 'rgb(var(--foreground))' }}>
                    {['T', 'I', 'L', 'F'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-zinc-500">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-dental-600 dark:hover:text-dental-400 transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link}
                      <CaretRight size={10} className="opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" weight="bold" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} DentalCare. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-500">
            <a href="#" className="hover:text-dental-600 dark:hover:text-dental-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dental-600 dark:hover:text-dental-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-dental-600 dark:hover:text-dental-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}