'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import EnquiryModal from './EnquiryModal';

interface ProductCardProps {
  _id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  imageUrl: string;
  isSoftware?: boolean;
}

export default function ProductCard({ _id,title, price, description, category, imageUrl, isSoftware }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm group hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full">
        <div className="relative h-56 flex-shrink-0">
          <Image 
            alt={title} 
            src={imageUrl} 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105" 
            unoptimized // For external unconfigured domains
          />
          <span className={`absolute top-4 left-4 text-label-sm font-label-sm px-2 py-1 rounded ${isSoftware ? 'bg-surface-container-highest text-on-surface' : 'bg-secondary-container text-white'}`}>
            {category}
          </span>
        </div>
        <div className="p-6 space-y-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start">
            <h4 className="text-h3 font-h3 text-on-surface">{title}</h4>
            <span className="text-h3 font-h3 text-secondary">{price}</span>
          </div>
          <p className="text-body-sm font-body-sm text-on-surface-variant line-clamp-2 flex-grow">{description}</p>
          <div className="flex gap-2 mt-auto pt-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex-grow bg-secondary text-on-secondary px-4 py-2 rounded-lg font-bold text-body-sm hover:opacity-90 active:scale-95 transition-all"
            >
              Send Enquiry
            </button>
            <button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary transition-all flex items-center justify-center">
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
      </div>
      
      <EnquiryModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  product={{
    _id,
    title,
    price,
    imageUrl,
  }}
/>
    </>
  );
}
