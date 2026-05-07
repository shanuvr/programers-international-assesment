'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AddProductModal from '@/components/admin/AddProductModal';

export default function ProductManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Page Action Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="font-h2 text-h2 text-on-surface">Product Inventory</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Manage your high-performance enterprise catalog and stock levels.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Add New Product
        </button>
      </div>

      {/* Bento Grid Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-secondary-fixed rounded-lg text-on-secondary-fixed material-symbols-outlined">inventory</span>
            <span className="text-secondary font-label-sm">+12%</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Products</p>
            <p className="font-h2 text-h2">1,284</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed material-symbols-outlined">priority_high</span>
            <span className="text-error font-label-sm">8 Critical</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Low Stock Alerts</p>
            <p className="font-h2 text-h2">24</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-surface-container-high rounded-lg text-on-surface material-symbols-outlined">category</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Active Categories</p>
            <p className="font-h2 text-h2">18</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-on-primary-container rounded-lg text-white material-symbols-outlined">payments</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Inventory Value</p>
            <p className="font-h2 text-h2">$4.2M</p>
          </div>
        </div>
      </div>

      {/* Main Data Table Container */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <div className="flex gap-4">
            <button className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1">All Products</button>
            <button className="font-label-md text-label-md text-on-surface-variant pb-1 hover:text-on-surface">Drafts</button>
            <button className="font-label-md text-label-md text-on-surface-variant pb-1 hover:text-on-surface">Archived</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant block">filter_list</span></button>
            <button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant block">download</span></button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {/* Row 1 */}
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant relative">
                      <Image alt="Workstation" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR75q3s1PrVBhnIaMBkkvFobngNKl0Sb4-mPwMW394v0A3GL4NdYHG7wMEpCG6debUVCw9YNUvD8v9-_Et9H-ryS6EBsEaB6fP1lqN3Mdo5-nY9knpbE00f2WglrbS6o5O5X_euGWSW3mi4PH-c0JmWCx4aSnuMzxFXUSj7Z_SqhidBSlBdASXSP4SNvpYy9H0-6cFzpCB8DC4O_J8nR88mODksPE7zk3_VuzT-JkdiTMu_gWJqp1LePIqBUSR8h2TrYoK7t7g2b4" unoptimized />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">CoreBook Pro X15</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">SKU: CB-992-PX</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-body-sm">Workstations</td>
                <td className="px-6 py-4 font-label-md text-label-md font-bold text-on-surface">$2,499.00</td>
                <td className="px-6 py-4 font-body-sm text-body-sm">142 units</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded-full text-[10px] font-bold uppercase">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">edit</span></button>
                    <button className="p-1 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">delete</span></button>
                  </div>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant relative">
                      <Image alt="Server" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3O_M7gfXDXuh9IPt0krIFS5I9FXFuo9KCgbT2aG7os3fH6KsqfNcCi8bZMfhwHwymmosaYK1TSYc6a0pGOuEZTECduzwbwbpqMIswIzWaEqtZKJKtwd1W2re2pIPiuEqAO9Gd9L1SwWdhqs-i-EM-wb51V4a3OZ-vQ5ov7fTakJg7uqcsT0YnX6avB8161TLC1QghTqwXu7VRuPC8vKzcVGWxz-rjhTk35JsxcQbrhqmxGqtDXXCIN8r6F4-zVD5KJDWL48V68QQ" unoptimized />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">RackCore Enterprise V2</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">SKU: RC-V2-880</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-body-sm">Servers</td>
                <td className="px-6 py-4 font-label-md text-label-md font-bold text-on-surface">$12,850.00</td>
                <td className="px-6 py-4 font-body-sm text-body-sm text-error font-bold">12 units</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-error-container text-on-error-container rounded-full text-[10px] font-bold uppercase">Low Stock</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">edit</span></button>
                    <button className="p-1 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">delete</span></button>
                  </div>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant relative">
                      <Image alt="Headset" fill className="object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUoC1TSmLYqTo0NmCJ8qyvghJJsNtWpEMZOUX-0yVAWWfj2g-eoBKuoNqdJNEk3Q0kx-yRZ_bUMB5jRx5SV3mcSEW0KU3wsBI1XURQIicKP21gLl1MiyZdo1HQ81StrLflDkRGSUAq9S0K4Nu5NpGiJdAV_BXS8UII6CjRGaR_ghSqE4xh12hTrbdWbPLzczyIERNgvSLmKZABzKQgkDytvQzDE1NaGXfQqYbtD_hB-FGzfyaeySbYeYb-CGrKUlmvuzleVdEmDec" unoptimized />
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">VoiceSync Elite</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">SKU: VS-EL-44</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-body-sm text-body-sm">Accessories</td>
                <td className="px-6 py-4 font-label-md text-label-md font-bold text-on-surface">$299.00</td>
                <td className="px-6 py-4 font-body-sm text-body-sm">450 units</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-[10px] font-bold uppercase">Active</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-1">
                    <button className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">edit</span></button>
                    <button className="p-1 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-container transition-colors"><span className="material-symbols-outlined block">delete</span></button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 bg-surface-container-low flex justify-between items-center border-t border-outline-variant mt-auto">
          <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-10 of 1,284 products</p>
          <div className="flex gap-1">
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest disabled:opacity-50 transition-colors" disabled>Previous</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest bg-surface-container-lowest transition-colors">1</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors">2</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors">3</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors">Next</button>
          </div>
        </div>
      </div>

      <AddProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
