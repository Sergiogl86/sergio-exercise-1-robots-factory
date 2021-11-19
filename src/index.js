var typeRobot;
(function (typeRobot) {
    typeRobot[typeRobot["Cleaner"] = 0] = "Cleaner";
    typeRobot[typeRobot["Waiter"] = 1] = "Waiter";
    typeRobot[typeRobot["Developer"] = 2] = "Developer";
})(typeRobot || (typeRobot = {}));
var CreateRobot = /** @class */ (function () {
    function CreateRobot(nombre, tipo, bateria) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.bateria = bateria;
    }
    return CreateRobot;
}());
