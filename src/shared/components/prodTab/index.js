import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export const ProdTab = ({ prod }) => {
  return (
    <Link key={prod.id} to={`/pdp/${prod.id}`} className="prod-tab">
      <img src={prod.img} />
      <span className="prod-name">{prod.name}</span>
      <span className="prod-price">{prod.price}</span>
    </Link>
  );
};
