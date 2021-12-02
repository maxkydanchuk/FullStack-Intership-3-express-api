import { Router } from "express";
import { StarshipsController } from './controller.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const starships = require("../../data/starships.json");

const starshipRouter = Router();
const starshipsController = new StarshipsController(starships);

starshipRouter.get('/api/starships', starshipsController.getAllStarships);
starshipRouter.get('/api/starships/:id', starshipsController.getStarship);
starshipRouter.post('/api/starships/', starshipsController.createStarship);
starshipRouter.put('/api/starships/', starshipsController.updateStarship);
starshipRouter.delete('/api/starships/:id', starshipsController.deleteStarship);

export default starshipRouter;