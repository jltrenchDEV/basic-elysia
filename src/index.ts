import { api } from './controllers/index';
import { Elysia } from 'elysia';

const app = new Elysia().use(api).listen(3001);
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
