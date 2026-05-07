'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

export interface Product {
  title: string;
  price: string;
  imageUrl: string;
}

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function EnquiryModal({ isOpen, onClose, product }: EnquiryModalProps) {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-on-secondary-fixed/40 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-md border border-outline-variant overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-outline-variant flex items-center justify-between flex-shrink-0">
          <h2 className="font-h2 text-h2 text-primary">Send Product Enquiry</h2>
          <button 
            onClick={onClose}
            className="text-on-surface-variant hover:bg-surface-container-high rounded-full p-1 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        
        {/* Product Summary Section */}
        <div className="p-6 bg-surface-container-low border-b border-outline-variant flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-lg bg-surface-container overflow-hidden border border-outline-variant flex-shrink-0 relative">
              <Image 
                alt={product.title} 
                src={product.imageUrl}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <h4 className="font-h3 text-h3 text-primary leading-tight">{product.title}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-label-md text-label-md text-secondary">{product.price}</span>
                <span className="text-outline text-xs">•</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">Enterprise License</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Content */}
        <form 
          className="flex flex-col flex-grow overflow-hidden" 
          onSubmit={(e) => { e.preventDefault(); alert('Enquiry Sent Successfully!'); onClose(); }}
        >
          <div className="p-6 space-y-4 overflow-y-auto">
            {/* Name Field */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="name">Full Name</label>
              <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="name" name="name" placeholder="John Doe" type="text" required />
            </div>
            
            {/* Two Column Row: Quantity & Mobile */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="quantity">Quantity</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="quantity" min="1" name="quantity" type="number" defaultValue="1" required />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="mobile">Mobile Number</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" id="mobile" name="mobile" placeholder="+1 (555) 000-0000" type="tel" required />
              </div>
            </div>
            
            {/* Address Field */}
            <div>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="address">Delivery / Billing Address</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 font-body-sm text-body-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" id="address" name="address" placeholder="Enter your full business address..." rows={3} required></textarea>
            </div>
            
            {/* Additional Requirements */}
            <div>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="rounded border-outline-variant text-secondary focus:ring-secondary" type="checkbox" />
                <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Request a technical demo with this enquiry</span>
              </label>
            </div>
          </div>
          
          {/* Modal Actions */}
          <div className="px-6 py-4 bg-surface-container-low flex items-center justify-end gap-4 border-t border-outline-variant flex-shrink-0">
            <button 
              onClick={onClose}
              className="px-6 py-2 font-label-md text-label-md text-primary border border-outline-variant rounded-lg bg-surface-container-lowest hover:bg-surface-container transition-colors active:scale-[0.98]" 
              type="button"
            >
              Cancel
            </button>
            <button 
              className="px-8 py-2 font-label-md text-label-md text-on-secondary bg-secondary rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-[0.98]" 
              type="submit"
            >
              Submit Enquiry
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
