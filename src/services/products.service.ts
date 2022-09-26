import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from 'src/entities/product.entity';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Prodcut 1',
      description: 'fdsfsd',
      price: 122,
      image: 'kjkj',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const productFound = this.findOne(id);
    if (productFound) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products[index] = {
        ...productFound,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    this.products.splice(index, 1);
    return true;
  }
}
