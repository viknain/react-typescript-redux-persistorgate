import * as React from 'react';
import './index.scss';
import ClarityRiskImage from '../../../assets/images/clarity-risk.png';
import RiskIcon from '../../../assets/images/RiskIcon.png';
import LowCostIcon from '../../../assets/images/low-cost.png';
import Button from '../../../shared/ui/components/button/index';
import Input from '../../../shared/ui/components/input/index';
const UnsurePoints: React.FC<any> = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div id="unsure-points">
      <div className="wrap">
        <div className="unsure-header">
          <h2>Still unsure? It’s simple</h2>
        </div>
        <div className="row">
          <div className="four-tag">
            <div className="icon">
              <img src={ClarityRiskImage} />
              <h3>Get clarity on your risks</h3>
              <p>
                An easy to understand report that will inform you of exactly
                what risks your property is exposed to.
              </p>
            </div>
          </div>
          <div className="four-tag">
            <img src={RiskIcon} />
            <h3>Know what the risks mean</h3>
            <p>
              Not all risks are made equal. Understand your property risk
              profile with clear descriptions that put things in context and
              provide mitigation options.
            </p>
          </div>
          <div className="four-tag">
            <img src={LowCostIcon} />
            <h3>Low cost and fast</h3>
            <p>
              No long wait times. No massive cost. Just clear transparent hazard
              information to help you get the house you love.
            </p>
          </div>
        </div>
        <div className="divder"></div>
      </div>
      {/* Search */}
      <div className="wrap-600 unsure-search">
        <div className="full-width">
          <p>
            Don’t waste your money, forget paying for or trying to understand
            the LIM at this stage of your property jouney. Landcheck is your
            first check you should do.
          </p>
          <div className="search-home">
            <Input
              className="inpit-search"
              placeholder="Find your address"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button className="button-primary">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsurePoints;
