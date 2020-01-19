import React from 'react';
import './description.css';
import Info from './../info/info';

const Description = ({ info }) => {
  return (
    <div className={'pdp-desc'}>
      <div className={'pdp-image'}>
        <img src={info.img} />
      </div>
      <Info info={info} />
    </div>
  );
};

export default Description;
