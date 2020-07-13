import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

// console.clear();
const routes = Router();

routes.use('/appointments', appointmentsRouter);

export default routes;
