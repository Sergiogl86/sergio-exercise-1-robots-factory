let names: String[] = [];

let createName: () => String;

createName = () => {
  let letras = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
  let letra1 = letras.charAt(Math.floor(Math.random() * letras.length));
  let letra2 = letras.charAt(Math.floor(Math.random() * letras.length));
  let letra3 = letras.charAt(Math.floor(Math.random() * letras.length));

  let numeroNombre = Math.floor(Math.random() * 100);
  let redondeo = Math.round(numeroNombre);

  let name: String = `${letra1}${letra2}${letra3}${redondeo}`;

  if (names.includes(name)) {
    createName();
  } else {
    names.push(name);
    return name;
  }
};

enum typeRobot {
  Cleaner,
  Waiter,
  Developer,
}
interface robot {
  nombre: String;
  tipo: typeRobot;
  bateria: Number;
}

class CreateRobot implements robot {
  constructor(
    public nombre: String,
    public tipo: typeRobot,
    public bateria: Number
  ) {}

  reset() {
    this.bateria = 100;
    this.nombre = createName();
  }
}

class Cleaner extends CreateRobot {
  constructor(public nombre: String) {
    super(nombre, typeRobot.Cleaner, 100);
  }

  trabajar() {
    console.log("Larala larita, I clean my little house");
  }
}

class Waiter extends CreateRobot {
  constructor(public nombre: String) {
    super(nombre, typeRobot.Waiter, 100);
  }

  trabajar() {
    console.log("Do you feel like a mini of fuet?");
  }
}

class Developer extends CreateRobot {
  constructor(public nombre: String) {
    super(nombre, typeRobot.Developer, 100);
  }

  trabajar() {
    console.log("JavaScript is cool -> I develop with JavaScript -> I'm cool");
  }
}

let Sergio = new Developer(createName());

console.log(Sergio);
