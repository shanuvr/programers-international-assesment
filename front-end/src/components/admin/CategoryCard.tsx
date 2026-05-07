import React from 'react';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
  iconTextColor: string;
  productCount: number;
  lastUpdated: string;
}

export default function CategoryCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  productCount,
  lastUpdated,
}: CategoryCardProps) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-outline-variant hover:shadow-md transition-shadow flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${iconBgColor} ${iconTextColor}`}>
          <span 
            className="material-symbols-outlined text-display" 
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {icon}
          </span>
        </div>
        <button className="p-1 text-outline hover:text-on-surface hover:bg-surface-container-high rounded transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </div>
      
      <h3 className="font-h3 text-h3 text-on-surface mb-1">{title}</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-8 flex-grow">{description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-tighter">Products</span>
          <span className="font-h2 text-h2 text-primary">{productCount}</span>
        </div>
        <div className="text-right">
          <span className="font-label-sm text-label-sm text-on-surface-variant block">Last updated</span>
          <span className="font-body-sm text-body-sm text-on-surface italic">{lastUpdated}</span>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-outline-variant flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="flex-1 font-label-md text-label-md text-secondary py-1 hover:bg-secondary-fixed rounded transition-colors">Edit</button>
        <button className="flex-1 font-label-md text-label-md text-error py-1 hover:bg-error-container rounded transition-colors">Delete</button>
      </div>
    </div>
  );
}
