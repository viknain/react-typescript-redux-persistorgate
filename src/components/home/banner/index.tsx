import * as React from 'react';
import './index.scss';
import Button from '../../../shared/ui/components/button/index';
import LocationAutoComplete from '../../../shared/ui/components/autocomplete-location';
import { Location } from '../../../shared/utils/types';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from "react-redux";
import { saveLocation } from '../../../store/actions/location-action';
import { ILocation } from '../../../store/reducer/location-reducer';

const BannerHome: React.FC<any> = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedAddress, setSelectedAddress] = React.useState<Location>({});
  const handleLocationSelect = (selectedAddress: Location) => {
    setSelectedAddress(selectedAddress);
  };
  const handleSearchClick = (e: any) => {
    e.preventDefault();
    if (selectedAddress) {
      dispatch(saveLocation(selectedAddress));
      history.push(
        selectedAddress.coveredLocation ? '/reports' : '/not-found-page'
      );
    } else {
      alert('Please select a valid address');
    }
  };
  return (
    <div id="banner">
      <div className="wrap">
        <div className="row">
          {/* banner content */}
          <div className="half-width">
            <h1>
              We know natural hazards.
              <br />
              Let us fill you in.
            </h1>
            <p>
              The affordable way to understand the natural risk to a property.
              We cover
              <b> Auckland, Hamilton, Tauranga, Wellington and Christchurch</b>
            </p>
            <div className="search-home">
              <LocationAutoComplete
                handleLocationSelect={(place) => handleLocationSelect(place)}
              ></LocationAutoComplete>
              <Button
                onClick={(e) => handleSearchClick(e)}
                className="button-primary"
              >
                Search
              </Button>
            </div>
          </div>
          {/* image banner */}
          <div className="half-width-img"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
