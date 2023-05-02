import React, { useState } from "react";

function PlantCard({ item }) {

  const [inStock, setInStock] = useState(true);

  function stockSwap() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={item.image} alt={item.name} />
      <h4>{item.name}</h4>
      <p>Price: {item.price}</p>
      {inStock ? (
        <button onClick={stockSwap} className="primary">In Stock</button>
      ) : (
        <button onClick={stockSwap}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
