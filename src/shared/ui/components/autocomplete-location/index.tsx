import * as React from 'react';
import { googleMapAPiKey } from '../../../utils/constants';
import Autocomplete from 'react-google-autocomplete';
import { Location } from '../../../utils/types';
import { refineSearchedLocationObject } from '../../../utils/helper';

type Props = {
  className?: string;
  handleLocationSelect: (e: Location) => void;
};

const LocationAutoComplete: React.FC<Props> = ({ handleLocationSelect }) => {
  const handleSelect = (place: any) => {
    handleLocationSelect(refineSearchedLocationObject(place));
  };
  return (
    <div>
      <Autocomplete
        apiKey={googleMapAPiKey}
        onPlaceSelected={(place) => handleSelect(place)}
      />
    </div>
  );
};

export default LocationAutoComplete;
