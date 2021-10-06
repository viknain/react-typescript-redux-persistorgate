import * as React from 'react';
import './index.scss';
import Input from '../../../shared/ui/components/input/index';
const MainBanner: React.FC<any> = () => {
const [searchValue, setSearchValue] = React.useState('');
  return (
    <>
      <div id="notfoundsearch">
        <div className="wrap">
          <div className="innerwrap">
            <div className="rpsearch">
              <Input
                className="inpit-search"
                placeholder="35B King Edward St, St Lukes"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <img src="/images/search.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
