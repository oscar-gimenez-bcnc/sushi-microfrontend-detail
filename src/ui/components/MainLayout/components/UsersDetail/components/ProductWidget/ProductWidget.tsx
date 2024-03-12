import { IProduct } from '@/domain/models/IProduct';
import { FC, use } from 'react';
import { UsersDetailContext } from '../../contexts/UsersDetailContext';

interface ProductWidgetProps {
  productPromise: Promise<IProduct | undefined>;
}
const ProductWidget: FC<ProductWidgetProps> = ({ productPromise }) => {
  const product = use(productPromise);
  const context = use(UsersDetailContext);

  console.log(product);

  return (
    <div className="card card-side bg-gray-100 shadow-xl">
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold bg-green-200 rounded-lg mx-3 py-1 text-gray-800">
          Favourite product
        </h1>

        <div>
          <figure className="w-full p-8">
            <img src={product?.thumbnail} alt={`photo-${product?.id}`} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product?.title}
              <div className="badge badge-secondary">{product?.category}</div>
              <div className="badge badge-primary">{product?.brand}</div>
            </h2>

            <p>{product?.description}</p>

            <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
              {product?.images.map((image, index) => {
                return (
                  <div
                    key={`image-${product.id}-${index}`}
                    id={`product-image-${index}`}
                    className="carousel-item w-full"
                  >
                    <img src={image} className="rounded-box" />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {product?.images.map((image, index) => {
                return (
                  <a key={`link-image-${index}`} href={`#product-image-${index}`} className="btn btn-xs">
                    {index + 1}
                  </a>
                );
              })}
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Buy this to {context.user?.name ?? <div className="skeleton h-6 w-28"></div>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductWidget;
