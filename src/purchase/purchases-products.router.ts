import { BaseRouter } from "../shared/router/router";
import { PurchaseProductController } from "./controllers/purchases-products.controller";
import { PurchaseProductMiddleware } from "./middlewares/purchases-products.middleware";

export class PurchaseProductRouter extends BaseRouter<PurchaseProductController, PurchaseProductMiddleware> {
    constructor() {
        super(PurchaseProductController, PurchaseProductMiddleware);
    }

    routes(): void {
        this.router.get("/purchases-products", (req, res) => this.controller.getPurchaseProduct(req, res));
        this.router.get("/purchase-product/:id", (req, res) => this.controller.getPurchaseProductById(req, res));
        this.router.post("/purchase-product/create", 
            (req, res, next) => [this.middleware.purchaseproductValidator(req, res, next)],
            (req, res) => this.controller.createPurchaseProduct(req, res)
        );
        this.router.put("/purchase-product/update/:id", (req, res) => this.controller.updatePurchaseProduct(req, res));
        this.router.delete("/purchase-product/delete/:id", (req, res) => this.controller.deletePurchaseProduct(req, res));
    }
}