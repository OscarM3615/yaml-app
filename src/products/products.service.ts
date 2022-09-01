import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product)
		private repo: Repository<Product>
	) {}

	findAll(): Promise<Product[]> {
		return this.repo.find();
	}

	findById(id: number): Promise<Product> {
		return this.repo.findOneBy({ id });
	}
}
