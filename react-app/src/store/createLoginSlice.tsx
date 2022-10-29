import { StateCreator } from 'zustand';

export interface LoginSlice {
  username: string,
  setUsername: (username: string) => void,
}


const createLoginSlice: StateCreator<LoginSlice> = (set) => ({
  username: '',
  setUsername: (name) =>
    set(() => ({
      username: name
    })),
});

export default createLoginSlice;
