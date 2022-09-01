import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

const products: Product[] = [
	{ id: 1, nombre: 'Producto 1', precio: 20 },
	{ id: 2, nombre: 'Producto 2', precio: 20 },
	{ id: 3, nombre: 'Producto 3', precio: 20 },
	{ id: 4, nombre: 'Producto 4', precio: 20 },
	{ id: 5, nombre: 'Producto 5', precio: 20 }
];

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product)
		private repo: Repository<Product>
	) {}

	findAll(): Promise<Product[]> {
		return Promise.resolve(products);
		// return this.repo.find();
	}

	findById(id: number): Promise<Product> {
		return this.repo.findOneBy({ id });
	}
}
