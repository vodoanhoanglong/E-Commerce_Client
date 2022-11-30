export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm {
  email: string;
  password: string;
  fullName: string;
  dob: Date;
  gender: string;
  address: string;
  phone: string;
}

export interface AuthToken {
  token: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  avatar: string;
}
