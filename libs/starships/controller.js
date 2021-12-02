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
        this.starshipsRepository.createStarship(req)
       await res.status(201).send('Created');
    }

    updateStarship = async (req, res) => {
        const id = Number(req.params.id);
        const result = await this.starshipsRepository.updateStarship(id, req);
        res.status(200).json(result);
    }

    deleteStarship = async (req, res) => {
        const id = Number(req.params.id);
        this.starshipsRepository = this.starshipsRepository.filter(starship => starship.pk !== id)
        res.status(200).json(this.starshipsRepository);

    }
}
