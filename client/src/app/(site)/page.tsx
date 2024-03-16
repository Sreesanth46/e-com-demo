import React from 'react';

function HomePage() {
  fetch('https://fakestoreapi.com/products/1')
    .then(res => res.json())
    .then(json => console.log(json));

  return <div>HomePage</div>;
}

export default HomePage;
