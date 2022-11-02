import { StateCreator } from 'zustand'
import { Mood } from '../interfaces/mood';
import { v4 as uuidv4 } from 'uuid';

export interface MoodSlice {
  moods: Mood[],
  addMood: (type: string) => void,
  removeMood: (id: string) => void,
}


const createMoodSlice: StateCreator<MoodSlice> = (set) => ({
  moods: [],
  addMood: (type: string) => {
    set((state) => ({
      moods: [
        ...state.moods,
        {
          id: uuidv4(),
          type,
          date: new Date(),
        } as Mood,
      ],
    }));
  },
  removeMood: (id) => {
    set((state) => ({
      moods: state.moods.filter((mood) => mood.id !== id),
    }));
  }
});

export default createMoodSlice;
