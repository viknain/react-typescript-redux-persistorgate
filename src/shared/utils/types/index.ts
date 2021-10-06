export type Location = {
  coveredLocation?: boolean;
  formatted_address?: string;
  city?: string;
  country?: string;
  geometry?: Geomatry;
};

type Geomatry = {
  location: {
    lat: number;
    lng: number;
  };
};
