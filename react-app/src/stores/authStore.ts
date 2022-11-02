import create from 'zustand';
import { User } from '../interfaces/user';
import { ResponseError, restApiService } from '../services/rest-api.service';

interface UserState {
  user: User | null,
  login: (identifier: string, password: string) => Promise<ResponseError | null>,
  register: (email: string, username: string, password: string) => Promise<ResponseError | null>,
  logout: () => Promise<ResponseError | null>
}


// TODO: Remove
(async () => {
  console.log('Todays Daily Mood:', await restApiService.getDailyMoodOfToday());
})();

export const useAuthStore = create<UserState>(set => ({
  user: null,
  async login(identifier, password) {
    const data = await restApiService.login(identifier, password);
    if (data.error) {
      return {
        text: data.error.message,
      };
    }
    set({
      user: {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        jwt: data.jwt,
      }
    });
    return null;
  },
  async register(email, username, password) {
    const data = await restApiService.register(email, username, password);
    if (data.error) {
      return {
        text: data.error.message,
      };
    }
    return null;
  },
  async logout() {
    set({ user: null });
    return null;
  },
}));
