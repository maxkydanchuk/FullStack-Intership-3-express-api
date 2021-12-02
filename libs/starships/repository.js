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

    createStarship = () => {
        //TODO: implement
    }

    updateStarship = () => {
        //TODO: implement
    }

    deleteStarship = (id) => {
        return this.repositoryData.filter(starship => starship.pk !== id)
    }

    // static async getAllStarships() {
    //
    // }

}