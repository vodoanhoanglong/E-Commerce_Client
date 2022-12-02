interface BaseUserData {
  fullName: string;
  gender: string;
  address: string;
  phoneNumber: string;
  avatar?: string;
  bod: Date;
}
export interface AuthToken {
  token: string;
}
export interface LoginForm {
  email: string;
  password: string;
}

export interface User extends BaseUserData {
  id: string;
  email: string;
}

export type RegisterForm = LoginForm & BaseUserData;
