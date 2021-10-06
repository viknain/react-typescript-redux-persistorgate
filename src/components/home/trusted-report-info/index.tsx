import * as React from 'react';
import './index.scss';
import SourceImage from '../../../assets/images/source.png';
import RiskImage from '../../../assets/images/risk-image.png';
import InfoImage from '../../../assets/images/Info-image.png';
const TrustedHome: React.FC<any> = () => {
  return (
    <div id="trusted-home">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width">
            <img src={RiskImage} alt="risk-image" />
            <h2>A reliable, trusted report</h2>
            <p>
              Visiting the site, talking with the agent and discussing with
              friends & family are all important. But they don’t give you the
              most accurate picture of your natural hazard risk.
            </p>
            <h4>Our sources:</h4>
            <img src={SourceImage} alt="source" />
          </div>
          <div className="half-width-img">
            <img src={InfoImage} alt="info" />
            <h2>Information you can understand</h2>
            <p>
              Council LIM files are hard to understand and other property
              reports don’t have our lazer focus on natural hazard accuracy.
              Become the hazard expert with Landcheck.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedHome;
