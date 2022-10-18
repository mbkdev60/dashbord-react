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

// Pages
const Overview = Loader(lazy(() => import('src/content/overview')));

// Dashboards
const Clients = Loader(lazy(() => import('src/content/pages/Clients/index')));

const Produits = Loader(lazy(() => import('src/content/pages/Produits/index')));

const UserProfile = Loader(
  lazy(() => import('src/content/pages/Users/Profil/index'))
);
const UserContact = Loader(
  lazy(() => import('src/content/pages/Users/Contact/index'))
);

// Commandes

const Commandes = Loader(
  lazy(() => import('src/content/pages/Commandes/index'))
);
const Historique = Loader(
  lazy(() => import('src/content/pages/Historiques/index'))
);

// Dashboards

const Stats = Loader(lazy(() => import('src/content/dashboards/Stats')));

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
        path: 'stats',
        element: <Stats />
      },
      {
        path: 'clients',
        element: <Clients />
      },

      {
        path: 'produits',
        element: <Produits />
      },
      {
        path: 'historique',
        element: <Historique />
      },

      {
        path: 'commandes',
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
            path: 'contact',
            element: <UserContact />
          }
        ]
      }
    ]
  },
  {
    path: '',
    element: <Navigate to="dashboards/Clients" replace />
  }
];

export default routes;
