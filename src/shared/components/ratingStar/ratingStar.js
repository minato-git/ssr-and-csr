import React from 'react';
import './rating.css';

const RatingStar = ({ rating }) => {
  console.log(rating);

  const renderStars = count => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<span key={i} className="star"></span>);
    }
    return stars;
  };

  return <>{renderStars(rating)}</>;
};

export default RatingStar;
