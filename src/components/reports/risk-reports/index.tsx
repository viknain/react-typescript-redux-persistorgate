import * as React from 'react';
import Button from '../../../shared/ui/components/button/index';

const RiskReport: React.FC<any> = () => {
  return (
    <>
      <div id="riskRp">
        <div className="wrap">
          <h2>Risks included in report</h2>
          <Button className="">
            <img src="/images/lock.svg" />
            Unlock full version of your report to see each risks level and
            details
          </Button>
          <div className="row">
            <div className="half-width">
              <div>
                <p>Flooding</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Severe Wind</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Placeholder</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Volcanic</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Tsunami</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Placeholder</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Earthquake</p>
              </div>
            </div>
            <div className="half-width">
              <div>
                <p>Coastal Inundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskReport;
