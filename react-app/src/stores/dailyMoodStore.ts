import create from 'zustand';
import { DailyMood, StrapiError } from '../services/rest-api.responses';
import { restApiService } from '../services/rest-api.service';

interface DailyMoodState {
  dailyMood: DailyMood | null,
  init: () => Promise<void>,
  addDailyMood: (dailyMood: DailyMood) => Promise<StrapiError | null>,
}

export const useDailyMoodStore = create<DailyMoodState>(set => ({
  dailyMood: null,
  async init() {
    const data = await restApiService.getDailyMoodOfToday();
    console.log('Setting DailyMood to', data);
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
