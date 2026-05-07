/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import { Product } from "@/types/product";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  fetchProducts: () => void;
  product: Product | null;
}

export default function EditProductModal({
  isOpen,
  onClose,
  fetchProducts,
  product,
}: EditProductModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "", // Description is kept for UI consistency, even if backend ignores it right now
  });
  const [categories, setCategories] = useState<
    {
      _id: string;
      name: string;
    }[]
  >([]);

  const [image, setImage] = useState<File | null>(null);

  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      fetchCategories();
      
      // Pre-fill form data when product is provided
      if (product) {
        setFormData({
          name: product.name || "",
          category: product.category || "",
          price: product.price ? product.price.toString() : "",
          description: "", // No description in product type, leave empty or you could fetch it if there's a detailed API
        });
      }
    } else {
      document.body.style.overflow = "unset";
      setImage(null); // Reset image when modal closes
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, product]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleEditProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("description", formData.description);

      if (image) {
        data.append("image", image);
      }

      await api.put(`/product/${product._id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product updated successfully");
      fetchProducts();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to update product");
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-primary/40 backdrop-blur-sm z-[100] flex items-center justify-center pointer-events-auto">
      {/* Modal Content */}
      <div className="bg-surface-container-lowest w-full max-w-2xl rounded-xl shadow-xl overflow-hidden transform transition-all pointer-events-auto flex flex-col max-h-[90vh]">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center flex-shrink-0">
          <h3 className="font-h3 text-h3 text-primary">Edit Product</h3>
          <button
            onClick={onClose}
            className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-high rounded-full p-1 transition-colors"
          >
            close
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <form
            id="edit-product-form"
            className="space-y-6"
            onSubmit={handleEditProduct}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                  Product Name
                </label>
                <input
                  className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none"
                  placeholder="e.g., Enterprise Fiber Switch 5000"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                  Category
                </label>
                <select
                  className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none"
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="">Select Category</option>

                  {categories.map((category) => (
                    <option key={category._id} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                  Price ($)
                </label>
                <input
                  className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none"
                  placeholder="0.00"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                Description
              </label>
              <textarea
                className="w-full border border-outline-variant rounded-lg p-4 focus:ring-secondary focus:border-secondary font-body-sm text-body-sm outline-none resize-none"
                placeholder="Detail product specifications and warranty terms..."
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-1">
                Product Image (Leave empty to keep existing)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
            form="edit-product-form"
            className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-label-md text-label-md shadow-sm hover:opacity-90 transition-all active:scale-95"
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}
