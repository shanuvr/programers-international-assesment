import React from 'react';
import SideNavBar from '@/components/admin/SideNavBar';
import TopAppBar from '@/components/admin/TopAppBar';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background min-h-screen">
      <SideNavBar />
      <TopAppBar />
      
      {/* Main Content Canvas */}
      <main className="ml-[260px] pt-16 min-h-screen">
        <div className="max-w-[1440px] mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
