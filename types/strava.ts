export interface StravaTokenResponse {
  token_type: string;
  access_token: string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  athlete: StravaAthlete;
}

export interface StravaAthlete {
  id: number;
  username: string | null;
  resource_state: number;
  firstname: string;
  lastname: string;
  city: string | null;
  state: string | null;
  country: string | null;
  sex: string | null;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
}

export interface StravaActivity {
  id: number;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: string;
  sport_type: string;
  workout_type: number | null;

  start_date: string;
  start_date_local: string;
  timezone: string;

  average_speed: number;
  max_speed: number;

  average_heartrate?: number;
  max_heartrate?: number;
  heartrate_opt_out?: boolean;
  has_heartrate?: boolean;

  start_latlng?: [number, number];
  end_latlng?: [number, number];

  map: StravaMap;

  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;

  calories?: number;

  // Flags
  manual: boolean;
  private: boolean;
  commute: boolean;
  trainer: boolean;
  flagged: boolean;

  // Gear
  gear_id?: string;

  // Splits
  splits_metric?: StravaSplit[];
  splits_standard?: StravaSplit[];

  // Segment efforts
  segment_efforts?: StravaSegmentEffort[];
}

export interface StravaMap {
  id: string;
  summary_polyline: string | null;
}

export interface StravaSplit {
  distance: number;
  elapsed_time: number;
  moving_time: number;
  split: number;
  elevation_gain: number;
  pace_zone: number;
}

export interface StravaSegmentEffort {
  id: number;
  name: string;
  distance: number;
  elapsed_time: number;
  moving_time: number;
  start_date: string;
  start_date_local: string;
  average_heartrate?: number;
  max_heartrate?: number;
}
