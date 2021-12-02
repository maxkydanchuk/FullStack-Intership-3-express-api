export class StarshipsController {
    constructor(starshipsRepository) {
        this.starshipsRepository = starshipsRepository;
    }
    getAllStarships = async (req, res) =>  {
        return res.status(200).json(this.starshipsRepository);
    }

    getStarship = async (req, res) => {
        const id = Number(req.params.id);
        const starships = this.starshipsRepository;
        const starship = await starships.find(starship => starship.pk === id);
        res.status(200).json(starship);
    }

    createStarship = async (req, res) => {
        //TODO: implement
        // const starships = this.starshipsRepository;
        //TODO: implement
        // starships.push()
        console.log(req.body)
       await res.status(201).send('Created');
    }

    updateStarship = async (req, res) => {
        //TODO: implement

    }

    deleteStarship = async (req, res) => {
        const id = Number(req.params.id);
        this.starshipsRepository = this.starshipsRepository.filter(starship => starship.pk !== id)
        res.status(200).json(this.starshipsRepository);

    }
}
