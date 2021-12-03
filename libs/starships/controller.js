export default class StarshipsController {
    constructor(starshipsRepository ) {
        this.starshipsRepository = starshipsRepository;
    }

    getDataFromBody (body) {
        return {
            fields: {
                pilots: body.fields.pilots,
                MGLT: body.fields.MGLT,
                starship_class: body.fields.starship_class,
                hyperdrive_rating: body.fields.hyperdrive_rating,
            }
        };
    }
    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    getAllStarships = async (req, res) =>  {
        const result = await this.starshipsRepository.getAllStarships();
        res.status(200).json(result);
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    getStarship = async (req, res) => {
        const id = Number(req.params.id);
        const result = await this.starshipsRepository.getStarship(id);
        res.status(200).json(result);
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */

    createStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        this.starshipsRepository.createStarship(body)
        await res.status(201).send(this.starshipsRepository);
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    updateStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = Number(req.params.id);
        this.starshipsRepository = await this.starshipsRepository.updateStarship(id, body);
        res.status(200).json(this.starshipsRepository);
    }

    /**
     *
     * @param req
     * @param res
     * @returns {Promise<*>}
     */
    deleteStarship = async (req, res) => {
        const id = Number(req.params.id);
        this.starshipsRepository = await this.starshipsRepository.deleteStarship(id);
        return res.status(200).json(this.starshipsRepository);

    }
}
