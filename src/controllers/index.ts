import Elysia from 'elysia';
import { usersController } from './usersController';

export const api = new Elysia({
  prefix: '/api',
}).use(usersController);
