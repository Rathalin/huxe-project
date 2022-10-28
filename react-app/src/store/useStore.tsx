import create from 'zustand';
import createLoginSlice, { LoginSlice } from './createLoginSlice';
import createMoodSlice, { MoodSlice } from './createMoodSlice';
import createPrioritySlice, { PrioritySlice } from './createPrioritySlice';

export const useStore = create<LoginSlice & MoodSlice & PrioritySlice>()((...a) => ({
  ...createLoginSlice(...a),
  ...createMoodSlice(...a),
  ...createPrioritySlice(...a)
}));
