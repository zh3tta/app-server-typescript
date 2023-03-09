import { BaseRouter } from "../shared/router/router";
import { ProductController } from "./controllers/product.controller";
import { ProductMiddleware } from "./middlewares/product.middleware";

export class ProductRouter extends BaseRouter<ProductController, ProductMiddleware> {
    constructor() {
        super(ProductController, ProductMiddleware);
    }

    routes(): void {
        this.router.get("/products", (req, res) => this.controller.getProducts(req, res));
        this.router.get("/product/:id", (req, res) => this.controller.getProductById(req, res));
        this.router.post("/product/create", 
            (req, res, next) => [this.middleware.productValidator(req, res, next)],
            (req, res) => this.controller.createProduct(req, res)
        );
        this.router.put("/product/update/:id", (req, res) => this.controller.updateProduct(req, res));
        this.router.delete("/product/delete/:id", (req, res) => this.controller.deleteProduct(req, res));
    }
}