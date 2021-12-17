// rename GrowingSchedule?
export interface PlantingCalendar {
  location: string;
  expert: string;
  source: string;
  publishDate?: string;

  averageLastFreeze: string; // Calendar Date
  averageFirstFreeze: string;
}
