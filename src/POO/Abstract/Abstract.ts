export abstract class Character {
  abstract icon: string;

  constructor(
    protected name: string,
    protected power: number,
    protected life: number,
  ) {}

  atack(character: Character): void {
    this.screen();
    character.decreaseLife(this.power);
  }

  private decreaseLife(power: number): void {
    this.life -= power;
    console.log(`A vida do ${this.name} agora é ${this.life}`);
    console.log('-------------------------------------------');
  }

  abstract screen(): void;
}

class Warrior extends Character {
  icon = '⚔️';
  screen() {
    console.log(this.icon + ' ' + 'THIS IS SPARTAAAAA');
  }
}
class Wizard extends Character {
  icon = '🧙‍♂️';
  screen() {
    console.log(this.icon + ' ' + 'AVADA KEDAVRAAAA');
  }
}

const warrior = new Warrior('Warrior', 100, 1200);
const wizard = new Wizard('Wizard', 145, 800);

warrior.atack(wizard);
wizard.atack(warrior);
warrior.atack(wizard);
wizard.atack(warrior);
warrior.atack(wizard);
