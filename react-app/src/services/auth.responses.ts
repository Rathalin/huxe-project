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

