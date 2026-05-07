"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  fetchCategories: () => void;
}

export default function AddCategoryModal({
  isOpen,
  onClose,
  fetchCategories,
}: AddCategoryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setFormData({ name: "", description: "" });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/category", formData);
      alert("Category added successfully");
      fetchCategories();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to add category");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-center justify-center pointer-events-auto">
      {/* Modal Content */}
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-xl shadow-xl overflow-hidden transform transition-all pointer-events-auto flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center flex-shrink-0">
          <h3 className="font-h3 text-h3 text-primary">Add New Category</h3>
          <button
            onClick={onClose}
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded-full p-1 transition-colors"
          >
            close
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <form
            id="category-form"
            className="space-y-6"
            onSubmit={handleAddCategory}
          >
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                Category Name
              </label>
              <input
                className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none"
                placeholder="e.g., Network Switches"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none resize-none"
                placeholder="Category details and focus area..."
                rows={4}
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
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
            type="submit"
            form="category-form"
            className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-all active:scale-95"
          >
            Save Category
          </button>
        </div>
      </div>
    </div>
  );
}
