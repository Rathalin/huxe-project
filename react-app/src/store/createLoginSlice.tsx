import { StateCreator } from 'zustand';

export interface User {
  id: string,
  username: string,
  email: string,
  jwt: string,
}
export interface LoginSlice {
  user: User | null,
  setUser: (user: User | null) => void,
}

const createLoginSlice: StateCreator<LoginSlice> = (set) => ({
  user: null,
  setUser: user =>
    set(() => ({
      user
    })),
});

export default createLoginSlice;
