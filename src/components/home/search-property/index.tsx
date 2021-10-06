import * as React from 'react';
import './index.scss';
import SearchPropertyImage from '../../../assets/images/search-image.png';
const SearchProperty: React.FC<any> = () => {
  return (
    <div id="search-property">
      <div className="wrap">
        <div className="row">
          {/* Left content */}
          <div className="half-width-img">
            <img src={SearchPropertyImage} alt="search-image" />
          </div>
          <div className="half-width">
            <div className="steps">Step 1</div>
            <h2>Search your property</h2>
            <p className="stepcontant">Search and select the property you’re interested in.</p>
            <br />
            <h6>What parts of New Zealand do we cover?</h6>
            <p>
              Landcheck currently covers Auckland, Hamilton, Tauranga,
              Wellington and Christchurch.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchProperty;
