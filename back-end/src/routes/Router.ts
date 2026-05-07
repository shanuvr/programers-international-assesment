import express from 'express'
import { upload } from '../config/multer'
import { addCategory, addEnquiry, addProduct, createAdmin, deleteCategory, deleteProduct, editCategory, editProduct, getAllCategories, getAllProducts, health, loginAdmin } from '../controllers/Controller'
const router = express.Router()
router.get("/health",health)
router.post("/login", loginAdmin);
router.post("/product", upload.single("image"), addProduct);
router.put("/product/:id", upload.single("image"), editProduct);
router.delete("/product/:id", deleteProduct);
router.post("/category", addCategory);
router.put("/category/:id", editCategory);
router.delete("/category/:id", deleteCategory);
router.post("/enquiry", addEnquiry);
router.get("/products", getAllProducts);
router.get("/categories", getAllCategories);
router.post("/admin", createAdmin);



export default router