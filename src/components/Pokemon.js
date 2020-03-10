class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_shiny;
        this.image = data.sprites.front_default;
        this.type = data.types[0].type.name;
        this.height = data.height;
        this.weight = data.weight;
        this.experience = data.base_experience;
    }
}

export default Pokemon;
