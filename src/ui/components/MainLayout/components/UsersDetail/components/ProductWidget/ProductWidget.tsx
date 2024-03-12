import { IProduct } from '@/domain/models/IProduct';
import { FC, use } from 'react';

interface ProductWidgetProps {
  productPromise: Promise<IProduct | undefined>;
}
const ProductWidget: FC<ProductWidgetProps> = ({ productPromise }) => {
  const product = use(productPromise);
  return <h1>{product?.title}</h1>;
};

export default ProductWidget;
