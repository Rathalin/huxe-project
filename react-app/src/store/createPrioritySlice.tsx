import { StateCreator } from 'zustand'
import React from 'react';
import { v4 as uuidv4 } from "uuid";
import { Priority } from '../interfaces/priority';

export interface PrioritySlice {
  priorities: Priority[]
  addPriority: (title: string, weeklyGoal:number) => void;
  removePriority: (id: string) => void;
}


const createPrioritySlice: StateCreator<PrioritySlice> = (set) => ({
  priorities: [],
  addPriority: (title: string, weeklyGoal:number) => {
    set((state) => ({
      priorities: [
        ...state.priorities,
        {
          id: uuidv4(),
          title,
          rank: 0,
          weeklyGoal
        } as Priority,
      ],
    }));
  },
  removePriority: (id) => {
    set((state) => ({
      priorities: state.priorities.filter((priority) => priority.id !== id),
    }));
  }
});

export default createPrioritySlice;
