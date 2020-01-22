import React from 'react';
import './rating.css';

const RatingStar = ({ rating }) => {
  const renderStars = count => {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<span key={i} className="star" />);
    }
    return stars;
  };

  return <>{renderStars(rating)}</>;
};

export default RatingStar;
