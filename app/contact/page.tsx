'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // For now, just open mailto - can be replaced with actual form handler
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:ryan@pivotal-consulting-group.com?subject=${encodeURIComponent(`[Website] ${subject}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoLink;
    
    setFormStatus('sent');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-[#223127]">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 mb-6 tracking-tight leading-[1.1]">
              Get in Touch
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed max-w-3xl">
              Want to work together, invest together, or just say hi? I read every message.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-charcoal-900 mb-6 tracking-tight">
                What I can help with
              </h2>
              
              <div className="space-y-6 text-charcoal-600">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📈</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Marketing & Growth</h3>
                    <p className="text-sm">Need help scaling your business? That's what PCG does.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🏠</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Real Estate in Ann Arbor</h3>
                    <p className="text-sm">Looking to buy, sell, or invest in Ann Arbor? Happy to chat.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Partnerships & Deals</h3>
                    <p className="text-sm">Always interested in interesting opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-eucalyptus-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal-900 mb-1">Just Saying Hi</h3>
                    <p className="text-sm">I like meeting people building cool stuff. Don't be a stranger.</p>
                  </div>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="mt-12 pt-8 border-t border-charcoal-200">
                <h3 className="font-semibold text-charcoal-900 mb-4">Or reach out directly</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:ryan@pivotal-consulting-group.com" 
                    className="flex items-center gap-3 text-charcoal-600 hover:text-eucalyptus-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    ryan@pivotal-consulting-group.com
                  </a>
                  <a 
                    href="https://twitter.com/RyPantaleo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal-600 hover:text-eucalyptus-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    @RyPantaleo
                  </a>
                  <a 
                    href="https://linkedin.com/in/ryanpantaleo" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal-600 hover:text-eucalyptus-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal-700 mb-2">
                    What's this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 transition-colors"
                  >
                    <option value="">Select one...</option>
                    <option value="Marketing / PCG">Marketing / Working with PCG</option>
                    <option value="Real Estate">Real Estate in Ann Arbor</option>
                    <option value="Partnership">Partnership / Business Opportunity</option>
                    <option value="Newsletter">Newsletter / Content</option>
                    <option value="Other">Just saying hi</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-cream-100 border border-charcoal-300 text-charcoal-900 placeholder-charcoal-400 focus:outline-none focus:border-eucalyptus-500 focus:ring-2 focus:ring-eucalyptus-200 transition-colors resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full px-8 py-4 bg-eucalyptus-600 text-white font-bold rounded-lg hover:bg-eucalyptus-700 hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'sending' ? 'Opening email...' : formStatus === 'sent' ? 'Email opened!' : 'Send Message'}
                </motion.button>

                <p className="text-sm text-charcoal-500 text-center">
                  This will open your email client. I'll get back to you within 48 hours.
                </p>
              </form>
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
