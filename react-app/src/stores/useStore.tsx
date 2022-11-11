import create from 'zustand';
import createPrioritySlice, { PrioritySlice } from './createPrioritySlice';

export const useStore = create<PrioritySlice>()((...a) => ({
  ...createPrioritySlice(...a),
}))
