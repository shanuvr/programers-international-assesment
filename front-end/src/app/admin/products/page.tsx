/* eslint-disable react-hooks/set-state-in-effect */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import AddProductModal from '@/components/admin/AddProductModal';
import { useEffect } from 'react';
import api from '@/lib/axios';
import { Product } from '@/types/product';

export default function ProductManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const fetchProducts = async () => {
  try {
    const response = await api.get('/products');

    setProducts(response.data.products);
  } catch (error) {
    console.log(error);
  }
};
useEffect(() => {
  fetchProducts();
}, []);

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
  {products.map((product) => (
    <tr
      key={product._id}
      className="hover:bg-surface-container-low transition-colors"
    >
      {/* Product */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0 border border-outline-variant relative">
            <Image
              alt={product.name}
              fill
              className="object-cover"
              src={`http://localhost:3002/${product.image}`}
              unoptimized
            />
          </div>

          <div>
            <p className="font-label-md text-label-md text-on-surface">
              {product.name}
            </p>

            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Product ID: {product._id.slice(0, 6)}
            </p>
          </div>

        </div>
      </td>

      {/* Category */}
      <td className="px-6 py-4 font-body-sm text-body-sm">
        {product.category}
      </td>

      {/* Price */}
      <td className="px-6 py-4 font-label-md text-label-md font-bold text-on-surface">
        ₹{product.price}
      </td>

      {/* Stock */}
      <td className="px-6 py-4 font-body-sm text-body-sm">
        In Stock
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span className="px-2 py-1 bg-[#dcfce7] text-[#166534] rounded-full text-[10px] font-bold uppercase">
          Active
        </span>
      </td>

      {/* Actions */}
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-1">

          <button className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined block">
              edit
            </span>
          </button>

          <button className="p-1 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined block">
              delete
            </span>
          </button>

        </div>
      </td>
    </tr>
  ))}
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

     <AddProductModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  fetchProducts={fetchProducts}
/>
    </>
  );
}
