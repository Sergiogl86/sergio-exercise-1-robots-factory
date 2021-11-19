var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var names = [];
var createName;
createName = function () {
    var letras = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
    var letra1 = letras.charAt(Math.floor(Math.random() * letras.length));
    var letra2 = letras.charAt(Math.floor(Math.random() * letras.length));
    var letra3 = letras.charAt(Math.floor(Math.random() * letras.length));
    var numeroNombre = Math.floor(Math.random() * 100);
    var redondeo = Math.round(numeroNombre);
    var name = "".concat(letra1).concat(letra2).concat(letra3).concat(redondeo);
    if (names.includes(name)) {
        createName();
    }
    else {
        names.push(name);
        return name;
    }
};
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
    CreateRobot.prototype.reset = function () {
        this.bateria = 100;
        this.nombre = createName();
    };
    return CreateRobot;
}());
var Cleaner = /** @class */ (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner(nombre) {
        var _this = _super.call(this, nombre, typeRobot.Cleaner, 100) || this;
        _this.nombre = nombre;
        return _this;
    }
    Cleaner.prototype.trabajar = function () {
        console.log("Larala larita, I clean my little house");
    };
    return Cleaner;
}(CreateRobot));
var Waiter = /** @class */ (function (_super) {
    __extends(Waiter, _super);
    function Waiter(nombre) {
        var _this = _super.call(this, nombre, typeRobot.Waiter, 100) || this;
        _this.nombre = nombre;
        return _this;
    }
    Waiter.prototype.trabajar = function () {
        console.log("Do you feel like a mini of fuet?");
    };
    return Waiter;
}(CreateRobot));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nombre) {
        var _this = _super.call(this, nombre, typeRobot.Developer, 100) || this;
        _this.nombre = nombre;
        return _this;
    }
    Developer.prototype.trabajar = function () {
        console.log("JavaScript is cool -> I develop with JavaScript -> I'm cool");
    };
    return Developer;
}(CreateRobot));
var Sergio = new Developer(createName());
console.log(Sergio);
