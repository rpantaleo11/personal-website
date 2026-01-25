'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Business() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-[#223127]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 mb-6 tracking-tight leading-[1.1]">
              Business
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed max-w-3xl">
              Two businesses. One focus: build things that compound.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCG Section */}
      <section id="pcg" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://www.pivotal-consulting-group.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-8"
            >
              <img
                src="https://www.pivotal-consulting-group.com/PivotalLogoTransparent.png"
                alt="Pivotal Consulting Group"
                className="h-32 w-auto transition-opacity hover:opacity-80"
              />
            </a>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              James and I spent years at Google managing <strong>millions in ad spend</strong> and seeing exactly how the platform works from the inside. We saw enough agencies <strong>overpromising and underdelivering</strong>. So we left and started helping companies actually use that knowledge.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              We're a growth marketing agency for B2B SaaS and e-commerce companies doing $5M-$250M.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
              For B2B, we build the paid acquisition engine that actually drives pipeline. Not vanity metrics.
            </p>
            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              For DTC, we're the team you call when you're <strong>done lighting money on fire</strong>. We obsess over incrementality, contribution margin, and figuring out which channels are actually moving the needle vs. just taking credit.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">What we actually do:</h3>
                <ul className="text-charcoal-600 space-y-2">
                  <li>• Build paid acquisition systems that scale without you babysitting them</li>
                  <li>• Fix your tracking so you actually know what's working (most companies don't)</li>
                  <li>• Optimize landing pages because driving traffic to a bad page is just expensive</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-charcoal-600 leading-relaxed mb-8">
              Shoot me a note at <a href="mailto:ryan@pivotal-consulting-group.com" className="text-eucalyptus-600 hover:text-eucalyptus-700 font-semibold">ryan@pivotal-consulting-group.com</a> or reach out below.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-eucalyptus-600 rounded-lg hover:bg-eucalyptus-700 hover:shadow-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
            >
              Email me
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Placeholder */}
      <section className="py-20 px-6 lg:px-8 bg-cream-100 border-y border-charcoal-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-charcoal-900 mb-12 tracking-tight text-center">
              What People Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Testimonial 1 - Justin Woolverton */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal-200">
                <p className="text-charcoal-600 mb-6 text-lg leading-relaxed">
                  "Ryan helped us develop a comprehensive digital marketing strategy that drove high-quality traffic which converted to offline sales. I would highly recommend Ryan to anyone looking to grow their business."
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src="/testimonials/justin-woolverton.jpg" 
                    alt="Justin Woolverton"
                    className="w-14 h-14 rounded-full object-cover bg-charcoal-200"
                  />
                  <div>
                    <p className="font-semibold text-charcoal-900">Justin Woolverton</p>
                    <p className="text-sm text-charcoal-500">Founder & CEO, Halo Top Creamery</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-charcoal-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-charcoal-600 mb-6 italic">
                  "Another testimonial here. Could be from a real estate partner, client, or colleague."
                </p>
                <div>
                  <p className="font-semibold text-charcoal-900">Name Here</p>
                  <p className="text-sm text-charcoal-500">Title, Company</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PCG Media Section */}
      <section id="pcg-media" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
              Media
            </h2>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              Newsletters I run for marketers and locals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Behind The CMO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-cream-100 rounded-xl p-8 border border-charcoal-200"
            >
              <a
                href="https://www.behindthecmo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mb-4 group"
              >
                <div className="w-12 h-12 bg-charcoal-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  B
                </div>
                <div className="text-2xl font-bold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                  Behind The CMO
                </div>
              </a>
              <p className="text-charcoal-600 mb-6">
                Insights and interviews from marketing leaders at high-growth companies. What actually works at scale.
              </p>
              <a
                href="https://www.behindthecmo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-eucalyptus-600 font-semibold hover:text-eucalyptus-700 transition-colors"
              >
                Read on Beehiiv →
              </a>
            </motion.div>

            {/* The Michigander */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-cream-100 rounded-xl p-8 border border-charcoal-200"
            >
              <a
                href="https://www.michigander.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mb-4 group"
              >
                <div className="text-4xl">🌲</div>
                <div className="text-2xl font-bold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                  The Michigander
                </div>
              </a>
              <p className="text-sm text-charcoal-500 font-medium mb-3">
                Acquired 2026
              </p>
              <p className="text-charcoal-600 mb-6">
                Local newsletter covering Ann Arbor. News, events, and stories from the community.
              </p>
              <a
                href="https://www.michigander.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-eucalyptus-600 font-semibold hover:text-eucalyptus-700 transition-colors"
              >
                Read on Substack →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-[#223127] text-charcoal-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-cream-50 mb-2 flex gap-3 justify-center md:justify-start" style={{ fontFamily: 'var(--font-fraunces)', letterSpacing: '0.02em' }}>
                <span>Ryan</span>
                <span>Pantaleo</span>
              </div>
              <p className="text-charcoal-400 text-sm">
                Ann Arbor, Michigan
              </p>
              <p className="text-charcoal-400 text-sm">
                Boston, Massachusetts
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/RyPantaleo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-400 hover:text-cream-50 transition-colors"
                aria-label="Twitter"
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
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-cream-50/10 text-center text-sm text-charcoal-500">
            <p>© 2026 Ryan Pantaleo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
