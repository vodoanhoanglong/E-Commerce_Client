import { ContactPage, HomePage, IntroPage, LoginPage, NewsPage, ProductPage, RegisterPage } from "~/page";
import { Route } from "~/routes";

export const ROUTES_PATH = {
  HOME: "home",
  LOGIN: "login",
  REGISTER: "register",
  PRODUCT: "product",
  CONTACT: "contact",
  NEWS: "news",
  INTRO: "intro",
};
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};

const authRoutes: Route[] = [
  { path: ROUTES_PATH.LOGIN, element: LoginPage },
  { path: ROUTES_PATH.REGISTER, element: RegisterPage },
];
const publicRoutes: Route[] = [
  { path: ROUTES_PATH.HOME, element: HomePage },
  { path: ROUTES_PATH.PRODUCT, element: ProductPage },
  { path: ROUTES_PATH.CONTACT, element: ContactPage },
  { path: ROUTES_PATH.NEWS, element: NewsPage },
  { path: ROUTES_PATH.INTRO, element: IntroPage },
];
const privateRoutes = {};

export { authRoutes, publicRoutes, privateRoutes };
