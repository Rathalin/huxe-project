import create from 'zustand';

interface DailyMoodIdState {
  dailyMoodId: string | null,
  setDailyMoodId: (id: string) => void,
}

export const useDailyMoodIdStore = create<DailyMoodIdState>(set => ({
  dailyMoodId: null,
  setDailyMoodId(id) {
    set({ dailyMoodId: id });
  },
}));
