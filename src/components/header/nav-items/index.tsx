import * as React from 'react';
import { Link } from 'react-router-dom';
type Props = {
    label: string;
    path:  string;
    currentPath: string
  };

const HeaderMenuItem: React.FC<Props> = ({path,label,currentPath}) => {
  return (
    <li className={currentPath === path ? 'active' : ''}>
      <Link to={path}>{label}</Link>
    </li>
  );
};

export default HeaderMenuItem;
