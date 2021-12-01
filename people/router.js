import { Router } from "express";
import { peopleController } from './controller.js';

const peopleRouter = Router();


peopleRouter.get('/api/people', peopleController.getAllPeople);
peopleRouter.get('/api/people/:id', peopleController.getPersone);
peopleRouter.put('/api/people', peopleController.updatePersone)
peopleRouter.delete('/api/people/:id', peopleController.deletePersone);

export default peopleRouter;