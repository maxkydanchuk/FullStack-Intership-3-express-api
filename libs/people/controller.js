export class PeopleController {
    constructor(peopleRepository) {
        this.peopleRepository = peopleRepository;
    }

    getAllPeople = async (req, res) => {
        return res.status(200).json(this.peopleRepository);
    }

    getPersone = async (req, res) => {
        const starshipId = await req.params.id;
    }

    updatePersone = async (req, res) => {
        ///TODO: implement
    }

    deletePersone = async (req, res) => {
        await this.peopleRepository.filter(persone => persone.id !== req.params.id);
    }
}