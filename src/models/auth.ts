export interface LoginFormInput {
  email: string;
  password: string;
}
export interface RegisterFormInput {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

export interface AuthOutput {
  token: string;
  error: string;
}

export interface User {
  id?: string;
  fullName: string;
  email: string;
  avatar?: string;
}
