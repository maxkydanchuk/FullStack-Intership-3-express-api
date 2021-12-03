export default class StarshipsController {
    constructor(starshipsRepository ) {
        this.starshipsRepository = starshipsRepository;
    }

    /**
     * @function getDataFromBody
     *
     * @description Get data from request body
     *
     * @param body - request body
     * @returns  {{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}}}
     */
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
     * @async
     * @function getAllStarships
     *
     * @description get all starships from repository data
     *
     * @param req
     * @param res
     * @returns {{{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}},
     * "model": @string, "pk": number}}
     */
    getAllStarships = async (req, res) =>  {
        const result = await this.starshipsRepository.getAllStarships();
        res.status(200).json(result);
    }

    /**
     * @async
     * @function getStarship
     *
     * @description getselected starship by its primary key
     *
     * @param req
     * @param res
     * @returns {{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}},
     * "model": @string, "pk": number}
     */

    getStarship = async (req, res) => {
        const id = Number(req.params.id);
        const result = await this.starshipsRepository.getStarship(id);
        res.status(200).json(result);
    }

    /**
     * @async
     * @function createStarship
     *
     * @description create new starship and add it to repository data
     *
     * @param req
     * @param res
     * @returns {{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}},
     * "model": @string, "pk": number}
     */

    createStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        this.starshipsRepository.createStarship(body)
        await res.status(201).send(this.starshipsRepository);
    }

    /**
     * @async
     * @function updateStarship
     *
     * @description change the fields you choose in selected starship
     *
     * @param req
     * @param res
     * @returns {{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}},
     * "model": @string, "pk": number}
     */
    updateStarship = async (req, res) => {
        const body = this.getDataFromBody(req.body);
        const id = Number(req.params.id);
        this.starshipsRepository = await this.starshipsRepository.updateStarship(id, body);
        res.status(200).json(this.starshipsRepository);
    }

    /**
     * @async
     * @function deleteStarship
     *
     * @description delete selected starship from repository data
     *
     * @param req
     * @param res
     *
     * @returns {{{fields: {hyperdrive_rating: string, pilots: array, MGLT: number, starship_class: string}},
     * "model": @string, "pk": number}}
     */
    deleteStarship = async (req, res) => {
        const id = Number(req.params.id);
        this.starshipsRepository = await this.starshipsRepository.deleteStarship(id);
        return res.status(200).json(this.starshipsRepository);

    }
}
