'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'dashboard' },
    { name: 'Enquiries', path: '/admin/enquiries', icon: 'question_answer' },
    { name: 'Products', path: '/admin/products', icon: 'inventory_2' },
    { name: 'Categories', path: '/admin/categories', icon: 'category' },
    { name: 'Settings', path: '/admin/settings', icon: 'settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[260px] bg-surface-container-lowest border-r border-outline-variant shadow-sm flex flex-col p-4 gap-1 z-40">
      <div className="mb-8 px-2">
        <h1 className="font-h3 text-h3 font-black text-primary">SalesCore</h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">Enterprise Portal</p>
      </div>
      
      <nav className="flex-grow space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          return (
            <Link 
              key={item.name}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-2 rounded-lg transition-all font-label-md text-label-md ${
                isActive 
                  ? 'bg-secondary-fixed text-on-secondary-fixed font-bold' 
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              <span 
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto border-t border-outline-variant pt-4">
        <Link 
          href="/admin/login" 
          className="flex items-center gap-4 px-4 py-2 text-error hover:bg-error-container/20 rounded-lg transition-all font-label-md text-label-md"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
