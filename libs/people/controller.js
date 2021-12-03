export default class PeopleController {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    getAllPeople = async (req, res) => {
        const result = await this.peopleRepository.getAllPeople();
        res.status(200).json(result);
    }

    getPerson = async  (req, res) => {
        const id = Number(req.params.id);
        const result = await this.peopleRepository.getPerson(id);
        res.status(200).json(result);
    }

    createPerson = async  (req, res) => {
        this.peopleRepository.createPerson(req)
        await res.status(201).send('Created');
    }

    updatePerson = async  (req, res) => {
        const id = Number(req.params.id);
        this.peopleRepository = await this.peopleRepository.updatePerson(id, req);
        res.status(200).json(this.peopleRepository);
        console.log(this.peopleRepository)
    }

   deletePerson = async  (req, res) => {
        const id = Number(req.params.id);
        this.peopleRepository = await this.peopleRepository.deletePerson(id);
        return res.status(200).json(this.peopleRepository);
    }
}