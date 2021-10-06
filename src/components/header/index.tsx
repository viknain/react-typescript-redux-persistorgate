import * as React from 'react';
import BrandIcon from '../../assets/images/BrandIcon.svg';
import { useLocation } from 'react-router';
import { mainMenu } from '../../shared/utils/constants';
import './header.scss';
import HeaderMenuItem from './nav-items';

const Header: React.FC<any> = () => {
  const location = useLocation();
  return (
    <div id="header">
      <div className="wrap">
        <div className="row1">
          <div className="logo">
            <img src={BrandIcon} alt="logo" />
          </div>
          <div className="menutoggle">
            <img src="/images/menu.svg" />
          </div>
          <div className="nav hide">
            <ul>
              {mainMenu.map((item, index) => (
                <HeaderMenuItem
                  key={`main-menu-${index}`}
                  path={item.path}
                  label={item.label}
                  currentPath={location.pathname}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
