import {
	Body,
	Controller,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Render
} from '@nestjs/common';
import { Product } from './products/product.entity';
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

	@Post()
	@Render('index')
	async createProduct(@Body() dto: Product) {
		await this.products.save(new Product(dto));

		return this.index();
	}

	@Get('/new')
	@Render('new-product')
	async productForm() {}

	@Post('/delete-product/:id')
	async deleteProduct(@Param('id', ParseIntPipe) id: number) {
		const product = await this.products.findById(id);
		await this.products.delete(product);

		return { message: 'done' };
	}
}
