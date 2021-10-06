import * as React from 'react';
import './index.scss';
import MapAreaImage from '../../../assets/images/Map.png';
import MapAreaMImage from '../../../assets/images/mobile-map.png';
// Google map component
import Marker from '../../../shared/ui/components/map-marker';
import GoogleMap from '../../../shared/ui/components/google-map';
// Location defaults
import {
  defaultMapCenterPoint,
  dummyLocations,
} from '../../../shared/utils/constants';
const MapAreaHome: React.FC<any> = () => {
  return (
    <div id="map-area">
      <div className="wrap-600">
        <div className="row">
          {/* Left content */}
          <div className="full-width">
            <div className="tyu">Don’t be unawared</div>
            <h2>Know your suburb</h2>
            <p>
              Know what to look for when viewing a property by viewing the range
              of risks per suburb.
            </p>
          </div>
        </div>
      </div>
      <div className="wrap-1000">
        <div className="row">
          <div className="full-width">
          <img src={MapAreaImage} alt="map-image" className="dmap"/>
            <img src={MapAreaMImage} alt="map-image"  className="mobilemap"/>
            <GoogleMap
              defaultZoom={10}
              defaultCenter={defaultMapCenterPoint}
              yesIWantToUseGoogleMapApiInternals
            >
              {dummyLocations.map((place) => (
                <Marker
                  key={place.id}
                  text={place.name}
                  lat={place.lat}
                  lng={place.lan}
                />
              ))}
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapAreaHome;
