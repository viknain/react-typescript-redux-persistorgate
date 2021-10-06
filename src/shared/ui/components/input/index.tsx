import * as React from 'react';
import './input.scss';
type Props = {
  className?: string;
  placeholder: string,
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const Input: React.FC<Props> = ({ className, value, onChange, placeholder }) => {
  const parentClass = className ? `${className} input` : 'input';
  return <input className={parentClass} onChange={onChange} value={value} placeholder={placeholder} />;
};

export default Input;
