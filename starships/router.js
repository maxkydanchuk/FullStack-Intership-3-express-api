import { Router } from "express";
import { starshipsController } from './controller.js';

const starshipRouter = Router();

starshipRouter.get('/api/starships', starshipsController.getAllStarships);
starshipRouter.get('/api/starships/:id', starshipsController.getStarship);
starshipRouter.put('/api/starships', starshipsController.updateStarship)
starshipRouter.delete('/api/starships/:id', starshipsController.deleteStarship);

export default starshipRouter;