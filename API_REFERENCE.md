# 🔌 API ENDPOINTS REFERENCE

---

## 📋 **Backend Server: http://localhost:4000**

---

## ✅ **WORKING ENDPOINTS**

### **USER ENDPOINTS** (`/api/user`)

```
POST /api/user/register
├── Required: { name, email, password }
├── Response: { success: true, token: "jwt..." }
└── File: backend/controllers/userController.js

POST /api/user/login
├── Required: { email, password }
├── Response: { success: true, token: "jwt..." }
└── File: backend/controllers/userController.js
```

---

### **FOOD ENDPOINTS** (`/api/food`)

```
POST /api/food/add
├── Required: { name, description, price, category, image (file) }
├── Response: { success: true, message: "Food added" }
├── Auth: None
└── File: backend/controllers/foodController.js

GET /api/food/list
├── Required: None
├── Response: { success: true, data: [food items] }
├── Auth: None
└── File: backend/controllers/foodController.js

POST /api/food/remove
├── Required: { id: "mongodb_id" }
├── Response: { success: true, message: "Food removed" }
├── Auth: Required
└── File: backend/controllers/foodController.js
```

---

### **CART ENDPOINTS** (`/api/cart`)

```
POST /api/cart/add
├── Required: { itemId: "food_id" }
├── Response: { success: true }
├── Auth: Required (token header)
└── File: backend/controllers/cartController.js

POST /api/cart/remove
├── Required: { itemId: "food_id" }
├── Response: { success: true }
├── Auth: Required
└── File: backend/controllers/cartController.js

POST /api/cart/get
├── Required: None
├── Response: { success: true, cartData: {...} }
├── Auth: Required
└── File: backend/controllers/cartController.js
```

---

### **ORDER ENDPOINTS** (`/api/order`)

```
POST /api/order/place
├── Required: { 
│  items: [{ id, quantity }],
│  amount: 50,
│  address: { firstName, lastName, email, street, city, state, zipcode, country, phone }
│ }
├── Response: { success: true, session_url: "stripe_url" }
├── Auth: Required
└── File: backend/controllers/orderController.js

POST /api/order/verify
├── Required: { success: true/false, orderId: "mongodb_id" }
├── Response: { success: true, message: "Payment verified" }
├── Auth: None
└── File: backend/controllers/orderController.js

GET /api/order/list
├── Required: None
├── Response: { success: true, data: [all orders] }
├── Auth: Admin only (optional)
└── File: backend/controllers/orderController.js

POST /api/order/userorders
├── Required: None
├── Response: { success: true, data: [user's orders] }
├── Auth: Required
└── File: backend/controllers/orderController.js

POST /api/order/status
├── Required: { orderId: "mongodb_id", status: "New Status" }
├── Response: { success: true }
├── Auth: Admin only
└── File: backend/controllers/orderController.js
```

---

## ❌ **MISSING ENDPOINTS**

### **Search Endpoint** (Not Implemented)
```
GET /api/food/search?q=keyword
├── Would Return: Foods matching name or category
└── Status: NEEDS IMPLEMENTATION
```

### **Contact/Inquiry Endpoint** (Not Implemented)
```
POST /api/inquiry/submit
├── Would Accept: { name, email, subject, message }
├── Would Store: In MongoDB inquiries collection
└── Status: NEEDS IMPLEMENTATION
```

### **Inquiry List Endpoint** (Not Implemented)
```
GET /api/inquiry/list
├── Would Return: All customer inquiries
└── Status: NEEDS IMPLEMENTATION
```

### **Promo Code Endpoint** (Not Implemented)
```
POST /api/cart/apply-promo
├── Would Accept: { code: "PROMO10", cartTotal: 50 }
├── Would Return: { discount: 5, newTotal: 45 }
└── Status: NEEDS IMPLEMENTATION
```

### **Edit Food Endpoint** (Not Implemented)
```
PUT /api/food/update/:id
├── Would Accept: Updated food details
├── Would Return: Updated food item
└── Status: NEEDS IMPLEMENTATION
```

### **Payment Verification (Stripe)** (Not Implemented)
```
POST /api/payment/webhook
├── Would Accept: Stripe webhook data
├── Would Update: Order status based on payment
└── Status: NEEDS IMPLEMENTATION
```

---

## 📊 **API USAGE EXAMPLE**

### **Frontend Example Code:**
```javascript
// In React component:
import axios from "axios";
const url = "http://localhost:4000";
const token = localStorage.getItem("token");

// Login
const loginResponse = await axios.post(url + "/api/user/login", {
  email: "user@example.com",
  password: "password123"
});
localStorage.setItem("token", loginResponse.data.token);

// Get food list
const foodList = await axios.get(url + "/api/food/list");
console.log(foodList.data.data); // Array of food items

// Add to cart
await axios.post(
  url + "/api/cart/add",
  { itemId: "food_mongodb_id" },
  { headers: { token } }
);

// Place order
const orderResponse = await axios.post(
  url + "/api/order/place",
  {
    items: [{ id: "food_id", quantity: 2 }],
    amount: 50,
    address: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      street: "123 Main St",
      city: "NYC",
      state: "NY",
      zipcode: "10001",
      country: "USA",
      phone: "555-1234"
    }
  },
  { headers: { token } }
);

// Get user's orders
const myOrders = await axios.post(
  url + "/api/order/userorders",
  {},
  { headers: { token } }
);
```

---

## 🔐 **AUTHENTICATION**

