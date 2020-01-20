import React from 'react';
import './index.css';

export const ProdTab = ({ prod }) => {
  return (
    <div key={prod.id} className="prod-tab">
      <img src={prod.img} />
      <span className="prod-name">{prod.name}</span>
      <span className="prod-price">{prod.price}</span>
    </div>
  );
};
