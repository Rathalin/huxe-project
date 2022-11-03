export interface ResponseError {
  error?: {
    status: number,
    name: string,
    message: string,
    details?: object,
  }
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

export type LoginResponse = AuthUser & ResponseError

export type RegisterResponse = AuthUser & ResponseError

export interface DailyMood {
  id: number,
  attributes: {
    createdAt: string,
    updatedAt: string,
    satisfiedPriorities: {
      data: {
        id: number,
        attributes: {
          title: string,
          iconName: string,
          weeklyGoal: number,
          createdAt: string,
          updatedAt: string,
        }
      }[],
    },
    mood: {
      data: {
        id: number,
        attributes: {
          name: string,
          iconName: string,
          createdAt: string,
          updatedAt: string,
        },
      },
    },
    note: {
      data: {
        id: number,
        attributes: {
          text: string,
          createdAt: string,
          updatedAt: string,
        },
      },
    },
    priorityNote: {
      data: {
        id: number,
        attributes: {
          createdAt: string,
          updatedAt: string,
          priority: {
            data: {
              id: number,
              attributes: {
                title: string,
                iconName: string,
                weeklyGoal: number,
                createdAt: string,
                updatedAt: string,
              },
            },
          },
          note: {
            data: {
              id: number,
              attributes: {
                text: string,
                createdAt: string,
                updatedAt: string,
              },
            },
          },
        },
      },
    },
  },
}

export type DailyMoodResponse = DailyMood & ResponseError

export type DailyMoodsResponse = {
  data: DailyMood[] | null,
} & ResponseError


