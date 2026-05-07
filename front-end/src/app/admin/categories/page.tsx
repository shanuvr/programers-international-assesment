import React from 'react';
import CategoryCard from '@/components/admin/CategoryCard';

export default function CategoriesManagement() {
  const categories = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable enterprise server solutions and managed database clusters.',
      icon: 'dns',
      iconBgColor: 'bg-secondary-fixed',
      iconTextColor: 'text-secondary',
      productCount: 142,
      lastUpdated: '2 hours ago',
    },
    {
      title: 'Workstations',
      description: 'High-performance desktop systems for engineering and creative teams.',
      icon: 'computer',
      iconBgColor: 'bg-primary-fixed',
      iconTextColor: 'text-primary',
      productCount: 86,
      lastUpdated: '5 mins ago',
    },
    {
      title: 'Accessories',
      description: 'Peripherals, input devices, and ergonomic workplace enhancements.',
      icon: 'headphones',
      iconBgColor: 'bg-tertiary-fixed',
      iconTextColor: 'text-on-tertiary-fixed-variant',
      productCount: 312,
      lastUpdated: 'Yesterday',
    },
    {
      title: 'Internal Components',
      description: 'Individual hardware parts including GPUs, RAM, and CPUs.',
      icon: 'memory',
      iconBgColor: 'bg-on-secondary-fixed',
      iconTextColor: 'text-on-secondary-container',
      productCount: 48,
      lastUpdated: '3 days ago',
    },
  ];

  return (
    <>
      {/* Controls Section */}
      <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-h2 text-h2 text-on-surface">Categories Overview</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Manage and organize your product taxonomy across all enterprise channels.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative inline-block text-left">
            <button className="flex items-center gap-1 px-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors">
              <span className="material-symbols-outlined text-body-md">filter_list</span>
              Bulk Actions
              <span className="material-symbols-outlined text-body-md">expand_more</span>
            </button>
          </div>
          <button className="flex items-center gap-2 px-6 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span>
            Add New Category
          </button>
        </div>
      </section>

      {/* Grid Layout for Category Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <CategoryCard 
            key={index}
            title={cat.title}
            description={cat.description}
            icon={cat.icon}
            iconBgColor={cat.iconBgColor}
            iconTextColor={cat.iconTextColor}
            productCount={cat.productCount}
            lastUpdated={cat.lastUpdated}
          />
        ))}

        {/* Empty State Card / Placeholder for Adding More */}
        <button className="border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:bg-surface-container-low hover:border-secondary transition-all group min-h-[280px]">
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-outline group-hover:text-secondary group-hover:bg-secondary-fixed transition-colors">
            <span className="material-symbols-outlined text-display">add_circle</span>
          </div>
          <div className="text-center">
            <h4 className="font-label-md text-label-md text-on-surface">Create New Category</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Add a custom product group</p>
          </div>
        </button>
      </section>
    </>
  );
}
