import { Request, Response } from "express";
import { DeleteResult, UpdateResult } from "typeorm";
import { HttpResponse } from "../../shared/response/http.response";
import { ProductService } from "../services/product.service";

export class ProductController {
    constructor(
        private readonly productService: ProductService = new ProductService(),
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) {}
    async getProducts(req: Request, res: Response) {
        try {
            const data = await this.productService.findAllProduct();
            if (data.length === 0) {
                return this.httpResponse.NotFound(res, "No exist data");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async getProductById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.productService.findProductById(id);
            if (!data) {
                return this.httpResponse.NotFound(res, "No exist data");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const data = await this.productService.createProduct(req.body);
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: UpdateResult = await this.productService.updateProduct(id, req.body);
            if (!data.affected) {
                return this.httpResponse.NotFound(res, "There is an error in updating");
            }
            return this.httpResponse.Ok(res, data);
        } catch (e) {
            console.error(e);
            return this.httpResponse.Error(res, e);
        }
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data: DeleteResult = await this.productService.deleteProduct(id);
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