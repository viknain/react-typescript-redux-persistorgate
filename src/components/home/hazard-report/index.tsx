import * as React from 'react';
import './index.scss';
import ReportReview from '../../../assets/images/report-preview.png';
const HazardReport: React.FC<any> = () => {
  return (
    <div id="hazard-report">
      <div className="wrap-600">
        <div className="row">
          {/* Left content */}
          <div className="full-width">
            <img src={ReportReview} alt="risk-image" />
            <h2>A hazard report that makes sense</h2>
            <p>
              You need to understand all the risks before going ahead with an
              offer, but the information is fragmented and confusing. We’re here
              to clear that up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HazardReport;
