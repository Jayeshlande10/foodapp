import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product';
import { Tablets, TabletsSchema } from './schema/tablets';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }, { name: Tablets.name, schema: TabletsSchema }])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
