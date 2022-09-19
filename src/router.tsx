import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import SidebarLayoutUser from 'src/layouts/SidebarLayoutUser';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );
//register
const Register = Loader(
  lazy(() => import('src/content/overview/Login/Register'))
);

const Personalise = Loader(
  lazy(() => import('src/content/pages/Users/settings/Personalise'))
);

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards

const Client = Loader(lazy(() => import('src/content/pages/Clients/index')));

const Produits = Loader(
  lazy(() => import('src/content/pages/Commandes/index'))
);

const UserProfile = Loader(
  lazy(() => import('src/content/pages/Users/profile/index'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/pages/Users/settings/index'))
);

// Commandes

const Commandes = Loader(
  lazy(() => import('src/content/pages/Commandes/index'))
);
const Historique = Loader(
  lazy(() => import('src/content/pages/Historiques/index'))
);

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto')));

const routes: RouteObject[] = [
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="clients" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'clients',
        element: <Client />
      },

      {
        path: 'produits',
        element: <Produits />
      },
      {
        path: 'Historiques',
        element: <Historique />
      },

      {
        path: 'Commandes',
        element: <Commandes />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  }
];

export default routes;
