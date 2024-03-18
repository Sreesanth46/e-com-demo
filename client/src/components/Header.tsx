import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="flex p-4 items-center">
      <h1 className="font-bold text-2xl">E-com</h1>
      <div className="flex-auto" />
      <nav className="flex gap-2 text-sm">
        {['Fashion', 'Lifestyle'].map(link => (
          <Link key={link} href={link} className="capitalize">
            {link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
