import { Router } from '@vaadin/router';
import type { Params, Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: 'page-home',
    action: async () => {
      await import('./pages/page-home.js');
    },
  },
  {
    path: '/about',
    name: 'about',
    component: 'page-about',
    action: async () => {
      await import('./pages/page-about.js');
    },
  },
  {
    path: '/blog',
    name: 'blog-list',
    component: 'page-blog-list',
    /* eslint-disable */
    action: async () => {
      await import('./pages/page-blog-list.js');
    },
    /* eslint-enable */
  },
  {
    path: '/blog/:id',
    component: 'page-blog',
    /* eslint-disable */
    action: async () => {
      await import('./pages/page-blog.js');
    },
    /* eslint-enable */
  },
  {
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    /* eslint-disable */
    action: async () => {
      await import('./pages/page-not-found.js');
    },
    /* eslint-enable */
  },
];

export const router = new Router();
router.setRoutes([...routes]);

export const attachRouter = (outlet: HTMLElement) => router.setOutlet(outlet);

// prettier-ignore
export const urlForName = (name: string, params?: Params) => router.urlForName(name, params);
