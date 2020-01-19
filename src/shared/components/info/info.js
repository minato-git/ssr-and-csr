import React from 'react';
import './info.css';

const Info = ({ info }) => {
  return (
    <div className={'pdp-info'}>
      <div className={'key-data'}>
        <label className={'tag-name'}>Product Name</label>
        <span className={'tag-info'}>{info.name}</span>
      </div>
      <div className={'key-data'}>
        <label className={'tag-name'}>Rating</label>
        <span className={'tag-info'}>{info.rating}</span>
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
