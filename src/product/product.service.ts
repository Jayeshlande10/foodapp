import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { productData, tablets } from './fileHandler/file.handle';
import { Product, ProductDocument } from './schema/product';
import { Tablets, TabletsDocument } from './schema/tablets';

@Injectable()
export class ProductService {

  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(Tablets.name) private tabletsModel: Model<TabletsDocument>
  ) {
  }

  async findAll(): Promise<any> {
    const result = await this.productModel.find();
    if (result.length) {
      return result
    }
    return await this.productModel.create(productData)
  }

  async tablets(): Promise<any> {
    const result = await this.tabletsModel.find();
    if (result.length) {
      return result
    }
    return await this.tabletsModel.create(tablets)
  }

}
