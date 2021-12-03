export default class StarshipsRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData;
    }

    /**
     *
     * @returns {*}
     */
     getAllStarships () {
        return  this.repositoryData;
    }

    /**
     *
     * @param id {number}
     * @returns {*}
     */
    getStarship (id) {
        return this.repositoryData.find(starship => starship.pk === id);
    }

    /**
     *
     * @param req
     */
    createStarship (req) {
        const body = req.body;
        const newStarship =  {
                fields: {
                    pilots: body.fields.pilots,
                    MGLT: body.fields.MGLT,
                    starship_class: body.fields.starship_class,
                    hyperdrive_rating: body.fields.hyperdrive_rating,
                },
                model: "resources.starship",
                pk:  Number(new Date())
            };
        console.log(newStarship)
        this.repositoryData.push(newStarship)
    }

    /**
     *
     * @param id {number}
     * @param req
     * @returns {*}
     */
    updateStarship (id, req) {
        const body = req.body;
        let starship = this.repositoryData.find(starship => starship.pk === id);
        starship = {
            ...starship,
            fields: {
                pilots: [body.fields.pilots],
                MGLT: body.fields.MGLT,
                starship_class: body.fields.starship_class,
                hyperdrive_rating: body.fields.hyperdrive_rating,
            },
        };
        const index = this.repositoryData.findIndex( el => el.pk === id);
        this.repositoryData = [...this.repositoryData.slice(0, index), starship, ...this.repositoryData.slice(index + 1)];

        return this.repositoryData
    }

    /**
     *
     * @param id {number}
     * @returns {*}
     */
    deleteStarship (id)  {
        this.repositoryData = this.repositoryData.filter(starship => starship.pk !== id);
        return this.repositoryData;
    }
}