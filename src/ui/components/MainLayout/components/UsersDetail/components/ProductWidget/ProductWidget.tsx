import { IProduct } from '@/domain/models/IProduct';
import { FC, use } from 'react';

interface ProductWidgetProps {
  productPromise: Promise<IProduct | undefined>;
}
const ProductWidget: FC<ProductWidgetProps> = ({ productPromise }) => {
  const product = use(productPromise);

  console.log(product);

  return (
    <div className="card card-side bg-gray-100 shadow-xl">
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-2xl font-bold bg-indigo-300 rounded-lg mx-3 py-1 text-gray-700">
          Favourite product
        </h1>

        <div>
          <figure>
            <img src={product?.thumbnail} alt={`photo-${product?.id}`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product?.title}</h2>

            <div className="flex flex-col gap-4">
              <p>{product?.brand}</p>
              <p>{product?.category}</p>
              <p>{product?.description}</p>
              <p>{product?.discountPercentage}</p>
              <p>{product?.discountPercentage}</p>
            </div>

            <div className="carousel w-full">
              {product?.images.map((image, index) => {
                return (
                  <div
                    key={`image-${product.id}-${index}`}
                    id={`product-image-${index}`}
                    className="carousel-item w-full"
                  >
                    <img src={image} className="w-full" />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {product?.images.map((image, index) => {
                return (
                  <a key={`link-image-${index}`} href={`#product-image-${index}`} className="btn btn-xs">
                    {index}
                  </a>
                );
              })}
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;
