import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
	constructor(private products: ProductsService) {}

	@Get()
	@Render('index')
	async index() {
		return {
			products: await this.products.findAll()
		};
	}

	@Get('/new')
	@Render('new-product')
	async newProduct() {}
}
