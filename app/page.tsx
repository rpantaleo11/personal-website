'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Navigation from './components/Navigation';
import { useEffect, useRef, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Counter({ end, duration = 2, delay = 0, decimals = 0, prefix = '', suffix = '' }: { end: number; duration?: number; delay?: number; decimals?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const delayTimeout = setTimeout(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = easeOutQuart * end;

        if (decimals > 0) {
          setCount(parseFloat(currentValue.toFixed(decimals)));
        } else {
          setCount(Math.floor(currentValue));
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [isInView, end, duration, delay, decimals]);

  return (
    <div ref={countRef}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : count}{suffix}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-28 px-6 lg:px-8 bg-[#223127]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Text */}
            <div className="space-y-8">
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 tracking-tight leading-[1.1]">
                  I help companies buy ads. Then I buy buildings.
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-cream-200 leading-relaxed"
                style={{ maxWidth: '50ch' }}
              >
                Quit Google. Quit Shopify.
                <br />
                Now I run a $2M+ agency and own rentals in Ann&nbsp;Arbor.
                <br />
                I write about it every week.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/writing"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#223127] bg-[#F5F2EB] rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
                >
                  Subscribe
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-cream-50 bg-transparent border-2 border-cream-50/30 rounded-lg hover:bg-cream-50/10 hover:border-cream-50/50 transition-all duration-200 hover:scale-[1.02]"
                >
                  Work With Me
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Photo */}
            <motion.div
              variants={fadeInUp}
              className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-cream-50/10"
            >
              <img
                src="/unnamed.jpg"
                alt="Ryan Pantaleo"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 lg:px-8 bg-cream-100">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
            {[
              { value: 8, label: 'Years in Tech', sublabel: '', delay: 0, decimals: 0, prefix: '', suffix: '', duration: 2.5 },
              { value: 2, label: 'Agency Revenue', sublabel: '', delay: 300, decimals: 0, prefix: '$', suffix: 'M+', duration: 2.5 },
              { value: 91, label: 'Bedrooms Rented', sublabel: '', delay: 800, decimals: 0, prefix: '', suffix: '', duration: 2.5 },
              { value: 20.3, label: 'Real Estate', sublabel: '', delay: 1300, decimals: 1, prefix: '$', suffix: 'M', duration: 1.5 },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold text-charcoal-900 mb-4">
                  <Counter end={stat.value} duration={stat.duration} delay={stat.delay} decimals={stat.decimals} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-base lg:text-lg text-charcoal-700 font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-charcoal-500">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pivotal Consulting Group',
                description:
                  'Google Ads agency I co-founded with James Murray. We run campaigns for B2B SaaS and e-commerce companies—LogicMonitor, Egnyte, Voltage Park. $1.5M in annual revenue.',
                link: '/business#pcg',
              },
              {
                title: 'Real Estate',
                description:
                  '12 multifamily properties across Ann Arbor. Mix of stabilized rentals and renovation projects. Current portfolio value: $20.3M.',
                link: '/real-estate',
              },
              {
                title: 'The Michigander',
                description:
                  'Weekly publication I founded covering Michigan startups and entrepreneurs. Stories from founders, investors, and operators building companies in the Midwest.',
                link: 'https://www.michigander.org/',
              },
            ].map((venture, index) => (
              <motion.div
                key={venture.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={venture.link}>
                  <div className="bg-white rounded-lg p-8 border-l-4 border-eucalyptus-500 hover:border-eucalyptus-600 transition-all duration-200 h-full">
                    <h3 className="text-xl font-bold text-charcoal-900 mb-3 tracking-tight">
                      {venture.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed text-[15px] mb-6">
                      {venture.description}
                    </p>
                    <div className="inline-flex items-center text-eucalyptus-600 font-semibold text-sm">
                      Learn more →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Writing Section */}
      <section className="py-32 px-6 lg:px-8 bg-cream-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-4 tracking-tight">
              Recent Writing
            </h2>
            <p className="text-xl text-charcoal-600">
              Weekly insights on building businesses and investing in real estate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: 'Property #12: Why I\'m still buying in 2026',
                date: 'Jan 18, 2026',
                preview: 'This week I closed on 311 W William, my 12th property in Ann Arbor. While most investors are sitting on the sidelines waiting for rates to drop, I\'m finding opportunities in buildings other buyers are passing on...',
              },
              {
                title: 'Running a $1.5M Google Ads agency with 2 people',
                date: 'Jan 11, 2026',
                preview: 'PCG generates $1.5M annually. Just me and James. No account managers, no project managers, no operations team. Here\'s how we built an agency that runs lean and stays profitable...',
              },
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href="/writing">
                  <div className="bg-white rounded-lg p-8 border-l-4 border-eucalyptus-500 hover:border-eucalyptus-600 transition-all duration-200 h-full">
                    <div className="text-sm text-charcoal-500 font-medium mb-3">
                      {post.date}
                    </div>
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4 tracking-tight">
                      {post.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed mb-4">
                      {post.preview}
                    </p>
                    <div className="inline-flex items-center text-eucalyptus-600 font-semibold text-sm">
                      Read more →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/writing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#223127] bg-[#F5F2EB] rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-all duration-200 hover:shadow-lg"
            >
              View All Writing
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6 tracking-tight">
            Newsletter
          </h2>
          <p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I write about building PCG, buying real estate in Ann Arbor, and what I'm learning along the way.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-lg text-charcoal-900 bg-cream-100 border border-charcoal-300 focus:outline-none focus:ring-2 focus:ring-eucalyptus-500 focus:border-eucalyptus-500 text-base"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-4 bg-[#F5F2EB] text-[#223127] font-bold rounded-lg hover:bg-[#EBE7DD] hover:shadow-xl transition-colors shadow-lg whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </form>
        </motion.div>
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
            </div>

            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com/RyPantaleo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal-400 hover:text-cream-50 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
