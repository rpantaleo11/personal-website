'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const currentHoldings = [
  { address: '603 E Ann', neighborhood: 'Kerrytown', units: '6', bedrooms: '6', type: 'Long-term rental', acquisitionDate: '2021', purchasePrice: '$504K', value: '$2.2M', acquisitionMethod: 'Off-Market', renovationDate: '2022', image: '/properties/603-e-ann.jpg' },
  { address: 'The White House', neighborhood: 'Kerrytown', units: '2', bedrooms: '10', type: 'Long-term rental', acquisitionDate: '2022', purchasePrice: '$200K', value: '$2.2M', acquisitionMethod: 'Off-Market', renovationDate: '2023', image: '/properties/511-e-ann.jpg' },
  { address: "Ben's House", neighborhood: 'Kerrytown', units: '2', bedrooms: '8', type: 'Long-term rental', acquisitionDate: '2023', purchasePrice: '$470K', value: '$1.55M', acquisitionMethod: 'Off-Market', renovationDate: '2024', image: '' },
  { address: 'Big Blue House', neighborhood: 'Kerrytown', units: '7', bedrooms: '15', type: 'Long-term rental', acquisitionDate: '2024', purchasePrice: '$2.2M', value: '$3.2M', acquisitionMethod: 'Off-Market', renovationDate: '2026', image: '' },
  { address: '526 Detroit', neighborhood: 'Kerrytown', units: '2', bedrooms: '5', type: 'Long-term rental', acquisitionDate: '2023', purchasePrice: '$350K', value: '$1.25M', acquisitionMethod: 'Off-Market', renovationDate: '2024', image: '' },
  { address: '716 W Jefferson', neighborhood: 'Old West Side', units: '2', bedrooms: '3', type: 'Long-term rental', acquisitionDate: '2020', purchasePrice: '$234K', value: '$650K', acquisitionMethod: 'Off-Market', renovationDate: '2020', image: '' },
  { address: '615 W Jefferson', neighborhood: 'Old West Side', units: '3', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '2025', purchasePrice: '$888K', value: '$1.23M', acquisitionMethod: 'MLS', renovationDate: '2025', image: '/properties/615-w-jefferson.png' },
  { address: 'Fine Townhomes', neighborhood: 'Downtown', units: '4', bedrooms: '20', type: 'Long-term rental', acquisitionDate: '2025', purchasePrice: '$950K', value: '$4M', acquisitionMethod: 'MLS', renovationDate: '2026', image: '' },
  { address: 'The Ledger', neighborhood: 'Kerrytown', units: '1', bedrooms: '4', type: 'Short-term rental', acquisitionDate: '2025', purchasePrice: '$800K', value: '$900K', acquisitionMethod: 'Off-Market', renovationDate: '2026', image: '' },
  { address: '311 W William', neighborhood: 'Old West Side', units: '2', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '2026', purchasePrice: '$650K', value: '$650K', acquisitionMethod: 'Off-Market', renovationDate: '2027', image: '' },
  { address: '500 Catherine', neighborhood: 'Old West Side', units: '4', bedrooms: '8', type: 'Long-term rental', acquisitionDate: '2025', purchasePrice: '$1.23M', value: '$1.24M', acquisitionMethod: 'Off-Market', renovationDate: 'TBD', image: '' },
  { address: '600 Catherine', neighborhood: 'Old West Side', units: '3', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '2024', purchasePrice: '$1M', value: '$1.1M', acquisitionMethod: 'Off-Market', renovationDate: 'TBD', image: '' },
];

const pastHoldings = [
  { address: '2130 Washtenaw', neighborhood: 'Burns Park', units: '2', bedrooms: '6', type: 'Long-term rental', acquisitionDate: '2018', purchasePrice: '$387K', salePrice: '$540K', saleDate: '2021', is1031: false, image: '' },
  { address: '2134 Washtenaw', neighborhood: 'Burns Park', units: '2', bedrooms: '6', type: 'Long-term rental', acquisitionDate: '2017', purchasePrice: '$358K', salePrice: '$540K', saleDate: '2021', is1031: false, image: '' },
  { address: '1218 W Huron', neighborhood: 'West Side', units: '2', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '', purchasePrice: '$320K', salePrice: '$575K', saleDate: '', is1031: true, image: '' },
  { address: '1300 W Huron', neighborhood: 'West Side', units: '2', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '', purchasePrice: '$280K', salePrice: '$575K', saleDate: '', is1031: true, image: '' },
  { address: '1615 Peach St', neighborhood: 'Northside', units: '3', bedrooms: '5', type: 'Long-term rental', acquisitionDate: '', purchasePrice: '$425K', salePrice: '$870K', saleDate: '', is1031: true, image: '' },
  { address: '819 W Washington', neighborhood: 'Old West Side', units: '2', bedrooms: '2', type: 'Long-term rental', acquisitionDate: '', purchasePrice: '$325K', salePrice: '$480K', saleDate: '', is1031: true, image: '' },
  { address: '523 W Washington St', neighborhood: '', units: '2', bedrooms: '4', type: 'Long-term rental', acquisitionDate: '', purchasePrice: '$525K', salePrice: '$685K', saleDate: '', is1031: true, image: '' },
];

