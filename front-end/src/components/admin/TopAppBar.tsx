'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function TopAppBar() {
  const pathname = usePathname();
  
  // Infer title from pathname
  const getTitle = () => {
    if (pathname.includes('/products')) return 'Products';
    if (pathname.includes('/categories')) return 'Categories';
    if (pathname.includes('/enquiries')) return 'Enquiries';
    if (pathname.includes('/settings')) return 'Settings';
    if (pathname.includes('/dashboard')) return 'Dashboard';
    return 'Dashboard';
  };

  return (
    <header className="fixed top-0 left-[260px] right-0 h-16 bg-surface-bright border-b border-outline-variant flex justify-between items-center px-6 z-30">
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer md:hidden">menu</span>
        <h2 className="font-h3 text-h3 text-primary capitalize">{getTitle()}</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center bg-surface-container rounded-full px-4 py-1 border border-outline-variant">
          <span className="material-symbols-outlined text-outline text-sm">search</span>
          <input 
            className="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-none ml-2" 
            placeholder="Search..." 
            type="text"
          />
        </div>
        
        <div className="flex items-center gap-4 text-on-surface-variant">
          <span className="material-symbols-outlined hover:bg-surface-container-high p-1 rounded-full cursor-pointer transition-colors">
            notifications
          </span>
          <span className="material-symbols-outlined hover:bg-surface-container-high p-1 rounded-full cursor-pointer transition-colors">
            account_circle
          </span>
        </div>
      </div>
    </header>
  );
}
