import { StateCreator } from 'zustand';

export interface LoginSlice {
  username: string,
  setUsername: (username: string) => void,
  loggedIn: boolean,
  setLoggedIn: (loggedIn: boolean) => void
}


const createLoginSlice: StateCreator<LoginSlice> = (set) => ({
  username: '',
  setUsername: (name) =>
    set(() => ({
      username: name
    })),
  loggedIn: false,
  setLoggedIn: (logged) =>
    set(() => ({
      loggedIn: logged
    })),
});

export default createLoginSlice;
