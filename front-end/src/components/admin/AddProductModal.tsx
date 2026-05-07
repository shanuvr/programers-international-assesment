'use client';
import React, { useEffect } from 'react';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
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
    <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-center justify-center pointer-events-auto">
      {/* Modal Content */}
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-xl overflow-hidden transform transition-all pointer-events-auto flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center flex-shrink-0">
          <h3 className="font-h3 text-h3 text-primary">Add New Product</h3>
          <button 
            onClick={onClose}
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded-full p-1 transition-colors"
          >
            close
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-grow">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Product Name</label>
                <input className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none" placeholder="e.g., Enterprise Fiber Switch 5000" type="text" required />
              </div>
              
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Category</label>
                <select className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none" required>
                  <option value="">Select Category</option>
                  <option value="Workstations">Workstations</option>
                  <option value="Servers">Servers</option>
                  <option value="Networking">Networking</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Price ($)</label>
                <input className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none" placeholder="0.00" type="number" min="0" step="0.01" required />
              </div>
            </div>
            
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Description</label>
              <textarea className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none resize-none" placeholder="Detail product specifications and warranty terms..." rows={4} required></textarea>
            </div>
            
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">Product Image</label>
              <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-on-surface-variant bg-surface-container-low hover:bg-surface-container-high transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-display mb-2">cloud_upload</span>
                <p className="font-label-md text-label-md text-primary">Click to upload or drag and drop</p>
                <p className="font-body-sm text-body-sm opacity-60">PNG, JPG or WEBP (max. 5MB)</p>
              </div>
            </div>
          </form>
        </div>
        
        <div className="px-6 py-4 border-t border-outline-variant bg-surface-container-low flex justify-end gap-4 flex-shrink-0">
          <button 
            onClick={onClose}
            type="button"
            className="px-6 py-2 font-label-md text-label-md text-on-surface-variant bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-high rounded-lg transition-colors active:scale-95"
          >
            Cancel
          </button>
          <button 
            type="button" 
            onClick={(e) => { e.preventDefault(); alert("Product Saved Successfully!"); onClose(); }}
            className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-all active:scale-95"
          >
            Save Product
          </button>
        </div>
      </div>
    </div>
  );
}
