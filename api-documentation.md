# SalesCore API Documentation 

Base URL: `http://localhost:3002` (Backend Server)

## Authentication & Admin

### POST `/login`
Authenticate an admin user.
- **Body:** `{ email, password }`
- **Response:** `{ message, token, admin: { id, email } }`

### POST `/change-password`
Update admin password securely.
- **Body:** `{ email, oldPassword, newPassword }`
- **Response:** `{ message: "Password updated successfully" }`

### POST `/admin`
Create a new admin user (Initial setup).
- **Body:** `{ email, password }`
- **Response:** `{ message, admin: { id, email } }`

## Products

### GET `/products`
Retrieve all products.
- **Response:** `{ products: Array<Product> }`

### POST `/product`
Create a new product. Uses `multipart/form-data` for image upload.
- **Body (FormData):** `name`, `category`, `price`, `description`, `image` (file)
- **Response:** `{ message, product: Product }`

### PUT `/product/:id`
Update an existing product. Uses `multipart/form-data` for image upload.
- **Body (FormData):** `name`, `category`, `price`, `description`, `image` (optional file)
- **Response:** `{ message, product: Product }`

### DELETE `/product/:id`
Delete a product by ID.
- **Response:** `{ message: "Product deleted successfully" }`

## Categories

### GET `/categories`
Retrieve all categories.
- **Response:** `{ categories: Array<Category> }`

### POST `/category`
Create a new category.
- **Body:** `{ name, description }`
- **Response:** `{ message, category: Category }`

### PUT `/category/:id`
Update an existing category.
- **Body:** `{ name, description }`
- **Response:** `{ message, category: Category }`

### DELETE `/category/:id`
Delete a category by ID.
- **Response:** `{ message: "Category deleted successfully" }`

## Enquiries

### GET `/enquiries`
Retrieve all customer enquiries.
- **Response:** `{ enquiries: Array<Enquiry> }`

### POST `/enquiry`
Submit a new enquiry from the public portal.
- **Body:** `{ firstName, lastName, email, company, role, requirements }`
- **Response:** `{ message, enquiry: Enquiry }`

## System

### GET `/health`
Health check endpoint.
- **Response:** `"Server running properly"`
