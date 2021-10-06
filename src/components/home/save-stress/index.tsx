import * as React from 'react';
import './index.scss';
import StressImage from '../../../assets/images/stress-money.png';
import CheckMark from '../../../assets/images/check.png';
import Button from '../../../shared/ui/components/button/index';
import Input from '../../../shared/ui/components/input/index';
const StressProperty: React.FC<any> = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div id="stress-property">
      <div className="wrap-full">
        <div className="row">
          {/* Left content */}
          <div className="half-width-img">
            <img src={StressImage} alt="search-image" />
          </div>
          <div className="half-width">
            <div>             
              <p className="steps"> Why purchase </p>
            </div>
            <h2>Save stress and money</h2>
            <p>
              Failing to clearly understand your risk from natural events could
              lead to: higher insurance premiums, and replacement and rebuild
              costs. Not to mention the stress of these losses. Avoid these and
              other costs down the line by understanding things up front.
            </p>
            <br />
            <ul>
              <li>
                <span>$</span>Insurance claim excess
              </li>
              <li>
                <span>$$</span>Non-EQC cover excess e.g. landscape damage
              </li>
              <li>
                <span>$$$</span>Insurance premium increases
              </li>
            </ul>
            <br />
            <ul>
              <li>
                <span>
                  <img src={CheckMark} alt="check" />
                </span>
                <b>Landcheck Report: $49.99</b>
              </li>
            </ul>
            <br />
            <div className="search-home">
              <Input
                className="inpit-search"
                placeholder="Search for an address"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <Button className="button-primary">Search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StressProperty;
