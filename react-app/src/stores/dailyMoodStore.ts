import create from 'zustand';
import { DailyMood, ResponseError } from '../services/rest-api.responses';
import { restApiService } from '../services/rest-api.service';

interface DailyMoodState {
  dailyMood: DailyMood | null,
  init: () => Promise<void>,
  addDailyMood: (dailyMood: DailyMood) => Promise<ResponseError | null>,
}

export const useDailyMoodStore = create<DailyMoodState>(set => ({
  dailyMood: null,
  async init() {
    const data = await restApiService.getDailyMoodOfToday();
    if (data != null) {
      set({
        dailyMood: data,
      });
    }
  },
  async addDailyMood(dailyMood) {
    return restApiService.addDailyMood(dailyMood);
  },
}));
