import About from '../pages/About';
import Support from '../pages/Support';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import TermsAndConditions from '../pages/TermsAndConditions';
import Contact from '../pages/contact';
import NotFoundPage from '../pages/not-found-page';
export const routes = {
  staticrotes: [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/support',
      component: Support,
      exact: true,
    },
    {
      path: '/reports',
      component: Reports,
      exact: true,
    },
    {
      path: '/about',
      component: About,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/terms',
      component: TermsAndConditions,
      exact: true,
    },
    {
      path: '/contact',
      component: Contact,
      exact: true,
    },
    {
      path: '/not-found-page',
      component: NotFoundPage,
      exact: true,
    },
  ],
};
