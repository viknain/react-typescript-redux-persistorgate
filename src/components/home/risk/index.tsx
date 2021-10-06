import * as React from 'react';
import './index.scss';
import RiskHomeImage from '../../../assets/images/risk-home.png';
import Button from '../../../shared/ui/components/button/index';
const RiskHome: React.FC<any> = () => {
  return (
    <div id="risk-home">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width">
            <h2>Know if your property is exposed to risk</h2>
            <p>
              Due to its geography and location, New Zealand is severely exposed
              to hazards. The effects of climate change will exacerbate a number
              of natural hazard risks. Make yourself aware of these risks, for
              <b> $49.99</b>.
            </p>
            <Button className="button-secondary-body">
              View an example report
            </Button>
          </div>
          <div className="half-width-img">
            <img src={RiskHomeImage} alt="Risk" />
            <div className="mobilewhite-bg"></div>
          </div>
        </div>
      </div>
      <div className="white-bg"></div>
    </div>
  );
};

export default RiskHome;
