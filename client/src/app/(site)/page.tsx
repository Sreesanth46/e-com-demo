import Card from '@/components/Card';
import React from 'react';
import axios from 'axios';
import { ListProducts } from '@/components/ListProducts';

const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products', {
    method: 'GET'
  });

  return response.json();
};

async function HomePage() {
  const products: IProduct[] = await getProducts();
  return <ListProducts products={products} />;
}

export default HomePage;
