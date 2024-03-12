import { type IProduct } from '@/domain/models/IProduct';
import { type IProductRepository } from '@/domain/ports/IProductRepository';

export const getProduct = (productRepository: IProductRepository, productId?: string) => {
  return async (): Promise<IProduct | undefined> => {
    if (productId === '' || productId === undefined) {
      throw new Error('No productId found');
    }
    try {
      return await productRepository.get(productId);
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error;
    }
  };
};
