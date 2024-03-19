import Image from 'next/image';
import type React from 'react';
import StarIcon from './StarIcon';

const getProduct = async (id: string) => {
  const response = await fetch(`${process.env.BACKEND_URL}/products/${id}`, {
    method: 'GET'
  });

  return response.json();
};

const ProductDetail: React.FC<{ id: string }> = async ({ id }) => {
  const product: IProducts = await getProduct(id);
  const { rating = 1 } = product;

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt={product.title}
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              BRAND NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => (
                  <StarIcon key={star} fill={rating >= star} />
                ))}
              </span>
            </div>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
