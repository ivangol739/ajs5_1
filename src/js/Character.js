export default class Character {
    static #types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie']
    constructor(name, type) {
        this.name = name;
        this.type = type;
        if (name.length < 2 || name.length > 10 || !Character.#types.includes(type)) {
            throw new Error('Некорректные данные!')
        }
    }
}

