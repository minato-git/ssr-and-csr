import React from 'react';
import './Header.css';
import backImage from './back.png';
import {Link} from 'react-router-dom';
const Header = (props) => {
  console.log('header props',props);
  const showGoToHome = props.match && props.match.path.includes('/pdp/') && props.match.params.id;
  return (
    <div>
      {showGoToHome && (
        <Link to={'/'}>
          <img src={backImage} />
        </Link>
      )}
      <header className={'header'}>Tokopedia</header>
    </div>
  );
};

export default Header;
