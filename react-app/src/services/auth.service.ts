import { LoginResponse, RegisterResponse } from './auth.responses';

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
