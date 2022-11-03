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

export type LoginResponse = AuthUser & StrapiError

export type RegisterResponse = AuthUser & StrapiError

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

export type DailyMoodResponse = DailyMood & StrapiError & StrapiMeta

export type DailyMoodsResponse = {
  data: DailyMood[] | null,
} & StrapiError & StrapiMeta


