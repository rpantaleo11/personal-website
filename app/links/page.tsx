'use client';

import { motion } from 'framer-motion';

const links = [
  { title: 'Personal Site', description: 'About me, writing, and what I\'m building', href: '/' },
  { title: 'Pivotal Consulting Group', description: 'Marketing consulting for growth-focused companies', href: 'https://www.pivotal-consulting-group.com' },
  { title: 'Behind the CMO', description: 'Newsletter for marketing leaders', href: 'https://www.behindthecmo.com' },
  { title: 'The Michigander', description: 'Local Ann Arbor newsletter', href: 'https://www.michigander.org' },
  { title: 'Real Estate Portfolio', description: '12 properties, 91 bedrooms in Ann Arbor', href: '/real-estate' },
];

export default function Links() {
  return (
    <div className="min-h-screen bg-[#223127] flex items-center justify-center py-16 px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-cream-50 tracking-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
            RYAN PANTALEO
          </h1>
          <p className="text-cream-200/70 text-sm mt-2">
            I help companies buy ads. Then I buy buildings.
          </p>
        </motion.div>

        {/* Links */}
        <div className="space-y-3 mb-6">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              className="block py-3 px-4 rounded-lg bg-cream-50/5 hover:bg-cream-50/10 border border-cream-50/10 transition-colors"
            >
              <div className="text-cream-50 text-sm font-medium">{link.title}</div>
              <div className="text-cream-200/50 text-xs mt-0.5">{link.description}</div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="/contact"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="block text-center py-3 px-4 rounded-lg bg-cream-50 hover:bg-cream-100 text-charcoal-900 text-sm font-semibold transition-colors mb-8"
        >
          Let's Talk →
        </motion.a>

        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="space-y-2 text-sm"
        >
          <div className="text-cream-200/50">
            <span className="text-cream-200/30">/location</span>{' '}
            <span>ann arbor mi</span>
          </div>
          <div className="text-cream-200/50">
            <span className="text-cream-200/30">/twitter</span>{' '}
            <a href="https://twitter.com/RyPantaleo" target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 transition-colors">
              @RyPantaleo
            </a>
          </div>
          <div className="text-cream-200/50">
            <span className="text-cream-200/30">/linkedin</span>{' '}
            <a href="https://linkedin.com/in/ryanpantaleo" target="_blank" rel="noopener noreferrer" className="hover:text-cream-50 transition-colors">
              ryanpantaleo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
