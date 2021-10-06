import * as React from 'react';
import './index.scss';
import PreviewPropertyImage from '../../../assets/images/preview-image.png';
const PreviewProperty: React.FC<any> = () => {
  return (
    <div id="preview-property">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width">
            <div className="steps">Step 2</div>
            <h2>Check the preview</h2>
            <p className="stepcontant">
              Once you’ve found your property, confirm the location on the
              preview screen. You’ll be able to see the range of hazards
              included in your report.
            </p>
            <h6>Why are certain risks not available for some areas?</h6>
            <p>
              Our data is currently based on council and government institution
              data. Some areas are not covered by this data for certain risks.
              e.g Wellington does not have liquefaction models.
            </p>
          </div>
          <div className="half-width-img">
            <img src={PreviewPropertyImage} alt="preview-property-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewProperty;
