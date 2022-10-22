import { ApolloProvider } from '@apollo/client';
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import client from '~/app/apolloClient';
import { Page404 } from '~/page';
import { store } from '~/redux/store';
import { authRoutes, publicRoutes } from '~/routes';
import ThemeProvider from '~/theme';
import { AuthLayout, MainLayout } from './layouts';
import reportWebVitals from './reportWebVitals';

import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/home" />} />
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Route>
      <Route path="/" element={<AuthLayout />}>
        {authRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.element />} />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Fragment>,
  ),
);

root.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </ReduxProvider>,
);
reportWebVitals();
