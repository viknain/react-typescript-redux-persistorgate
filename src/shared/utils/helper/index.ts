import { locationCovered } from '../constants';
import { Location } from '../types';

// Format the address selected from goog autocomplete api
// eslint-disable-next-line
export const refineSearchedLocationObject = (location: any) => {
  const formattedAddress: Location = {};
  try {
    const address = location.address_components;
    if (address?.length > 0) {
      address.forEach((element: any) => {
        if (
          element.types.indexOf('locality') >= 0 ||
          element.types.indexOf('administrative_area_level_1') >= 0
        ) {
          const cityName = element.long_name;
          formattedAddress.coveredLocation = locationCovered.includes(cityName);
          formattedAddress.city = cityName;
        }
        if (element.types.indexOf('country') >= 0) {
          formattedAddress.country = element.long_name;
        }
      });
      formattedAddress.formatted_address = location.formatted_address;
      formattedAddress.geometry = location.geometry;
    } else {
      formattedAddress.coveredLocation = false;
    }
  } catch (err) {
    formattedAddress.coveredLocation = false;
  }

  return formattedAddress;
};
