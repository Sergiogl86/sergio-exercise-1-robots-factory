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
}
