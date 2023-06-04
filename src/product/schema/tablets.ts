import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type TabletsDocument = Tablets & Document;
@Schema()
export class Tablets {

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

export const TabletsSchema = SchemaFactory.createForClass(Tablets);


