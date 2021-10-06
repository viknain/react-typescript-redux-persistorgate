import * as React from 'react';
import './index.scss';
import MindRestImage from '../../../assets/images/mind-ease.png';
const MindRest: React.FC<any> = () => {
  return (
    <div id="mind-rest">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width-img">
            <img src={MindRestImage} alt="mindrest-image" />
          </div>
          <div className="half-width">
            <div className="steps">Step 3</div>
            <h2>Put your mind at ease</h2>
            <p className="stepcontant">
              Purchase your new report with all the details in language that’s
              simple to understand, but doesn’t skimp on the details.
            </p>
            <br />
            <h6>What if there is an issue?</h6>
            <p>
              We’ll clearly highlight any risks to the property so you can
              understand what these mean. We also provide extra information on
              what to do about these, how to prevent them from causing damage
              and extra resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MindRest;
