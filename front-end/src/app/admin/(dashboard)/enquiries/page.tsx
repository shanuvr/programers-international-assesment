"use client";
import React, { useState, useEffect } from 'react';
import { Enquiry } from '@/types/enquiry';
import api from '@/lib/axios';

export default function EnquiryManagement() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await api.get('/enquiries');
        setEnquiries(response.data.enquiries);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchEnquiries();
  }, []);

  return (
    <>
      {/* Page Action Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="font-h2 text-h2 text-on-surface">Enquiry Management</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Review and respond to enterprise customer inquiries and demo requests.</p>
        </div>
        <button 
          className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-base">download</span>
          Export Report
        </button>
      </div>

      {/* Bento Grid Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-secondary-fixed rounded-lg text-on-secondary-fixed material-symbols-outlined">question_answer</span>
            <span className="text-secondary font-label-sm">+5 Today</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Enquiries</p>
            <p className="font-h2 text-h2">124</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-tertiary-fixed rounded-lg text-on-tertiary-fixed material-symbols-outlined">desktop_windows</span>
            <span className="text-error font-label-sm">Action Needed</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Pending Demos</p>
            <p className="font-h2 text-h2">12</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-surface-container-high rounded-lg text-on-surface material-symbols-outlined">check_circle</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Resolved</p>
            <p className="font-h2 text-h2">98</p>
          </div>
        </div>
        
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <span className="p-1 bg-on-primary-container rounded-lg text-white material-symbols-outlined">inventory_2</span>
          </div>
          <div>
            <p className="font-label-sm text-label-sm text-on-surface-variant mb-1">Total Units Requested</p>
            <p className="font-h2 text-h2">1,500+</p>
          </div>
        </div>
      </div>

      {/* Main Data Table Container */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <div className="flex gap-4">
            <button className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1">All Enquiries</button>
            <button className="font-label-md text-label-md text-on-surface-variant pb-1 hover:text-on-surface">Demo Requests</button>
            <button className="font-label-md text-label-md text-on-surface-variant pb-1 hover:text-on-surface">Resolved</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 border border-outline-variant rounded hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant block">filter_list</span></button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Contact</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Product Interest</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-center">Qty</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Demo Requested</th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {enquiries.map((enquiry) => (
                <tr
                  key={enquiry._id}
                  className="hover:bg-surface-container-low transition-colors"
                >
                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold flex-shrink-0">
                        {enquiry.fullName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-label-md text-label-md text-on-surface">{enquiry.fullName}</p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">{enquiry.address}</p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4 font-body-sm text-body-sm">
                    {enquiry.mobile}
                  </td>

                  {/* Product Interest */}
                  <td className="px-6 py-4">
                    <p className="font-label-md text-label-md text-on-surface">{enquiry.productId?.name || "Unknown Product"}</p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">ID: {enquiry.productId?._id.slice(0,6) || "---"}</p>
                  </td>

                  {/* Qty */}
                  <td className="px-6 py-4 font-label-md text-label-md font-bold text-on-surface text-center">
                    {enquiry.quantity}
                  </td>

                  {/* Demo */}
                  <td className="px-6 py-4">
                    {enquiry.demoRequest ? (
                      <span className="px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold uppercase">
                        Yes
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-[10px] font-bold uppercase">
                        No
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors">
                        <span className="material-symbols-outlined block">
                          visibility
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
          <p className="font-label-sm text-label-sm text-on-surface-variant">Showing 1-{enquiries.length} of {enquiries.length} entries</p>
          <div className="flex gap-1">
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest disabled:opacity-50 transition-colors" disabled>Previous</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest bg-surface-container-lowest transition-colors">1</button>
            <button className="px-4 py-1 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-lowest transition-colors disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}
