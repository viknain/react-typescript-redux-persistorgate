import * as React from 'react';
import { Link } from 'react-router-dom';
import BrandIcon from '../../assets/images/BrandIcon.png';
import './footer.scss';

const Footer: React.FC<any> = () => {
  return (
    <div id="footer">
      <div className="wrap">
        <div className="footerrow">
          {/* Left content */}
          <div className="half-width-img">
            <img src={BrandIcon} alt="mindrest-image" />
          </div>
          <div className="half-width">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="copyrow">
          <div className="copyleft">
            <p>© Copyright 2021 Tonkin + Taylor. All rights reserved.</p>
          </div>
          <div className="copyright">
            <Link to="/terms">Terms & conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
