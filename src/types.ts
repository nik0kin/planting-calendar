// rename GrowingSchedule?
export interface PlantingCalendar {
  location: string;
  expert: string;
  source: string;
  publishDate?: string;

  averageLastFreeze: string; // Calendar Date
  averageFirstFreeze: string;

  plants: PlantPlantingSchedule[];

  notes?: string[];
}

export interface PlantPlantingSchedule {
  name: string;
  schedule: Interval | Interval[];
}

export interface Interval {
  start: string;
  end: string;
}
