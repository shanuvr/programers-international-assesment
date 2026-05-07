import React from 'react';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Image from 'next/image';

export default function PublicHomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full bg-primary-container overflow-hidden py-12 lg:py-[120px]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary via-transparent to-transparent"></div>
          </div>
          <div className="max-w-container-max mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-lg">
              <div className="inline-flex items-center gap-2 bg-secondary-container/20 text-secondary-fixed px-4 py-1 rounded-full border border-secondary-container/30">
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                <span className="text-label-md font-label-md">Next-Gen Sales Intelligence</span>
              </div>
              <h1 className="text-white font-display text-[48px] md:text-[64px] leading-tight font-black">
                Accelerate Your <span className="text-secondary-fixed-dim">Revenue</span> Stream
              </h1>
              <p className="text-on-primary-container font-body-lg text-body-lg max-w-xl">
                A unified platform to manage enquiries, track product inventory, and optimize your entire sales lifecycle with data-driven precision.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary text-on-secondary px-[32px] py-4 rounded-xl font-bold shadow-xl hover:bg-opacity-90 transition-all flex items-center gap-2">
                  Browse Products
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-transparent border border-outline-variant text-white px-[32px] py-4 rounded-xl font-bold hover:bg-white/5 transition-all">
                  View Demo
                </button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-outline/20">
                <Image 
                  alt="Sales Dashboard Preview" 
                  className="object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKjzGz8-ueDaSC1zIObBfEhikcndh2UNPNp9M1VXdTsVZMEoH2fGQ3qwyvmERlQmQB4acMus3OCpZSeN23DMkQhwYxBxFYfNtoJdJAZ6Bb34z1n_EB22SuyMwDym6aOPM3y4OvMaKUMzf3rzpp50H8sp_kCDjJngFQ4uOIMKtxG_R26hSV05uUZb0s7O8eBCpy676WvM926gqQLHVxBeks3ig5oSY8-gYcdGvqvtBEJ3UfI_F_AWfhnWU0vxn_Ht0MM1KiTcSp1o"
                  fill
                  unoptimized
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-lg border border-outline-variant max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary">trending_up</span>
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">Monthly Growth</p>
                    <p className="text-h3 font-h3 text-on-surface">+24.8%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Explorer Section */}
        <section className="max-w-container-max mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-sidebar-width flex-shrink-0 space-y-lg">
              <div>
                <h3 className="text-h3 font-h3 mb-4">Categories</h3>
                <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded-lg cursor-pointer group">
                    <input className="rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface">Software Solutions</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-secondary-fixed/30 rounded-lg cursor-pointer group border border-secondary-container/20">
                    <input defaultChecked className="rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-md font-bold text-secondary">Enterprise Hardware</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded-lg cursor-pointer group">
                    <input className="rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface">Consulting Services</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 hover:bg-surface-container-low rounded-lg cursor-pointer group">
                    <input className="rounded border-outline text-secondary focus:ring-secondary" type="checkbox" />
                    <span className="text-body-md font-body-md text-on-surface-variant group-hover:text-on-surface">Cloud Infrastructure</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-h3 font-h3 mb-4">Price Range</h3>
                <input className="w-full accent-secondary" type="range" />
                <div className="flex justify-between mt-2 text-label-sm font-label-sm text-on-surface-variant">
                  <span>$0</span>
                  <span>$10,000+</span>
                </div>
              </div>
              <div className="p-4 bg-surface-container rounded-xl border border-outline-variant">
                <h4 className="text-label-md font-label-md text-secondary mb-2 uppercase tracking-wider">Expert Advice</h4>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">Need a custom solution for your enterprise? Our consultants are here to help.</p>
                <button className="w-full bg-white text-secondary border border-secondary px-4 py-2 rounded-lg font-bold hover:bg-secondary hover:text-white transition-all text-body-sm">Talk to Sales</button>
              </div>
            </aside>

            {/* Content Area */}
            <div className="flex-grow space-y-xl">
              <div className="flex justify-between items-end border-b border-outline-variant pb-4">
                <div>
                  <h2 className="text-h2 font-h2">Available Products</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">Displaying 12 enterprise-grade solutions</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
                  <select className="bg-transparent border-none text-label-md font-bold text-on-surface focus:ring-0 cursor-pointer">
                    <option>Most Popular</option>
                    <option>Price: Low to High</option>
                    <option>Newest First</option>
                  </select>
                </div>
              </div>

              {/* Bento-style Product Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProductCard 
                  title="Apex Rack S1"
                  price="$4,299"
                  description="High-performance enterprise server rack with integrated cooling and AI-driven load balancing capabilities."
                  category="Hardware"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBalPlerVbxhKte-wJ7kbAADigujwlHHDCdN7_ThOw1FYEgCcERH7Efs8AM1Qy_P7ElSVf6wDQKwTlcjrdlhVBiZbKNkVca-V8vlB8ay69zNCL-xS0I4V-FiXY-7wdpXEXQ96cTk-PRA-_s4RhNyM9ru3bdj5PXu1XP3fWeFBPBJv2tt-wo-VZRBIurGZC5y02wtrByyxcKU0jwLjKg5o0ZoywHWlVHh9f-O2ank8CB09gAHKSZ-eoYbFUr_HxFz-pXfkzXk4boJrc"
                  isSoftware={false}
                />
                <ProductCard 
                  title="CoreNode Pro"
                  price="$1,850"
                  description="Edge computing processing unit designed for low-latency industrial automation and real-time analytics."
                  category="Hardware"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuD_nX57xwK--D3Kwf-apt4jaaEyPn5PJCzAKAp5sq44D6M6QHRHh97avr7UEVRYnskZznt9QRYeE8iTmp1sE-3_L8couYYXoX9FrzaIYWcO3IYx6-KYDKOYBf8Fl_QUALg9XBqVwjnEFVOS65mGxLJbTchKHaho9gMM7BU2q0j8aTddrOkZyFlx3EchN3kis10JAq0_PW0WXeC_ZqVIqYwpoQhLQ1Zoww212fBpTBHiiC1LFzf7f-KkkM7KqtA_NGvNK3O-kP8MGTY"
                  isSoftware={false}
                />
                <ProductCard 
                  title="SyncOS Enterprise"
                  price="$299/mo"
                  description="Complete cloud operating system for distributed teams, featuring end-to-end encryption and global sync."
                  category="Software"
                  imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBWD4oiLKrlQuaMLvLPTnM1SXpNM_knWeY51QGPiIOO9_2Fvl-2BzolFP_nScUDvjR-iYY4-OpbFIiktJo5Ujemd0l_bb87j_93ipV1d_qRFkfl858rQmSf2H8S4rX421ZnO8D4qWs4MHw6VTvvL6Apg1RgrQgeKRQi3LInOvt6QvES4OK3BlFPW1EOnGprnrv_vrLCU_KYWMHE4bllfmXt90naF4yZN9fOIRGMaHkpc8nUoYn0qhsagVxpBUtyvmWeW3F1mKwry5k"
                  isSoftware={true}
                />
              </div>

              {/* Special Offer Card (Bento Large) */}
              <div className="bg-primary-container rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden mt-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="relative z-10 space-y-md md:w-2/3">
                  <h3 className="text-white font-h1 text-h1">Enterprise Fleet Package</h3>
                  <p className="text-on-primary-container font-body-md text-body-md">Scale your operations with our all-in-one hardware and software bundle. Includes 24/7 priority support and on-site implementation.</p>
                  <div className="flex items-center gap-6">
                    <span className="text-secondary-fixed-dim text-display font-display">$12,500</span>
                    <span className="text-on-primary-container line-through text-h3 font-h3">$15,000</span>
                  </div>
                  <button className="bg-secondary-fixed text-on-secondary-fixed px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">Get Package Quote</button>
                </div>
                <div className="md:w-1/3 flex justify-center z-10">
                  <span className="material-symbols-outlined text-[120px] text-secondary-fixed-dim opacity-50">inventory_2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-surface-container-low py-12 border-t border-outline-variant">
          <div className="max-w-container-max mx-auto px-6">
            <p className="text-center text-label-md font-label-md text-on-surface-variant uppercase tracking-[0.2em] mb-8">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="text-h2 font-black text-on-surface">VOLT.AI</span>
              <span className="text-h2 font-black text-on-surface">QUANTUM</span>
              <span className="text-h2 font-black text-on-surface">NEXUS</span>
              <span className="text-h2 font-black text-on-surface">AURORA</span>
              <span className="text-h2 font-black text-on-surface">SILICON</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-container text-on-primary-container py-12">
        <div className="max-w-container-max mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-md">
            <span className="font-h2 text-h2 font-bold text-white">SalesCore</span>
            <p className="text-body-sm font-body-sm">Enterprise-grade sales management solutions designed for the modern high-velocity organization.</p>
            <div className="flex gap-4">
              <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">groups</span></a>
              <a className="hover:text-white transition-colors" href="#"><span className="material-symbols-outlined">forum</span></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-sm text-body-sm">
              <li><a className="hover:text-white transition-colors" href="#">Catalog</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Custom Solutions</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-sm text-body-sm">
              <li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Press Kit</a></li>
              <li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Newsletter</h4>
            <p className="text-body-sm mb-4">Stay updated with the latest sales insights and product news.</p>
            <div className="flex gap-2">
              <input className="bg-white/5 border border-outline/30 rounded-lg px-4 py-2 focus:ring-secondary focus:border-secondary flex-grow text-body-sm focus:outline-none" placeholder="Email address" type="email" />
              <button className="bg-secondary text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-90 transition-all">Join</button>
            </div>
          </div>
        </div>
        <div className="max-w-container-max mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-label-sm font-label-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <span>© 2024 SalesCore Enterprise. All rights reserved.</span>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Cookie Settings</a>
          </div>
        </div>
      </footer>
    </>
  );
}
