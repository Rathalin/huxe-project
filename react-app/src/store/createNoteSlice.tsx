import { StateCreator } from 'zustand'
import React from 'react';
import { Note } from '../interfaces/note';
import { v4 as uuidv4 } from "uuid";

export interface NoteSlice {
  notes: Note[]
  addNote: (note:string) => void;
  removeNote: (id: string) => void
}


const createNoteSlice: StateCreator<NoteSlice> = (set) => ({
    notes: [],
    addNote: (note: string) => {
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: uuidv4(),
          note,
          date: new Date(),
        } as Note,
      ],
    }));
  },
  removeNote: (id) => {
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    }));
  }
});

export default createNoteSlice;
