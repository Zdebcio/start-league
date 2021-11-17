export interface Example {
  id: string
}

export interface LoginPayload {
  email: string
  passwd: string
}

export interface LoginResponse {
  success: boolean
  response: string
}

export interface RegistrationPayload {
  nickname: string
  email: string
  passwd: string
}
