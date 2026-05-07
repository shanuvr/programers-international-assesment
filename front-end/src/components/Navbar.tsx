import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-surface-container-lowest dark:bg-primary-container border-b border-outline-variant dark:border-outline shadow-sm docked full-width top-0 z-50 fixed w-full">
      <div className="flex justify-between items-center px-6 py-2 w-full max-w-container-max mx-auto h-16">
        <div className="flex items-center gap-8">
          <span className="font-h2 text-h2 font-bold text-on-surface dark:text-surface-bright">SalesCore</span>
          <div className="hidden md:flex items-center gap-6">
            <a className="text-secondary dark:text-secondary-fixed-dim font-bold border-b-2 border-secondary pb-1 font-body-md text-body-md" href="#">Shop</a>
            <a className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md" href="#">Categories</a>
            <a className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md" href="#">About</a>
            <a className="text-on-surface-variant dark:text-outline-variant font-medium hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 font-body-md text-body-md" href="#">Support</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-1 rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-body-sm font-body-sm w-48 focus:outline-none" placeholder="Search products..." type="text" />
          </div>
          <button className="text-on-surface-variant font-medium px-4 py-2 hover:text-secondary transition-colors font-body-sm text-body-sm">Login</button>
          <button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all font-body-sm text-body-sm">Get Started</button>
        </div>
      </div>
    </nav>
  );
}
