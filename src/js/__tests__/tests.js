import Bowerman from '../Bowerman';
import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie'


test('throw error', () => {
    expect(() => { new Character('1', 'Undead'); }).toThrow('Некорректные данные!');
});

test('should create Bowerman player', () => {
    const BowermanPlayer = {
        name: 'Ivan', type: 'Bowerman', health: 100, level: 1, attack: 25, defence: 25,
    };
    expect(new Bowerman('Ivan', 'Bowerman')).toEqual(BowermanPlayer);
});

test('should create Daemon player', () => {
    const DaemonPlayer = {
        name: 'Petr', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
    }
    expect(new Daemon('Petr', 'Daemon')).toEqual(DaemonPlayer)
})

test('should create Magician player', () => {
    const MagicianPlayer = {
        name: 'Sany', type: 'Magician', health: 100, level: 1, attack: 10, defence: 40,
    }
    expect(new Magician('Sany', 'Magician')).toEqual(MagicianPlayer)
})

test('should create Swordsman player', () => {
    const SwordsmanPlayer = {
        name: 'Pasha', type: 'Swordsman', health: 100, level: 1, attack: 40, defence: 10,
    }
    expect(new Swordsman('Pasha', 'Swordsman')).toEqual(SwordsmanPlayer)
})

test('should create Undead player', () => {
    const UndeadPlayer = {
        name: 'Anton', type: 'Undead', health: 100, level: 1, attack: 25, defence: 25,
    }
    expect(new Undead('Anton', 'Undead')).toEqual(UndeadPlayer)
})
  
test('should create Zombie player', () => {
    const ZombiePlayer = {
        name: 'Putin', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
    }
    expect(new Zombie('Putin', 'Zombie')).toEqual(ZombiePlayer)
})