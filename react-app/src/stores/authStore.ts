import create from 'zustand';
import { User } from '../interfaces/user';
import { LoginResponse, RegisterResponse, ResponseError } from '../services/rest-api.responses';
import { restApiService } from '../services/rest-api.service';

interface UserState {
  user: User | null,
  login: (identifier: string, password: string) => Promise<LoginResponse>,
  register: (email: string, username: string, password: string) => Promise<RegisterResponse>,
  logout: () => Promise<void>
}


// TODO: Remove
// (async () => {
//   console.log('Todays Daily Mood:', await restApiService.getDailyMoodOfToday());
// })();

export const useAuthStore = create<UserState>(set => ({
  user: null,
  async login(identifier, password) {
    const res = await restApiService.login(identifier, password);
    if (res.error == null && res.user != null && res.jwt != null) {
      set({
        user: {
          id: res.user.id,
          username: res.user.username,
          email: res.user.email,
          jwt: res.jwt,
        }
      });
    }
    return res;
  },
  async register(email, username, password) {
    const res = await restApiService.register(email, username, password);
    if (res.error == null && res.user != null && res.jwt != null) {
      set({
        user: {
          id: res.user.id,
          username: res.user.username,
          email: res.user.email,
          jwt: res.jwt,
        }
      });
    }
    return res;
  },
  async logout() {
    set({ user: null });
  },
}));
