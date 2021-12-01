import { createRequire } from "module";
const require = createRequire(import.meta.url);

const starships = require("../data/starships.json");

class StarshipsController {
    constructor(starshipsRepository) {
        this.starshipsRepository = starshipsRepository;
    }
    getAllStarships = async (req, res) =>  {
        return res.status(200).json(this.starshipsRepository);
    }

    getStarship = async (req, res) => {
        const starshipId = await req.params.id;
    }

    updateStarship = async (req, res) => {
        ///TODO: implement
    }

    deleteStarship = async (req, res) => {
        await this.starshipsRepository.filter(starship => persone.id !== req.params.id);
    }
}

export const starshipsController = new StarshipsController(starships);