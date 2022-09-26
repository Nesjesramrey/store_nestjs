import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('filter')
  getProductFilter() {
    return {
      message: 'yo soy un filter',
    };
  }
  // @Get('/products/:productid')
  // getProduct(@Param() params: any) {
  //   return `product ${params.id}`;
  // }

  //al utilizar el parametro dentro del decorador de params ya solo se llama el mismo en el return
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(@Res() response: Response, @Param('productId') productId: string) {
    response.status(200).send({
      message: `product ${productId}`,
    });
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
    return {
      message: `product limit => ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      message: 'update',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'delete',
      id,
    };
  }
}
