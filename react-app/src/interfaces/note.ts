import { Mood } from './mood';

export interface Note {
    id: string,
    note: string,
    date: Date,
    mood: Mood,
    emotion: string
  }
