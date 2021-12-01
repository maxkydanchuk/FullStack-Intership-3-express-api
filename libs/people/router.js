import { Router } from "express";
import {PeopleController} from './controller.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const people = require("../../data/people.json");

const peopleRouter = Router();
const peopleController = new PeopleController(people);


peopleRouter.get('/api/people', peopleController.getAllPeople);
peopleRouter.get('/api/people/:id', peopleController.getPersone);
peopleRouter.put('/api/people', peopleController.updatePersone)
peopleRouter.delete('/api/people/:id', peopleController.deletePersone);

export default peopleRouter;