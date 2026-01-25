'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Writing() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-[#223127] border-b border-cream-50/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 mb-6 tracking-tight leading-[1.1]">
              Writing
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed max-w-3xl">
              Sharing what I'm learning about entrepreneurship, real estate investing, and building businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Newsletter Section */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-charcoal-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-charcoal-900 tracking-tight mb-8">
              Personal Newsletter
            </h2>

            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              Weekly insights on entrepreneurship, real estate investing, and building wealth. Written from Ann Arbor and Boston, read by founders and investors across the country.
            </p>

            {/* Past Issues */}
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Jan 18, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Property #12: Why I'm still buying in 2026
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  This week I closed on 311 W William. Everyone's waiting for the perfect deal. Here's what I've learned after 12 properties about timing, opportunity cost, and actually building wealth.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Jan 11, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  PCG hit $1.5M in revenue. Here's what we did wrong.
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Most people share their wins. I'm going to share what almost killed our agency—and the three decisions that saved it.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Jan 4, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  The $100M plan: Breaking it down by age 50
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  I'm 32. I want to hit $100M net worth by 50. Here's the actual math on how I'm going to get there through PCG and real estate.
                </p>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-cream-50 rounded-xl p-10 shadow-lg border border-charcoal-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4 text-center">
                Get new essays
              </h3>
              <p className="text-charcoal-600 text-center mb-6">
                Weekly on building businesses and buying real estate
              </p>
              <form className="space-y-4 max-w-md mx-auto">
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-eucalyptus-600 focus:ring-2 focus:ring-eucalyptus-100"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-[#F5F2EB] text-[#223127] font-bold rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-colors"
                >
                  Subscribe for free
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Michigander Section */}
      <section className="py-20 px-6 lg:px-8 bg-cream-200 border-b border-charcoal-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">📰</div>
              <h2 className="text-4xl font-bold text-charcoal-900 tracking-tight">
                The Michigander
              </h2>
            </div>

            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              Covering entrepreneurship, startups, and business culture in Michigan. Stories from founders, investors, and operators building the Midwest tech ecosystem.
            </p>

            {/* Recent Stories */}
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Dec 29, 2025</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Well, Goodbye, Ann Arbor. It's Been A Joy.
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  A farewell piece marking the end of The Michigander's coverage of the Ann Arbor community.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Dec 22, 2025</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Bev's Bagels To Open Location On Liberty Street Next Year
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  The popular bagel establishment plans to expand with a new location on Liberty Street in 2026.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Dec 15, 2025</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  L.L. Bean Announces Ann Arbor Location Coming Fall 2026
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  The New England-based retailer will open a store in Ann Arbor during the fall season of 2026.
                </p>
              </div>
            </div>

            {/* Read More CTA */}
            <div className="bg-cream-50 rounded-xl p-10 shadow-lg text-center border border-charcoal-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                Read full stories on The Michigander
              </h3>
              <p className="text-charcoal-600 mb-6">
                In-depth coverage of Michigan's tech and startup ecosystem
              </p>
              <a
                href="https://www.michigander.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#223127] bg-[#F5F2EB] rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-all duration-200 hover:shadow-lg"
              >
                Visit The Michigander →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Behind the CMO Section */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-charcoal-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="text-4xl">🎙️</div>
              <h2 className="text-4xl font-bold text-charcoal-900 tracking-tight">
                Behind the CMO
              </h2>
            </div>

            <p className="text-lg text-charcoal-600 mb-12 leading-relaxed">
              A podcast and newsletter exploring the strategies, tactics, and stories behind successful marketing leaders at high-growth companies.
            </p>

            {/* Recent Episodes */}
            <div className="space-y-8 mb-12">
              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Episode 12 • Jan 15, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  How Notion's CMO scaled from $0 to $10B without paid ads
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  Camille Ricketts breaks down Notion's community-led growth strategy, why they avoided traditional demand gen, and how they built a product people can't stop talking about.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Episode 11 • Jan 8, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  Inside Rippling's marketing machine: 10,000% growth in 3 years
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  We sit down with Rippling's head of growth to discuss how they scaled from startup to unicorn, their unconventional approach to brand building, and why they're investing heavily in content.
                </p>
              </div>

              <div className="border-l-4 border-charcoal-300 pl-6 hover:border-eucalyptus-500 transition-colors">
                <div className="text-sm text-charcoal-500 mb-2">Episode 10 • Jan 1, 2026</div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">
                  The Shopify playbook: Building a $100B brand
                </h3>
                <p className="text-charcoal-600 leading-relaxed">
                  What does it take to build one of the world's most valuable brands? Shopify's former CMO shares the framework that took them from unknown to industry leader.
                </p>
              </div>
            </div>

            {/* Subscribe Form */}
            <div className="bg-cream-50 rounded-xl p-10 shadow-lg border border-charcoal-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4 text-center">
                Subscribe to Behind the CMO
              </h3>
              <p className="text-charcoal-600 text-center mb-6">
                Join marketing leaders from leading companies
              </p>
              <form className="space-y-4 max-w-md mx-auto">
                <div>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-eucalyptus-600 focus:ring-2 focus:ring-eucalyptus-100"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-[#F5F2EB] text-[#223127] font-bold rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-colors"
                >
                  Subscribe for free
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 bg-[#223127] text-charcoal-400 border-t border-cream-50/10">
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

          <div className="mt-12 pt-8 border-t border-charcoal-300 text-center text-sm text-charcoal-500">
            <p>© 2026 Ryan Pantaleo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
