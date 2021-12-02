export default class StarshipsController {
    constructor(starshipsRepository ) {
        this.starshipsRepository = starshipsRepository;
    }
    getAllStarships = async (req, res) =>  {
        const result = await this.starshipsRepository.getAllStarships();
        res.status(200).json(result);
    }

    getStarship = async (req, res) => {
        const id = Number(req.params.id);
        const result = await this.starshipsRepository.getStarship(id);
        res.status(200).json(result);
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
