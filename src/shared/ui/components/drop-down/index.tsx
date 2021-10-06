import * as React from 'react';
import './button.scss';
type Option = {
  label: string;
  value: string;
};
type Props = {
  className?: string;
  listItems: Array<Option>;
};

const Dropdown: React.FC<Props> = ({ className, listItems, children }) => {
  const defaultClass = className ? `${className} rg-map` : `rg-map`;
  const bindOptions = (listItems: Array<Option>) => {
    return listItems.map((item, index) => (
      <option key={`option-${index}`} value={item.value}>
        {item.label}
      </option>
    ));
  };
  return <select className={className}>{bindOptions(listItems)}</select>;
};

export default Dropdown;
