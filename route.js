1.FILE NAME-routes/index.js

const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const orderRoutes = require('./orderRoutes');

// Mount all routes under /api
router.use('/api/products', productRoutes);
router.use('/api/users', userRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/orders', orderRoutes);

module.exports = router;

2.FILE NAME-routes/productRoutes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET single product
router.get('/:id', productController.getProductById);

// POST create new product
router.post('/', productController.createProduct);

// PUT update product
router.put('/:id', productController.updateProduct);

// DELETE remove product
router.delete('/:id', productController.deleteProduct);
module.exports = router;


3.THIRD FILE NAME-routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users (admin only)
router.get('/', userController.getAllUsers);

// GET user profile
router.get('/:id', userController.getUserById);

// POST register
router.post('/register', userController.registerUser);

// PUT update user
router.put('/:id', userController.updateUser);

// DELETE user
router.delete('/:id', userController.deleteUser);

module.exports = router;


4.FILE NAME-routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET all orders (admin)
router.get('/', orderController.getAllOrders);

// GET user orders
router.get('/user/:userId', orderController.getOrdersByUser);

// POST create order
router.post('/', orderController.createOrder);

// GET single order
router.get('/:id', orderController.getOrderById);

// PUT update order status
router.put('/:id', orderController.updateOrder);

// DELETE cancel order
router.delete('/:id', orderController.cancelOrder);

module.exports = router;

MAIN FILE-

const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json()); // for parsing application/json
app.use(routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
