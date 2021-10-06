import * as React from 'react';
import { useHistory } from 'react-router';
import Button from '../../../shared/ui/components/button/index';
const RiskPreview: React.FC<any> = () => {
  const history = useHistory();
  return (
    <>
      <div id="riskpreview">
        <div className="wrap">
          <div className="row">
            <div className="half-width">
              <div>
                <img src="/images/plock.svg" />
                <h3>
                  Unlock report for <strong> $49.99</strong>
                </h3>
              </div>
            </div>
            <div className="half-width">
              <div className="reportbtn">
                <Button onClick={() => history.push('/reports')} className="button-primary">Buy report</Button>
              </div>
            </div>
          </div>

          <div className="report-priview">
            <h3>Your report preview:</h3>
            <h2>Flooding</h2>
          </div>
          <div className="flooding">
            <div className="f-tooltip">
              <ul>
                <li>Your risk, and how you compare to the city average</li>
              </ul>
            </div>
            <div className="flodingMain">
              <div className="lowf">
                <p>Low</p>
              </div>
              <div className="lowMf">
                <p>Low-med</p>
              </div>
              <div className="MedHf">
                <p>Med-high</p>
              </div>
              <div className="medlowf">
                <p>High</p>
              </div>
            </div>

            <div className="floodingrow">
              <img src="/images/disblerow.png" />
            </div>
            <div className="riskRow riskdesktop">
              <h2>Risk summary </h2>
              <img src="/images/risk.png" />
            </div>
            <div className="riskRow riskmobile">
              <div className="f-tooltip">
                <ul>
                  <li>Detailed Summary helps you understand the risk better</li>
                </ul>
              </div>
              <h2>Risk summary </h2>
              <img src="/images/rmob.png" />
            </div>
            <div className="mapRow">
              <div className="f-tooltip">
                <ul>
                  <li>Detailed maps of your area</li>
                </ul>
              </div>
              <h2>Hazard map</h2>
              <img src="/images/map-preview.jpg" />
            </div>
            <div className="takeaction">
              <div className="f-tooltip">
                <ul>
                  <li>Actions to take</li>
                </ul>
              </div>
              <img src="/images/action.png" className="actiond" />
              <img src="/images/mobilrisk.png" className="actionm" />
            </div>
          </div>
          <div className="acmobile">
            <div className="report-priview ">
              <h2>Sea level rise</h2>
            </div>
            <div className="flooding">
              <div className="f-tooltip">
                <ul>
                  <li>Your risk, and how you compare to the city average</li>
                </ul>
              </div>
              <div className="flodingMain">
                <div className="lowf">
                  <p>Low</p>
                </div>
                <div className="lowMf">
                  <p>Low-med</p>
                </div>
                <div className="MedHf">
                  <p>Med-high</p>
                </div>
                <div className="medlowf">
                  <p>High</p>
                </div>
              </div>

              <div className="floodingrow">
                <img src="/images/disblerow.png" />
              </div>
              <div className="riskRow">
                <h2>Risk summary </h2>
                <img src="/images/risk.png" />
              </div>
              <div className="mapRow">
                <div className="f-tooltip">
                  <ul>
                    <li>Detailed maps of your area</li>
                  </ul>
                </div>
                <h2>Hazard map</h2>
                <img src="/images/map-preview.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiskPreview;
