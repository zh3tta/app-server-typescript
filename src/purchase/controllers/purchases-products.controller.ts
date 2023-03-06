import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { PurchaseProductService } from "../services/purchases-products.service";

export class PurchaseProductController {
    constructor(
        private readonly purchaseproductService: PurchaseProductService = new PurchaseProductService(),
        private readonly httpResponse: HttpResponse = new HttpResponse()    
    ) {}
    async getPurchaseProduct(req: Request, res: Response) {
        try {
            const data = await this.purchaseproductService.findAllPurchaseProduct();
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No exist data");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async getPurchaseProductById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.purchaseproductService.findPurchaseProductById(id);
            if (!data) {
                return this.httpResponse.NotFound(res, "No exist data");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async createPurchaseProduct(req: Request, res: Response) {
        try {
            const data = await this.purchaseproductService.createPurchaseProduct(req.body);
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async updatePurchaseProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: UpdateResult = await this.purchaseproductService.updatePurchaseProduct(id, req.body);
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "There is an error in updating");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async deletePurchaseProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: DeleteResult = await this.purchaseproductService.deletePurchaseProduct(id);
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "There is an error deleting");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }
}