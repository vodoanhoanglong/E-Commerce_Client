import { ApolloProvider } from '@apollo/client';
import { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import client from '~/app/apolloClient';
import ThemeProvider from './theme';
import { store } from './app/store';
import { AuthLayout, MainLayout } from './layouts';
import { Page404 } from './page';
import { authRoutes, publicRoutes } from './routes';
import './index.scss';

const container = document.getElementById('root')!;
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<MainLayout />}>
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
