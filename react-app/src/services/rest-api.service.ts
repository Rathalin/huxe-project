import axios from 'axios';
import { DailyMood, DailyMoodResponse, DailyMoodsResponse, LoginResponse, RegisterResponse } from './rest-api.responses';

class RestApiService {

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

  public async getDailyMoodOfToday() {
    const res = await fetch(`${this.API_URL}/daily-moods?populate=deep`);
    const data = await res.json() as DailyMoodsResponse;
    console.log('DailyMoods', data.data![0].attributes.createdAt);
    console.log(this.getDateOfToday());
    const dailyMood = data.data?.find(data =>
      data.attributes.createdAt.startsWith(this.getDateOfToday()));
    return dailyMood ?? null;
  }

  public async addDailyMood(dailyMood: DailyMood) {
    const res = await axios.post(
      `${this.API_URL}/daily-moods`,
      { data: dailyMood },
    );
    return null;
  }


  private getDateOfToday() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

}

export const restApiService = new RestApiService();