export default function RealEstate() {
  const [activeTab, setActiveTab] = useState<'investing' | 'advisor'>('investing');
  const [sortBy, setSortBy] = useState<'value' | 'date'>('value');
  const [enlargedImage, setEnlargedImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setEnlargedImage(null);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const parsePrice = (price: string) => {
    if (!price) return 0;
    const cleaned = price.replace(/[$KM,]/g, '');
    const num = parseFloat(cleaned);
    if (price.includes('M')) return num * 1000000;
    if (price.includes('K')) return num * 1000;
    return num;
  };

  const sortProperties = (properties: typeof currentHoldings) => {
    const sorted = [...properties];

    if (sortBy === 'value') {
      return sorted.sort((a, b) => parsePrice(b.value) - parsePrice(a.value));
    } else {
      return sorted.sort((a, b) => {
        const dateA = a.acquisitionDate ? parseInt(a.acquisitionDate) : 0;
        const dateB = b.acquisitionDate ? parseInt(b.acquisitionDate) : 0;
        return dateB - dateA;
      });
    }
  };

  const sortedCurrentHoldings = sortProperties(currentHoldings);

  return (
    <div className="min-h-screen bg-cream-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-[#223127] border-b border-cream-50/10">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeIn}>
            <h1 className="text-5xl lg:text-6xl font-bold text-cream-50 mb-6 tracking-tight leading-[1.1]">
              Real Estate
            </h1>
            <p className="text-xl text-cream-200 leading-relaxed max-w-3xl">
              Building a long-term rental portfolio in Ann Arbor's premier neighborhoods.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 px-6 lg:px-8 bg-white border-b border-charcoal-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('investing')}
              className={`text-lg font-semibold pb-4 border-b-2 transition-colors ${
                activeTab === 'investing'
                  ? 'text-charcoal-900 border-charcoal-900'
                  : 'text-charcoal-500 border-transparent hover:text-charcoal-600'
              }`}
            >
              Investing
            </button>
            <button
              onClick={() => setActiveTab('advisor')}
              className={`text-lg font-semibold pb-4 border-b-2 transition-colors ${
                activeTab === 'advisor'
                  ? 'text-charcoal-900 border-charcoal-900'
                  : 'text-charcoal-500 border-transparent hover:text-charcoal-600'
              }`}
            >
              Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      {activeTab === 'investing' && (
        <>
          {/* Story Section */}
          <section className="py-20 px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-charcoal-900 mb-8 tracking-tight">
                  The Journey
                </h2>
                <div className="space-y-6 text-lg text-charcoal-600 leading-relaxed">
                  <p>
                    91 bedrooms. I rent out 91 bedrooms.
                  </p>
                  <p>
                    It started with one duplex in 2017 that I bought while everyone at Google thought I was crazy. Now it's 12 buildings across Ann Arbor. ~$20M in assets. All near campus. All rented to students who need a place to live.
                  </p>
                  <p>
                    I don't flip. I don't do short-term rentals (mostly). I buy buildings that need work, fix them right, and hold them forever. Boring strategy. Boring returns. Exactly how I like it.
                  </p>
                  <p>
                    Real estate gave me the confidence to quit my job, the cash flow to take risks, and the leverage to build everything else. It's not the flashiest part of what I do. But it's the part that makes everything else possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Current Holdings Section */}
          <section className="py-20 px-6 lg:px-8 bg-cream-200 border-y border-charcoal-200">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-4xl font-bold text-charcoal-900 mb-2 tracking-tight">
                      Current Holdings
                    </h2>
                    <p className="text-xl text-charcoal-600">
                      12 properties, ~$20.3M total value
                    </p>
                  </div>
                  <div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="px-4 py-2 bg-cream-50 text-charcoal-900 rounded-lg border border-charcoal-300 focus:outline-none focus:ring-2 focus:ring-eucalyptus-600 focus:border-transparent font-medium text-sm"
                    >
                      <option value="value">Sort by Value</option>
                      <option value="date">Sort by Date</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sortedCurrentHoldings.map((property, index) => (
                    <motion.div
                      key={property.address}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-cream-50 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300 border border-charcoal-200 hover:border-eucalyptus-500"
                    >
                      {/* Image placeholder */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-charcoal-700 via-charcoal-800 to-charcoal-900 flex items-center justify-center border-b border-charcoal-200">
                        {property.image ? (
                          <img
                            src={property.image}
                            alt={property.address}
                            onClick={() => setEnlargedImage({ src: property.image, alt: property.address })}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <svg
                              className="w-12 h-12 mx-auto mb-2 text-white/30"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <p className="text-xs text-white/50 font-medium">Add property photo</p>
                          </div>
                        )}
                      </div>

                      {/* Property details */}
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                            {property.address}
                          </h3>
                          <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
                            property.type === 'Short-term rental'
                              ? 'bg-eucalyptus-100 text-eucalyptus-700'
                              : 'bg-cream-200 text-charcoal-800'
                          }`}>
                            {property.type === 'Short-term rental' ? 'STR' : 'LTR'}
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-charcoal-600">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>{property.neighborhood}</span>
                          </div>
                          {property.units && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span>{property.units} {parseInt(property.units) === 1 ? 'unit' : 'units'}</span>
                            </div>
                          )}
                          {property.bedrooms && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              <span>{property.bedrooms} bedrooms total</span>
                            </div>
                          )}
                          {property.acquisitionDate && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Acquired: {property.acquisitionDate}</span>
                            </div>
                          )}
                          {property.renovationDate && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                              </svg>
                              <span>Renovated: {property.renovationDate}</span>
                            </div>
                          )}
                          {property.purchasePrice && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Purchase: {property.purchasePrice}</span>
                            </div>
                          )}
                          {property.value && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <span>Value: {property.value}</span>
                            </div>
                          )}
                          {property.acquisitionMethod && (
                            <div className="mt-3 pt-3 border-t border-charcoal-200">
                              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                                property.acquisitionMethod === 'Off-Market'
                                  ? 'bg-eucalyptus-100 text-eucalyptus-700'
                                  : 'bg-cream-200 text-charcoal-800'
                              }`}>
                                {property.acquisitionMethod === 'Off-Market' ? 'Off-Market Deal' : 'MLS Purchase'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Past Holdings Section */}
          <section className="py-20 px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold text-charcoal-900 mb-4 tracking-tight">
                  Past Holdings (Sold)
                </h2>
                <p className="text-xl text-charcoal-600 mb-12">
                  7 properties sold
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pastHoldings.map((property, index) => (
                    <motion.div
                      key={property.address}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-cream-50 rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition-shadow duration-300 border border-charcoal-200 hover:border-eucalyptus-500"
                    >
                      {/* Image placeholder */}
                      <div className="relative aspect-[4/3] bg-gradient-to-br from-cream-300 via-cream-400 to-cream-500 flex items-center justify-center border-b border-charcoal-200">
                        {property.image ? (
                          <img
                            src={property.image}
                            alt={property.address}
                            onClick={() => setEnlargedImage({ src: property.image, alt: property.address })}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                          />
                        ) : (
                          <div className="text-center p-6">
                            <svg
                              className="w-12 h-12 mx-auto mb-2 text-white/30"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                              />
                            </svg>
                            <p className="text-xs text-white/50 font-medium">Add property photo</p>
                          </div>
                        )}
                      </div>

                      {/* Property details */}
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-bold text-charcoal-900 tracking-tight">
                            {property.address}
                          </h3>
                          <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full whitespace-nowrap bg-cream-200 text-charcoal-800">
                            SOLD
                          </span>
                        </div>
                        <div className="space-y-2 text-sm text-charcoal-600">
                          {property.neighborhood && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{property.neighborhood}</span>
                            </div>
                          )}
                          {property.units && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                              <span>{property.units} {parseInt(property.units) === 1 ? 'unit' : 'units'}</span>
                            </div>
                          )}
                          {property.bedrooms && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                              <span>{property.bedrooms} bedrooms total</span>
                            </div>
                          )}
                          {property.acquisitionDate && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span>Acquired: {property.acquisitionDate}</span>
                            </div>
                          )}
                          {property.purchasePrice && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Purchase: {property.purchasePrice}</span>
                            </div>
                          )}
                          {property.salePrice && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <span>Sale: {property.salePrice}</span>
                            </div>
                          )}
                          {property.saleDate && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-charcoal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>Sold: {property.saleDate}</span>
                            </div>
                          )}
                          {property.is1031 && (
                            <div className="mt-3 pt-3 border-t border-charcoal-200">
                              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cream-200 text-charcoal-800">
                                1031 Exchange
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </>
      )}

      {activeTab === 'advisor' && (
        <section className="py-20 px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-charcoal-900 mb-6 tracking-tight">
                Real Estate Advisory
              </h2>
              <p className="text-xl text-charcoal-600 leading-relaxed mb-8">
                I'm currently working toward my real estate license to help buyers and sellers in Ann Arbor. More details coming soon.
              </p>
              <div className="inline-block px-6 py-3 bg-cream-100 text-charcoal-600 rounded-lg border border-charcoal-300">
                Coming Soon
              </div>
            </motion.div>
          </div>
        </section>
      )}

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

      {/* Image Lightbox Modal */}
      {enlargedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setEnlargedImage(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
