'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const timelineEvents = [
  {
    year: '2015',
    title: 'Joined Google',
    description: 'Started leading sales teams at Google, managing relationships with major advertisers and developing expertise in digital advertising.',
  },
  {
    year: '2018',
    title: 'First Rental Property',
    description: 'Bought my first rental property in Ann Arbor\'s Kerrytown neighborhood. The start of building a long-term real estate portfolio.',
  },
  {
    year: '2020',
    title: 'Moved to Shopify',
    description: 'Joined Shopify to continue leading sales teams and expanding experience in the e-commerce ecosystem.',
  },
  {
    year: '2021',
    title: 'Co-founded PCG',
    description: 'Left Shopify to co-found Pivotal Consulting Group with James Murray, leveraging our combined Google experience to build a Google Ads agency.',
  },
  {
    year: '2022-2024',
    title: 'Scaled Real Estate Portfolio',
    description: 'Acquired additional properties across Ann Arbor\'s premier neighborhoods, reaching 12 properties worth ~$7.5M.',
  },
  {
    year: '2024',
    title: 'Married Jess',
    description: 'Got married on September 14, 2024. Living in Old West Side of Ann Arbor.',
  },
  {
    year: '2026',
    title: 'First Baby',
    description: 'Expecting our first baby in June 2026.',
  },
  {
    year: 'Future',
    title: 'Long-term Vision',
    description: 'Building toward $100M net worth by age 50 through PCG, real estate investing, and building TruckerFiling (SaaS product targeting $10K MRR by June 2026).',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-[#223127]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 mb-6 tracking-tight leading-[1.1]">
              About
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed max-w-3xl">
              My journey from Google to building businesses and investing in real estate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
              <p className="text-2xl font-semibold text-charcoal-900">
                Hey, I'm Ryan.
              </p>
              <p>
                However you got here, thanks for being here.
              </p>
              <p>
                I was born and raised in Boston but live in Ann Arbor, Michigan.
              </p>
              <p>
                I run <a href="https://www.pivotal-consulting-group.com" target="_blank" rel="noopener noreferrer" className="text-eucalyptus-600 hover:text-eucalyptus-700 font-semibold underline decoration-eucalyptus-500/30 hover:decoration-eucalyptus-600 transition-colors">Pivotal Consulting Group</a>, a growth marketing agency I co-founded with my business partner James. Our global team manages paid marketing for enterprise and growth-stage SaaS companies. Before starting PCG, I spent 9+ years at Google and Shopify leading sales teams—where I learned how to sell, how to manage, and how to not panic when things break. It was a good run and I'm grateful for starting my career at Google, but striking out on my own was the best decision I've made.
              </p>
              <p>
                I also invest in real estate and have been doing so since 2017. Most of the properties I own are student rentals in the downtown Ann Arbor area. It's been a journey—I've been in court, I've been sued, I've had contractor nightmares. But I'm grateful for all of it. I focus on value-add properties in prime locations and plan to hold for the long term, where the compounding magic really happens.
              </p>
              <p>
                I run a free weekly newsletter called <a href="https://www.michigander.org" target="_blank" rel="noopener noreferrer" className="text-eucalyptus-600 hover:text-eucalyptus-700 font-semibold underline decoration-eucalyptus-500/30 hover:decoration-eucalyptus-600 transition-colors">The Michigander</a>. Our agency acquired it in 2026 and I've enjoyed sharing weekly updates with the Ann Arbor community. I also write a personal newsletter where I share thoughts, learnings, and the trials and tribulations of building businesses.
              </p>
              <p>
                I live in Ann Arbor with my wife Jess and our dog Louie.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-8 bg-cream-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-charcoal-900 mb-16 tracking-tight text-center">
              The Journey
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-charcoal-300" />

              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex items-start ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:gap-16`}
                  >
                    {/* Year badge */}
                    <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 bg-eucalyptus-600 border-4 border-cream-200 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-cream-50 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className={`flex-1 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                      <div className="inline-block px-4 py-1 bg-eucalyptus-600 text-cream-50 text-sm font-bold rounded-full mb-4">
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold text-charcoal-900 mb-3 tracking-tight">
                        {event.title}
                      </h3>
                      <p className="text-charcoal-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
