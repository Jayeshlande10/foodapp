import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) { }


  @Get('mobile')
  mobile() {
    return this.productService.findAll();
  }
  @Get('tablets')
  tablets() {
    return this.productService.tablets();
  }

}

