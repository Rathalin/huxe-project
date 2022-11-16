class AuthService {
  public readonly API_URL = 'http://localhost:1337/api';

  public async login(identifier: string, password: string): Promise<LoginResponse> {
    const res = await fetch(`${this.API_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier,
        password,
      }),
    });
    return res.json();
  }

  public async register(email: string, username: string, password: string): Promise<RegisterResponse> {
    const res = await fetch(`${this.API_URL}/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, username, password, }),
    });
    return res.json();
  }
}

export const authService = new AuthService();

export interface StrapiError {
  error?: {
    status: number,
    name: string,
    message: string,
    details?: object,
  }
}

export interface StrapiMeta {
  meta: {
    pagination: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number,
    },
  },
}

export interface AuthUser {
  jwt?: string,
  user?: {
    id: string,
    username: string,
    email: string,
    provider: string,
    confirmed: boolean,
    blocked: boolean,
    createdAt: string,
    updatedAt: string,
  },
}

export type LoginResponse = AuthUser & StrapiError;

export type RegisterResponse = AuthUser & StrapiError;
