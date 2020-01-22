import React from 'react';
import './info.css';
import RatingStar from './../ratingStar/ratingStar';

const Info = ({ info }) => {
  return (
    <div className={'pdp-info'}>
      <div className={'key-data'}>
        <label className={'tag-name'}>Product Name</label>
        <span className={'tag-info'}>{info.name}</span>
      </div>
      <div className={'key-data'}>
        <label className={'tag-name'}>Rating</label>
        <span className={'tag-info'}>
          <RatingStar rating={info.rating} />
        </span>
      </div>
      <div className={'key-data'}>
        <label className={'tag-name'}>Price</label>
        <span className={'tag-info'}>{info.price}</span>
      </div>
      <div className={'key-data'}>
        <label className={'tag-name'}>Description</label>
        <span className={'tag-info desc'}>{info.description}</span>
      </div>
    </div>
  );
};

export default Info;
