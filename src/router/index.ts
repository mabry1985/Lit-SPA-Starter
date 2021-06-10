import { Router } from '@vaadin/router';
import type { Params } from '@vaadin/router';

import { routes } from './routes.js';

const router = new Router();

router.setRoutes([...routes]);

export const attachRouter = (outlet: HTMLElement) => {
  router.setOutlet(outlet);
};

export const urlForName = (name: string, params?: Params) => {
  return router.urlForName(name, params);
};