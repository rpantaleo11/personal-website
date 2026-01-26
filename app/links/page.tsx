'use client';

import { motion } from 'framer-motion';

const links = [
  { title: 'About Me', description: 'My story and what I\'m building', href: '/about' },
  { title: 'Pivotal Consulting Group', description: 'Growth marketing for B2B and e-commerce', href: 'https://www.pivotal-consulting-group.com' },
  { title: 'Behind the CMO', description: 'Newsletter for marketing leaders', href: 'https://www.behindthecmo.com' },
  { title: 'The Michigander', description: 'Local Ann Arbor newsletter', href: 'https://www.michigander.org' },
  { title: 'Real Estate Portfolio', description: '12 properties, 91 bedrooms in Ann Arbor', href: '/real-estate' },
];

export default function Links() {
  return (
    <div className="min-h-screen bg-[#223127] py-16 px-6">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="w-24 h-24 rounded-2xl mx-auto mb-5 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-cream-50/10">
            <img
              src="/unnamed.jpg"
              alt="Ryan Pantaleo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-cream-50 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Ryan Pantaleo
          </h1>
          <p className="text-cream-200 text-sm">
            I help companies buy ads. Then I buy buildings.
          </p>
        </motion.div>

        {/* Links */}
        <div className="space-y-4 mb-8">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block bg-cream-100 rounded-lg p-4 border-l-4 border-eucalyptus-500 hover:border-eucalyptus-600 hover:shadow-lg transition-all duration-200"
            >
              <h2 className="font-semibold text-charcoal-900">{link.title}</h2>
              <p className="text-sm text-charcoal-500">{link.description}</p>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="block text-center px-8 py-4 text-base font-bold text-[#223127] bg-[#F5F2EB] rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-all duration-200 mb-10"
        >
          Let's Talk →
        </motion.a>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://twitter.com/RyPantaleo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-cream-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/ryanpantaleo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-charcoal-400 hover:text-cream-50 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-cream-200/60 text-sm mt-6"
        >
          📍 Ann Arbor, Michigan
        </motion.p>
      </div>
    </div>
  );
}
