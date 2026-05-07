import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import logger from "../utils/logger";
import Admin from "../models/admin";
import Product from "../models/product";
import Category from "../models/category";
import Enquiry from "../models/enquiry";
export const health = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    res.status(200).json({ message: "good" });
  } catch (error: any) {
    logger.error(`error  ${error}`);
    next(error);
  }
};

export const loginAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    // check empty fields
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // find admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // success
    res.status(200).json({
      message: "Login successful",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price, category } = req.body;

    const file = req.file;

    if (!name || !price || !category || !file) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      image: file.path,
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const editProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const { name, price, category } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    // update text fields
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;

    // update image if uploaded
    if (req.file) {
      product.image = req.file.path;
    }

    await product.save();

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await product.deleteOne();

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const addCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // check existing category
    const existingCategory = await Category.findOne({ name });

    if (existingCategory) {
      return res.status(400).json({
        message: "Category already exists",
      });
    }

    const category = await Category.create({
      name,
      description,
    });

    res.status(201).json({
      message: "Category added successfully",
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const editCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const { name, description } = req.body;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    // update fields
    if (name !== undefined) {
      category.name = name;
    }

    if (description !== undefined) {
      category.description = description;
    }

    await category.save();

    res.status(200).json({
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    await category.deleteOne();

    res.status(200).json({
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const addEnquiry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      fullName,
      quantity,
      mobile,
      address,
      demoRequest,
      productId,
    } = req.body;

    if (
      !fullName ||
      !quantity ||
      !mobile ||
      !address ||
      !productId
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const enquiry = await Enquiry.create({
      fullName,
      quantity,
      mobile,
      address,
      demoRequest,
      productId,
    });

    res.status(201).json({
      message: "Enquiry submitted successfully",
      enquiry,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { category } = req.query;

    let filter = {};

    // filter by category if provided
    if (category) {
      filter = {
        category,
      };
    }

    const products = await Product.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categories = await Category.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Categories fetched successfully",
      categories,
    });
  } catch (error) {
    next(error);
  }
};

export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        message: "Admin already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await Admin.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllEnquiries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const enquiries = await Enquiry.find().populate("productId").sort({
      createdAt: -1,
    });

    res.status(200).json({
      message: "Enquiries fetched successfully",
      enquiries,
    });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    if (!email || !oldPassword || !newPassword) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        message: "Admin not found",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid old password",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;
    await admin.save();

    res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    next(error);
  }
};