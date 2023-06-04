import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type ProductDocument = Product & Document;
@Schema()
export class Product {

    @Prop()
    productId: number
    @Prop()
    productName: string
    @Prop()
    productCode: string
    @Prop()
    description: string
    @Prop()
    price: number
    @Prop()
    imageUrl: string
    @Prop()
    manufacturer: string
    @Prop()
    ostype: string
    @Prop()
    rating: number

}

export const ProductSchema = SchemaFactory.createForClass(Product);


