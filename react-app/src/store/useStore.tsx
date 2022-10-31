import create from 'zustand';
import createLoginSlice, { LoginSlice } from './createLoginSlice';
import createMoodSlice, { MoodSlice } from './createMoodSlice';
import createNoteSlice, { NoteSlice } from './createNoteSlice';
import createPrioritySlice, { PrioritySlice } from './createPrioritySlice';

export const useStore = create<MoodSlice & PrioritySlice & NoteSlice>()((...a) => ({
  // ...createLoginSlice(...a),
  ...createMoodSlice(...a),
  ...createPrioritySlice(...a),
  ...createNoteSlice(...a)
}))
