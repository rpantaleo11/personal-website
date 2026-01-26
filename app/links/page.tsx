'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  {
    title: 'About Me',
    description: 'My story, timeline, and what I\'m building',
    href: '/about',
    internal: true,
  },
  {
    title: 'Pivotal Consulting Group',
    description: 'Growth marketing for B2B and e-commerce',
    href: 'https://www.pivotal-consulting-group.com',
    internal: false,
  },
  {
    title: 'Behind the CMO',
    description: 'Newsletter for marketing leaders',
    href: 'https://www.behindthecmo.com',
    internal: false,
  },
  {
    title: 'The Michigander',
    description: 'Local Ann Arbor newsletter',
    href: 'https://www.michigander.org',
    internal: false,
  },
  {
    title: 'Real Estate Portfolio',
    description: '12 properties, 91 bedrooms in Ann Arbor',
    href: '/real-estate',
    internal: true,
  },
];

export default function Links() {
  return (
    <div className="min-h-screen bg-[#223127] py-12 px-6">
      <div className="max-w-md mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <img
            src="/unnamed.jpg"
            alt="Ryan Pantaleo"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cream-50/20 object-cover"
          />
          <h1 className="text-2xl font-bold text-cream-50 mb-2" style={{ fontFamily: 'var(--font-fraunces)' }}>
            Ryan Pantaleo
          </h1>
          <p className="text-cream-200 text-sm">
            I help companies buy ads. Then I buy buildings.
          </p>
        </motion.div>

        {/* Links */}
        <div className="space-y-4 mb-10">
          {links.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {link.internal ? (
                <Link
                  href={link.href}
                  className="block bg-cream-50 hover:bg-cream-100 rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <h2 className="font-semibold text-charcoal-900">{link.title}</h2>
                  <p className="text-sm text-charcoal-500">{link.description}</p>
                </Link>
              ) : (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cream-50 hover:bg-cream-100 rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <h2 className="font-semibold text-charcoal-900">{link.title}</h2>
                  <p className="text-sm text-charcoal-500">{link.description}</p>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-10"
        >
          <Link
            href="/contact"
            className="block bg-eucalyptus-600 hover:bg-eucalyptus-700 text-white text-center font-bold rounded-xl p-4 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            Let's Talk →
          </Link>
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com/RyPantaleo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-cream-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ryanpantaleo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-200 hover:text-cream-50 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="text-cream-200/60 text-sm">
            📍 Ann Arbor, Michigan
          </p>
        </motion.div>
      </div>
    </div>
  );
}
