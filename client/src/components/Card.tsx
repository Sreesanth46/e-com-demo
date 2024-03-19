import Image from 'next/image';
import React from 'react';
import CartIcon from './CartIcon';
import StarIcon from './StarIcon';

interface AppCardProp {
  id: number | string;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating: IRating;
}

interface IRating {
  rate?: number;
  count?: number;
}

export default function Card(props: AppCardProp) {
  const {
    image,
    title,
    category,
    description,
    price,
    rating: { rate = 0 }
  } = props;
  const discount = Math.floor(Math.random() * 21) + 10;
  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <Image
          className="rounded-t-lg object-contain"
          src={image}
          alt={title}
          width={300}
          height={300}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {discount}% OFF
        </span>
      </div>
      <div className="mt-4 px-5 pb-5">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${Math.floor(price * ((100 - discount) / 100))}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${Math.floor(price)}
            </span>
          </p>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map(star => (
              <StarIcon key={star} fill={Math.ceil(rate) > star} />
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {Math.ceil(rate)}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="flex items-center w-full justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <CartIcon />
          Add to cart
        </button>
      </div>
    </div>
  );
}
