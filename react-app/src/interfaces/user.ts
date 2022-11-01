import { ResponseError } from '../store/authStore';

export interface User {
  id: string,
  username: string,
  email: string,
  jwt: string,
}

export interface UserState {
  user: User | null,
  login: (identifier: string, password: string) => Promise<ResponseError | null>,
  register: (email: string, username: string, password: string) => Promise<ResponseError | null>,
  logout: () => Promise<ResponseError | null>
}
