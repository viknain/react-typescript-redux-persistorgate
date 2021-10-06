import * as React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap: React.FC<any> = ({ children, ...props }) => {
  const defaultClass = props.className ? `${props.className} rg-map` : `rg-map`
  return (
    <div className={defaultClass}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
};
export default GoogleMap;
