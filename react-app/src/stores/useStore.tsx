import create from 'zustand';
import createMoodSlice, { MoodSlice } from './createMoodSlice';
import createNoteSlice, { NoteSlice } from './createNoteSlice';
import createPrioritySlice, { PrioritySlice } from './createPrioritySlice';

export const useStore = create<MoodSlice & PrioritySlice & NoteSlice>()((...a) => ({
  ...createMoodSlice(...a),
  ...createPrioritySlice(...a),
  ...createNoteSlice(...a)
}))
