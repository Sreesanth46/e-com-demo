import Card from '@/components/Card';
import { BackendUrl } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const getProducts = async () => {
  const response = await fetch(`${BackendUrl}/products`, {
    method: 'GET'
  });

  return response.json();
};

const ProductsPage = async () => {
  const products: IProducts[] = await getProducts();

  return (
    <div className="flex gap-4 flex-col md:flex-row md:flex-wrap p-10">
      {products.map(product => (
        <Link key={product._id} href={`/products/${product._id}`}>
          <Card
            id={product._id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={{ rate: product.rating }}
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
