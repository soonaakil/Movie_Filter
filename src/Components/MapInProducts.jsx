import React from "react";

const MapInProducts = () => {
  let products = [
    { id: 1, title: "iphone-15", price: 150000 },
    { id: 1, title: "iphone-16", price: 170000 },
    { id: 1, title: "iphone-17", price: 180000 },
    { id: 1, title: "iphone-18", price: 200000 },
  ];

  return (
    <div>
      <h3>Show Products on Product Page.</h3>
      {products.map((data) => (
        <div key={data.id}>
            <h2>Product Title: {data.title}</h2>
            <h2>Product Price: {data.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default MapInProducts;
