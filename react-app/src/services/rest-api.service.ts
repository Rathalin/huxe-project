import axios from 'axios';
import { DailyMood } from '../interfaces/daily-mood';

export interface ResponseError {
  text: string,
}

class RestApiService {

  public readonly API_URL = 'http://localhost:1337/api';


  public async login(identifier: string, password: string) {
    const res = await axios.post(
      `${this.API_URL}/auth/local`,
      { identifier, password, }
    );
    return res.data;
  }

  public async register(email: string, username: string, password: string) {
    const res = await axios.post(
      `${this.API_URL}/auth/local/register`,
      { email, username, password, }
    );
    return res.data;
  }

  public getDateOfToday() {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  public async getDailyMoodOfToday() {
    const res = await axios.get(`${this.API_URL}/daily-moods?populate=*`);
    const dailyMood = res.data.data.find((data: any) =>
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


}

export const restApiService = new RestApiService();
