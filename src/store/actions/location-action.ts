import { Location } from "../../shared/utils/types";
import { LocationTypes } from "../types/location-types"

export const saveLocation = (location: Location): LocationTypes => ({
    type: "SAVE_LOCATION",
    payload: location,
  });