### **How Token Works:**
1. User logs in → Backend generates JWT token
2. Frontend stores token in localStorage
3. For protected endpoints, send token in header:
   ```
   headers: { token: "eyJhbGc..." }
   ```
4. Backend verifies token in middleware
5. If valid, request proceeds; if invalid, returns 401 error

### **Protected Endpoints** (Require Token):
- POST /api/cart/add
- POST /api/cart/remove
- POST /api/cart/get
- POST /api/order/place
- POST /api/order/userorders

### **Public Endpoints** (No Token Needed):
- POST /api/user/register
- POST /api/user/login
- GET /api/food/list
- POST /api/order/verify

---

## 🛠️ **TESTING ENDPOINTS WITH POSTMAN**

### **Step 1: Register/Login**
```
POST http://localhost:4000/api/user/register
Body (JSON):
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "password123"
}

Response:
{
  "success": true,
  "token": "eyJhbGc..."
}
```

### **Step 2: Get Food List**
```
GET http://localhost:4000/api/food/list

Response:
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Biryani",
      "price": 12.99,
      "category": "Salad",
      ...
    },
    ...
  ]
}
```

### **Step 3: Add Food (Admin)**
```
POST http://localhost:4000/api/food/add
Body (FormData):
- name: "New Dish"
- description: "Delicious"
- price: 15.99
- category: "Salad"
- image: (select image file)

Response:
{
  "success": true,
  "message": "Food added successfully"
}
```

### **Step 4: Place Order**
```
POST http://localhost:4000/api/order/place
Headers:
- token: (paste token from login)
Body (JSON):
{
  "items": [
    { "id": "507f1f77bcf86cd799439011", "quantity": 2 }
  ],
  "amount": 50,
  "address": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@test.com",
    "street": "123 Main",
    "city": "NYC",
    "state": "NY",
    "zipcode": "10001",
    "country": "USA",
    "phone": "5551234"
  }
}

Response:
{
  "success": true,
  "session_url": "stripe_checkout_url"
}
```

---

## 📁 **DATABASE MODELS**

### **User Model**
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  cartData: Object // Empty object for new users
}
```

### **Food Model**
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  image: String // filename
  category: String
}
```

### **Order Model**
```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  items: Array [
    { id: ObjectId, name: String, quantity: Number, price: Number }
  ],
  amount: Number,
  address: Object {
    firstName, lastName, email, street, city, state, zipcode, country, phone
  },
  status: String // "Food Processing", "Out for delivery", "Delivered"
  date: Date (timestamp)
}
```

### **Cart Model** (Stored in User document)
```javascript
cartData: Object {
  "507f1f77bcf86cd799439011": 2, // food_id: quantity
  "507f1f77bcf86cd799439012": 1
}
```

---

## 🚨 **COMMON API ERRORS**

### **401 Unauthorized**
```json
{
  "success": false,
  "message": "Not Authorized Login Again"
}
```
**Cause:** Missing or invalid token
**Solution:** Add token to header or login again

### **400 Bad Request**
```json
{
  "success": false,
  "message": "Missing required fields"
}
```
**Cause:** Missing required data in request body
**Solution:** Check request format with example above

### **500 Server Error**
```json
{
  "success": false,
  "message": "Server error"
}
```
**Cause:** Backend error
**Solution:** Check backend terminal for error logs

---

## 🔄 **COMPLETE USER FLOW WITH API CALLS**

```
1. User visits app
   └─ GET /api/food/list → Load all foods

2. User signs up
   └─ POST /api/user/register → Get token

3. User browses & adds items
   └─ POST /api/cart/add (multiple times)

4. User goes to cart
   └─ POST /api/cart/get → Get cart items

5. User checks out
   └─ POST /api/order/place → Create order

6. User redirected to payment verification
   └─ POST /api/order/verify → Confirm payment

7. User views orders
   └─ POST /api/order/userorders → Get user's orders

8. Admin views all orders
   └─ GET /api/order/list → Get all orders

9. Admin updates order status
   └─ POST /api/order/status → Update status
```

---

## 📝 **NEED TO IMPLEMENT**

**High Priority:**
- [ ] POST /api/inquiry/submit (Contact form)
- [ ] GET /api/inquiry/list (Admin inquiry list)
- [ ] PUT /api/food/update/:id (Edit product)
- [ ] POST /api/cart/apply-promo (Promo codes)

**Medium Priority:**
- [ ] GET /api/food/search (Search feature)
- [ ] GET /api/rating/food/:id (Product ratings)
- [ ] POST /api/review/add (Add review)
- [ ] POST /api/payment/webhook (Stripe webhook)

**Low Priority:**
- [ ] GET /api/user/profile (User profile)
- [ ] PUT /api/user/update (Update profile)
- [ ] POST /api/notification/send (Notifications)
- [ ] GET /api/analytics/sales (Sales analytics)

---

## 💾 **DATABASE CONNECTION**

**MongoDB String:** Located in `.env` or `config/db.js`
```
mongodb+srv://username:password@cluster.mongodb.net/database?appName=Cluster0
```

To test connection in backend terminal:
```
npm run dev
→ Look for "DB Connected" message
```

---

## 🚀 **API DEPLOYMENT**

When deploying, remember to:
1. Change API URL from `localhost:4000` to production URL
2. Update CORS to allow production domain
3. Use production MongoDB URL
4. Set up environment variables
5. Enable HTTPS
6. Set up payment gateway keys

