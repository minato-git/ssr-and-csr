import React from 'react';
import './index.css';
import { ProdTab } from '../prodTab';

export const ProdList = ({ products, onLoadMore }) => {
  return (
    <div className="prod-list-cntr">
      <div className="prod-list">
        {products.map(prod => (
          <ProdTab key={prod.id} prod={prod} />
        ))}
      </div>
      <div className="cta-more">
        <button onClick={onLoadMore}>Load More</button>
      </div>
    </div>
  );
};
