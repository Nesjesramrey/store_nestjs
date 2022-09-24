import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return 'yo soy un filter';
  }
  // @Get('/products/:productid')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }

  //al utilizar el parametro dentro del decorador de params ya solo se llama el mismo en el return
  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  // @Get('/products/')
  // getProducts(@Query() params: any) {
  //   const { limit, offset } = params;
  //   return `product limit => ${limit} offset=> ${offset}`;
  // }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `product limit => ${limit} offset=> ${offset} brand=> ${brand}`;
  }
}
