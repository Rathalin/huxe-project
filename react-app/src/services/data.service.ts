import request from 'graphql-request';
import { GRAPHQL_ENDPOINT } from '../graphql/endpoint';
import { graphql } from '../graphql/generated';
import { Enum_Emotion_Emotiontype } from '../graphql/generated/graphql';
import { today, tomorrow } from '../utils/date.util';

class DataService {

  private dailyMoodInitialized = false;
  private emotionsSeeded = false;

  public async seedEmotions(): Promise<void> {
    if (this.emotionsSeeded) return;
    this.emotionsSeeded = true;
    const emotionsData = await request(GRAPHQL_ENDPOINT, graphql(`
      query Emotions {
        emotions {
          data {
            id
          }
        }
      }
    `));
    if (emotionsData.emotions?.data.length === 0) {
      console.log('No emotions found in database. Seeding database.');
      const emotionsInput = [
        ...['Confident', 'Comfortable', 'Exited', 'Happy', 'Relaxed', 'Reliefed', 'Thankful']
          .map(name => ({ name, emotionType: Enum_Emotion_Emotiontype.Good })),
        ...['Anger', 'Anxiety', 'Disgust', 'Frustration', 'Pain', 'Sadness', 'Stress']
          .map(name => ({ name, emotionType: Enum_Emotion_Emotiontype.Bad })),
      ];
      for (const emotion of emotionsInput) {
        await request(GRAPHQL_ENDPOINT, graphql(`
          mutation CreateEmotion($emotion: EmotionInput!) {
            createEmotion(data: $emotion) {
              data {
                id
              }
            }
          }        
        `), { emotion });
      }
    }
  }

  public async initDailyMood(): Promise<string | null> {
    if (this.dailyMoodInitialized) {
      return null;
    }
    this.dailyMoodInitialized = true;
    const foundDailyMoodsData = await request(GRAPHQL_ENDPOINT, graphql(`
      query DailyMoodsBetween($startDate: DateTime!, $endDate: DateTime!) {
        dailyMoods(filters: { createdAt: { gte: $startDate, lt: $endDate } }) {
          data {
            id
          }
        }
      }
    `), {
      startDate: today,
      endDate: tomorrow,
    });
    if (foundDailyMoodsData.dailyMoods?.data?.length === 0) {
      console.log('Created DailyMood');
      const dailyMoodIdData = await request(GRAPHQL_ENDPOINT, graphql(`
        mutation CreateEmDailyMood($dailyMoodInput: DailyMoodInput!) {
          createDailyMood(data: $dailyMoodInput) {
            data {
              id
            }
          }
        }
      `), {
        dailyMoodInput: {}
      });
      return dailyMoodIdData.createDailyMood?.data?.id ?? null
    }
    return null;
  }
}

export const dataService = new DataService();
