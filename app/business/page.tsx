'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const clients = [
  {
    name: 'LogicMonitor',
    logo: 'https://www.logicmonitor.com/wp-content/uploads/2025/03/lm-logo-color.png',
    website: 'https://www.logicmonitor.com'
  },
  {
    name: 'Egnyte',
    logo: 'https://www.egnyte.com/themes/custom/egnyte/logo-light.svg',
    website: 'https://www.egnyte.com',
    invertOnWhite: true
  },
  {
    name: 'CoachRX',
    logo: 'https://images.squarespace-cdn.com/content/v1/63b49df75f1a7c36531011cd/9c39f3bd-6c1c-4d8f-a0f2-04c75f1d8738/OPEX_CoachRx_Primary_Logo__WhiteLightBlue.png',
    website: 'https://www.coachrx.app',
    invertOnWhite: true
  },
  {
    name: 'GoatFoods',
    logo: '',
    website: 'https://goatfoods.com'
  },
  {
    name: 'Voltage Park',
    logo: 'https://cdn.prod.website-files.com/66bf3d007a95625ff7d81868/66d945cef5a2ff5ed067638c_Scaled%20up%2010x%20(2)%201.avif',
    website: 'https://voltagepark.com'
  },
  {
    name: 'BOTS',
    logo: 'https://secureticketpurchase.com/wp-content/uploads/2018/06/logo-1.png',
    website: 'https://secureticketpurchase.com'
  },
  {
    name: 'AtoB',
    logo: 'https://cdn.prod.website-files.com/62c496dceca674e60a6d1ecd/68ec0bad02fa4f6f0f722814_logos.svg',
    website: 'https://www.atob.com'
  },
  {
    name: 'ABL Funding',
    logo: 'https://www.ablfunding.com/wp-content/uploads/2025/02/Asset-Based-Lending-Logo.svg',
    website: 'https://www.ablfunding.com'
  },
  {
    name: 'Shopify',
    logo: 'https://cdn.shopify.com/b/shopify-brochure2-assets/d9340911ca8c679b148dd4a205ad2ffa.svg',
    website: 'https://www.shopify.com'
  },
  {
    name: 'Berry Street',
    logo: '',
    website: 'https://www.berrystreet.co'
  },
];

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
              Building and sharing what I learn from running a growth marketing agency and investing in real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCG Section */}
      <section id="pcg" className="py-20 px-6 lg:px-8 bg-white">
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

      {/* PCG Media Section */}
      <section id="pcg-media" className="py-20 px-6 lg:px-8 bg-cream-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
              PCG Media
            </h2>
            <p className="text-xl text-charcoal-600 leading-relaxed">
              Our collection of newsletters for marketing leaders and local communities.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* BehindTheCMO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-charcoal-200 shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <a
                    href="https://www.behindthecmo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mb-6 group"
                  >
                    <div className="w-12 h-12 bg-charcoal-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      B
                    </div>
                    <div className="text-3xl font-bold text-charcoal-900 group-hover:text-charcoal-700 transition-colors">
                      BehindTheCMO
                    </div>
                  </a>
                  <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                    Inside stories and insights from top marketing leaders. Real talk about what works, what doesn't, and what it actually takes to run marketing at scale.
                  </p>

                  {/* Sample Posts */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wide">Recent Posts</h4>
                    <div className="space-y-3">
                      <a href="https://www.behindthecmo.com" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          How Notion's CMO built a $10B brand with zero paid ads
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">The playbook for product-led growth marketing</div>
                      </a>
                      <a href="https://www.behindthecmo.com" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          Why most attribution models are lying to you
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">What actually drives B2B pipeline</div>
                      </a>
                      <a href="https://www.behindthecmo.com" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          The death of demand gen (and what's replacing it)
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">Lessons from Gong, HubSpot, and Snowflake</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:ml-8 lg:min-w-[280px]">
                  <div className="bg-cream-100 rounded-lg p-4 border border-charcoal-200">
                    <form action="https://www.behindthecmo.com" method="get" target="_blank" className="space-y-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal-300 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 text-sm"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 text-sm font-bold text-white bg-eucalyptus-600 rounded-lg hover:bg-eucalyptus-700 hover:shadow-lg transition-all duration-200"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Michigander */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-charcoal-200 shadow-md"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <a
                    href="https://www.michigander.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mb-4 group"
                  >
                    <div className="text-4xl">🌲</div>
                    <div className="text-3xl font-bold text-charcoal-900 group-hover:text-charcoal-700 transition-colors">
                      The Michigander
                    </div>
                  </a>
                  <p className="text-sm text-charcoal-500 font-semibold mb-4">
                    Acquired by PCG in 2026
                  </p>
                  <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
                    Stories from Ann Arbor and Southeast Michigan. Covering local entrepreneurship, startups, real estate, and the people building the community.
                  </p>

                  {/* Sample Posts */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-charcoal-500 uppercase tracking-wide">Recent Posts</h4>
                    <div className="space-y-3">
                      <a href="https://www.michigander.org/p/well-goodbye-ann-arbor-it-s-been-a-joy" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          Well, Goodbye, Ann Arbor. It's Been A Joy.
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">December 29, 2025</div>
                      </a>
                      <a href="https://www.michigander.org/p/bev-s-bagels-to-open-location-on-liberty-street-next-year" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          Bev's Bagels To Open Location On Liberty Street Next Year
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">December 22, 2025</div>
                      </a>
                      <a href="https://www.michigander.org/p/l-l-bean-announces-ann-arbor-location-coming-fall-2026" target="_blank" rel="noopener noreferrer" className="block group">
                        <div className="text-base font-semibold text-charcoal-900 group-hover:text-eucalyptus-600 transition-colors">
                          L.L. Bean Announces Ann Arbor Location Coming Fall 2026
                        </div>
                        <div className="text-sm text-charcoal-500 mt-1">December 15, 2025</div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="lg:ml-8 lg:min-w-[280px]">
                  <div className="bg-cream-100 rounded-lg p-4 border border-charcoal-200">
                    <form action="https://www.michigander.org" method="get" target="_blank" className="space-y-3">
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg bg-white border border-charcoal-300 text-charcoal-900 placeholder-charcoal-500 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 text-sm"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 text-sm font-bold text-white bg-eucalyptus-600 rounded-lg hover:bg-eucalyptus-700 hover:shadow-lg transition-all duration-200"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
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
                href="https://twitter.com/ryanpantaleo"
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
