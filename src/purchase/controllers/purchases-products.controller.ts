import { Request, Response } from "express";
import { PurchaseProductService } from "../services/purchases-products.service";

export class PurchaseProductController {
    constructor(private readonly purchaseproductService: PurchaseProductService = new PurchaseProductService()) {}
    async getPurchaseProduct(req: Request, res: Response) {
        try {
            const data = await this.purchaseproductService.findAllPurchaseProduct();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    async getPurchaseProductById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.purchaseproductService.findPurchaseProductById(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    async createPurchaseProduct(req: Request, res: Response) {
        try {
            const data = await this.purchaseproductService.createPurchaseProduct(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    async updatePurchaseProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.purchaseproductService.updatePurchaseProduct(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }

    async deletePurchaseProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.purchaseproductService.deletePurchaseProduct(id);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
        }
    }
}