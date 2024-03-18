import Card from '@/components/Card';
import React from 'react';
import axios from 'axios';

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET'
  });

  return response.json();
};

const createUser = async () => {
  try {
    const res = await axios.post('/api/products');
  } catch (error) {
    console.log(error);
  }
};

async function HomePage() {
  const products: IProduct[] = await getProducts();
  await createUser();
  return (
    <div className="flex gap-4 flex-col md:flex-row md:flex-wrap justify-center items-center">
      {products.map(product => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default HomePage;
