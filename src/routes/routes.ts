import { HomePage, LoginPage, RegisterPage } from '~/page';
import { Route } from '~/routes';

export const ROUTES_PATH = {
  HOME: 'home',
  LOGIN: 'login',
  REGISTER: 'register',
};
export const ROLES = {
  ADMIN: 'admin',
  USER: 'user',
};

const authRoutes: Route[] = [
  { path: ROUTES_PATH.LOGIN, element: LoginPage },
  { path: ROUTES_PATH.REGISTER, element: RegisterPage },
];
const publicRoutes: Route[] = [{ path: ROUTES_PATH.HOME, element: HomePage }];
const privateRoutes = {};

export { authRoutes, publicRoutes, privateRoutes };
