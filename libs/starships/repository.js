export default class StarshipsRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData;
    }

     getAllStarships () {
        return  this.repositoryData;
    }

    getStarship = (id) => {
        return this.repositoryData.find(starship => starship.pk === id);
    }

    createStarship = (req) => {
        const body = req.body;
        const newStarship =  {
                fields: {
                    pilots: [],
                    MGLT: null,
                    starship_class: body.fields.starship_class,
                    hyperdrive_rating: body.fields.hyperdrive_rating,
                },
                model: "resources.starship",
                pk:  Number(new Date())
            };
        this.repositoryData.push(newStarship)
    }

    updateStarship = (id, req) => {
        const body = req.body;
        let starship = this.repositoryData.find(starship => starship.pk === id);
        starship = {
            ...starship,
            fields: {
                ...starship.fields,
                starship_class: body.fields.starship_class,
                hyperdrive_rating: body.fields.hyperdrive_rating,
            },

        };

        return starship;
    }

    deleteStarship = (id) => {
        return this.repositoryData.filter(starship => starship.pk !== id)
    }
}