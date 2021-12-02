import { Router } from "express";

const router = Router();

function StarshipRouter(controller) {
    router.get('/api/starships', controller.getAllStarships);
    router.get('/api/starships/:id', controller.getStarship);
    router.post('/api/starships/', controller.createStarship);
    router.put('/api/starships/:id/edit', controller.updateStarship);
    router.delete('/api/starships/:id', controller.deleteStarship);

    return router;
}

export default StarshipRouter;