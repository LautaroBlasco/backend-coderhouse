type Libro = {
  titulo: string,
  autor: string,
}

class Usuario {
  nombre: string;
  apellido: string;
  libros: Libro[];
  mascotas: string[];

  constructor(nombre: string, apellido: string, libros: Libro[], mascotas: string[]) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }




  getFullName(): string {
    return `${this.nombre} ${this.apellido}`
  }

  addMascota(nuevaMascota: string): void {
    this.mascotas.push(nuevaMascota)
  }

  addBook(titulo: string, autor: string): void {
    this.libros.push({
      'titulo': titulo,
      'autor': autor,
    })
  }

  getBookNames(): string[] {
    return this.libros.map(libro => libro.titulo)
  }
}

let lautaro: Usuario = new Usuario(
  'lautaro',
  'Blasco',
  [{ titulo: 'javascript', autor: 'godeto' }],
  ['Walter'])

console.log(lautaro.getBookNames())
lautaro.addBook('El señor de los anillos', 'pepe argento')
lautaro.addMascota('Brisa')
console.log(lautaro)
