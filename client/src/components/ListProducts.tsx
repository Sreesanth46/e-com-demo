'use client';

import type React from 'react';
import Card from './Card';
import { useState } from 'react';

type ListProductsProp = {
  products: IProduct[];
};

export const ListProducts: React.FC<ListProductsProp> = ({ products }) => {
  const [toggleGrid, setToggleGrid] = useState(false);
  return (
    <div className="space-y-4">
      <button
        type="button"
        onClick={() => setToggleGrid(prev => !prev)}
        className="ml-6 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Toggle to {toggleGrid ? '4' : '3'} in a row
      </button>
      <div className="flex gap-4 flex-col md:flex-row md:flex-wrap justify-center items-center">
        {products.map(product => (
          <div key={product.id} className={toggleGrid ? 'basis-1/4' : ''}>
            <Card {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};
