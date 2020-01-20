import React, { useState } from 'react';
import './index.css';

export const Carousel = props => {
  const [imgIndex, setImgIndx] = useState(0);

  return (
    <div className="Carousel-panel">
      <div className="img-wrap">
        <div className="img-cntr" style={{ left: `-${imgIndex * 750}px` }}>
          {props.imgs.map(({ url: img }, i) => (
            <img src={img} key={i} />
          ))}
        </div>
      </div>
      <div className="paginator">
        {props.imgs.map((_, i) => (
          <span
            onClick={() => setImgIndx(i)}
            key={i}
            className={`dot ${i === imgIndex ? 'active' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};
