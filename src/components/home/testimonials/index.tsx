import * as React from 'react';
import './index.scss';
import Slider from 'react-slick';

import ExtraImage from '../../../assets/images/extra.png';
const settings = {
  dots: true,
  slidesToShow: 1,
  infinite: false,
  slidesToScroll: 1,
  variableWidth: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false,
      },
    },
  ],
};
const TestimonialsProperty: React.FC<any> = () => {
  return (
    <div id="testimonials-property">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width">
            <Slider {...settings}>
              <div>
                <h3>Why our customers love Landcheck</h3>
                <div className="hide_n">
                  <img src={ExtraImage} alt="extra" />
                </div>
                <p>
                  “This report was cheap and fast to get, it gave me the
                  confidece to move ahead with my due diligence.”
                </p>
                <div className="name">Christian, Auckland </div>
              </div>
              <div>
                <h3>Why our customers love Landcheck</h3>
                <div className="hide_n">
                  <img src={ExtraImage} alt="extra" />
                </div>
                <p>
                  “This report was cheap and fast to get, it gave me the
                  confidece to move ahead with my due diligence.”
                </p>
                <div className="name">Christian, Auckland </div>
              </div>
              <div>
                <h3>Why our customers love Landcheck</h3>
                <div className="hide_n">
                  <img src={ExtraImage} alt="extra" />
                </div>
                <p>
                  “This report was cheap and fast to get, it gave me the
                  confidece to move ahead with my due diligence.”
                </p>
                <div className="name">Christian, Auckland </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsProperty;
