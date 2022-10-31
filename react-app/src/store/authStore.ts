import create from 'zustand';

export interface User {
  id: string,
  username: string,
  email: string,
  jwt: string,
}

export interface ResponseError {
  text: string,
}

interface UserState {
  user: User | null,
  login: (identifier: string, password: string) => Promise<ResponseError | null>,
  register: (email: string, username: string, password: string) => Promise<ResponseError | null>,
  logout: () => Promise<ResponseError | null>
}

const API_URL = 'http://localhost:1337/api';
export const useAuthStore = create<UserState>(set => ({
  user: null,
  async login(identifier, password) {
    const res = await fetch(`${API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    const data = await res.json();
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
    const res = await fetch(`${API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    });
    const data = await res.json();
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
