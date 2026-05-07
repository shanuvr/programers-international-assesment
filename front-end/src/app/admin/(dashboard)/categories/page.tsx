"use client";
import React, { useState, useEffect } from "react";
import api from "@/lib/axios";
import { Category } from "@/types/category";
import AddCategoryModal from "@/components/admin/AddCategoryModal";
import EditCategoryModal from "@/components/admin/EditCategoryModal";

export default function CategoryManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this category?")) {
      try {
        await api.delete(`/category/${id}`);
        alert("Category deleted successfully");
        fetchCategories();
      } catch (error) {
        console.log(error);
        alert("Failed to delete category");
      }
    }
  };

  return (
    <>
      {/* Page Action Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="font-h2 text-h2 text-on-surface">Categories Management</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Organize your enterprise catalog into logical product groups.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Add New Category
        </button>
      </div>

      {/* Main Data Table Container */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <div className="flex gap-4">
            <button className="font-label-md text-label-md text-secondary border-b-2 border-secondary pb-1">
              All Categories
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Category Name
                </th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {categories.map((category) => (
                <tr
                  key={category._id}
                  className="hover:bg-surface-container-low transition-colors"
                >
                  {/* Name */}
                  <td className="px-6 py-4">
                    <p className="font-label-md text-label-md text-on-surface">
                      {category.name}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      ID: {category._id.slice(0, 8)}
                    </p>
                  </td>

                  {/* Description */}
                  <td className="px-6 py-4 font-body-sm text-body-sm text-on-surface-variant max-w-md truncate">
                    {category.description}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-1">
                      <button
                        onClick={() => setEditingCategory(category)}
                        className="p-1 text-on-surface-variant hover:text-secondary rounded-full hover:bg-surface-container transition-colors"
                        title="Edit Category"
                      >
                        <span className="material-symbols-outlined block">edit</span>
                      </button>

                      <button
                        onClick={() => handleDelete(category._id)}
                        className="p-1 text-on-surface-variant hover:text-error rounded-full hover:bg-surface-container transition-colors"
                        title="Delete Category"
                      >
                        <span className="material-symbols-outlined block">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              
              {categories.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-on-surface-variant font-body-sm">
                    No categories found. Create one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AddCategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        fetchCategories={fetchCategories}
      />
      <EditCategoryModal
        isOpen={!!editingCategory}
        onClose={() => setEditingCategory(null)}
        fetchCategories={fetchCategories}
        category={editingCategory}
      />
    </>
  );
}
