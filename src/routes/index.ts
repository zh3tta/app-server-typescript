const UserRouter = require('../user/user.router');
const PurchaseRouter = require ("../purchase/purchase.router");
const ProductRouter = require ("../product/product.router");
const CustomerRouter = require ("../customer/customer.router");
const CategoryRouter = require ("../category/category.router");
const PurchaseProductRouter = require ("../purchase/purchases-products.router");
const AuthRouter = require ("../auth/auth.router");

module.exports = {
    ...UserRouter,
    ...PurchaseRouter,
    ...ProductRouter,
    ...CustomerRouter,
    ...CategoryRouter,
    ...PurchaseProductRouter,
    ...AuthRouter,
}