export const getDaysPerMonth = (year:number, month: number) => {
  return new Date(year, month, 0).getDate();
}

export const MOODS = {
  veryGood: 'Very Good',
  good: 'Good',
  neutral: 'Neutral',
  bad: 'Bad',
  veryBad: 'Very Bad',
};

export const BADEMOTIONS = {
  sadness: 'sadness',
  fear: 'fear',
  anger: 'anger',
  disgust: 'disgust',
};

export const GOODEMOTIONS = {
  enjoyment: 'enjoyment',
};

