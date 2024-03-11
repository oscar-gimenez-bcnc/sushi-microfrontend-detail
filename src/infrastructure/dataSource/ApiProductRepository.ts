import { IProduct } from '@/domain/models/IProduct';
import { IProductRepository } from '@/domain/ports/IProductRepository';

export const createApiProductRepository = (): IProductRepository => {
  const get = async (productId: string): Promise<IProduct | undefined> => {
    const source = `https://dummyjson.com/products/${productId}`;

    const res = await fetch(source);
    if (!res.ok) {
      throw new Error(`HTTP error ${res.status} obtained from ${source}.`);
    }

    const user = await res.json();

    return user;
  };

  return { get };
};
