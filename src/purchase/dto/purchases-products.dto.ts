import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { ProductEntity } from "../../product/entities/product.entity";
import { PurchaseEntity } from "../entities/purchase.entity";

export class PurchaseProductDTO extends BaseDTO {
    @IsNotEmpty()
    quantityProduct!: number;

    @IsNotEmpty()
    totalPrice!: number;

    @IsNotEmpty()
    purchase!: PurchaseEntity;

    @IsNotEmpty()
    product!: ProductEntity;
}