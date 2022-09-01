import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnNumericTransformer } from './column-numeric.transformer';

@Entity()
export class Product {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nombre: string;

	@Column({
		type: 'numeric',
		precision: 7,
		scale: 2,
		transformer: new ColumnNumericTransformer()
	})
	precio: number;

	constructor(partial?: Partial<Product>) {
		Object.assign(this, partial);
	}
}
