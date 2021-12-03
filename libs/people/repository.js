export default class PeopleRepository {
    constructor(repositoryData) {
        this.repositoryData = repositoryData;
    }

    getDataFromBody (body) {
        return {
            fields: {
                name: body.fields.name,
                gender: body.fields.gender,
                skin_color: body.fields.skin_color,
                hair_color: body.fields.hair_color,
                height: body.fields.height,
                eye_color: body.fields.eye_color,
                mass: body.fields.mass,
                // "homeworld": 1,
                birth_year: body.fields.birth_year
            }
        }
    }

    getAllPeople () {
        return  this.repositoryData;
    }

    getPerson (id) {
        return this.repositoryData.find(person => person.pk === id);
    }

    createPerson (req) {
        const body = this.getDataFromBody(req.body);
        const newPerson =  {
            ...body,
            model: "resources.starship",
            pk:  Number(new Date())
        };

        this.repositoryData.push(newPerson)
        console.log(this.repositoryData)
    }

    updatePerson (id, req) {
        const body = this.getDataFromBody(req.body);
        let person = this.repositoryData.find(person => person.pk === id);
        person = {
            ...person,
           ...body,
        };
       const index = this.repositoryData.findIndex(el => el.pk === id);
       this.repositoryData =  [...this.repositoryData.slice(0, index), person, ...this.repositoryData.slice(index +1)];

       return this.repositoryData;
    }

    deletePerson (id) {
        this.repositoryData = this.repositoryData.filter(person => person.pk !== id);
        return this.repositoryData;
    }
}