'use client';

import ProductDetail from '@/components/ProductDetail';
import { useParams } from 'next/navigation';
import React from 'react';

const ProductsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex gap-4 flex-col md:flex-row md:flex-wrap p-10">
      <ProductDetail id={id} />
    </div>
  );
};

export default ProductsPage;
