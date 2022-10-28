import { StateCreator } from 'zustand'
import React from 'react';
import { Mood } from '../interfaces/mood';
import { v4 as uuidv4 } from "uuid";

export interface MoodSlice {
  moods: Mood[]
  addMood: (name:string) => void;
  removeMood: (id: string) => void
}


const createMoodSlice: StateCreator<MoodSlice> = (set) => ({
  moods: [],
  addMood: (name: string) => {
    set((state) => ({
      moods: [
        ...state.moods,
        {
          id: uuidv4(),
          name,
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
