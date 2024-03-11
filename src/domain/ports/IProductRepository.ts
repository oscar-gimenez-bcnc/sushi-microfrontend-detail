import { type IProduct } from '../models/IProduct';

export interface IProductRepository {
  get: (productId: string) => Promise<IProduct | undefined>;
}
