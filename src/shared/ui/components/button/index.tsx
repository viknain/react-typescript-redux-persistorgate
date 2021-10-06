import * as React from 'react';
import './button.scss';
type Props = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const Button: React.FC<Props> = ({ className, onClick, children }) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};

export default Button;
