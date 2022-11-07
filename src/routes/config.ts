export const authRoutes = {
  LOGIN: {
    path: "/login",
  },
  REGISTER: {
    path: "/register",
  },
};

export const publicRoutes = {
  HOME: {
    path: "/home",
  },
  ABOUT: {
    path: "/about",
  },
  PRODUCT: {
    path: "/product",
    children: {
      DETAIL: {
        path: ":id",
      },
    },
  },
  CONTACT: {
    path: "/contact",
  },
  CART: {
    path: "/cart",
  },
};

export const privateRoutes = {};

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};
