var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Usuario.prototype.getFullName = function () {
        return "".concat(this.nombre, " ").concat(this.apellido);
    };
    Usuario.prototype.addMascota = function (nuevaMascota) {
        this.mascotas.push(nuevaMascota);
    };
    Usuario.prototype.addBook = function (titulo, autor) {
        this.libros.push({
            'titulo': titulo,
            'autor': autor
        });
    };
    Usuario.prototype.getBookNames = function () {
        return this.libros.map(function (libro) { return libro.titulo; });
    };
    return Usuario;
}());
var lautaro = new Usuario();
lautaro.nombre = 'lautaro';
lautaro.apellido = 'Blasco';
lautaro.libros = [
    {
        titulo: 'javascript',
        autor: 'godeto'
    }
];
lautaro.mascotas = [];
console.log(lautaro.getBookNames());
lautaro.addBook('El señor de los anillos', 'pepe argento');
lautaro.addMascota('Brisa');
console.log(lautaro);
