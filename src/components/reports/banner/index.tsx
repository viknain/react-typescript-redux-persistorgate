import * as React from 'react';
import Button from '../../../shared/ui/components/button/index';
import Input from '../../../shared/ui/components/input/index';
const MainBanner: React.FC<any> = () => {
const [searchValue, setSearchValue] = React.useState('');
  return (
    <>
      <div id="rpbanner">
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

            <img src="/images/rpMbanner.jpg" className="mobile" />
            <img src="/images/rpbanner.jpg" className="hide" />
            <h1>35B King Edward St</h1>
            <p>St Lukes, Auckland</p>
            {/* <p>updated: 12/03/2021 </p> */}
            <div className="button-reports">
              <Button className="button-primary">Buy report - $49.99</Button>
              <Button className="button-secondary">Demo PDF</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
