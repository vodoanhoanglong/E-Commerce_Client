import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from "react-router-dom";
import { AuthLayout, MainLayout } from "~/layouts";
import { AboutPage, ContactPage, HomePage, LoginPage, Page404, ProductPage, RegisterPage } from "~/page";
import { authRoutes, publicRoutes } from "~/routes";

const routesConfig: RouteObject[] = [
  // Public routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: publicRoutes.HOME.path,
        element: <HomePage />,
      },
      {
        path: publicRoutes.CONTACT.path,
        element: <ContactPage />,
      },
      {
        path: publicRoutes.ABOUT.path,
        element: <AboutPage />,
      },
      {
        path: publicRoutes.PRODUCT.path,
        element: <ProductPage />,
      },
    ],
  },
  // Auth routes
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: authRoutes.LOGIN.path,
        element: <LoginPage />,
      },
      {
        path: authRoutes.REGISTER.path,
        element: <RegisterPage />,
      },
    ],
  },
  // Not found
  {
    path: "*",
    element: <Page404 />,
  },
];
const router = createBrowserRouter(routesConfig);
export default function Routes() {
  return <RouterProvider router={router} />;
}