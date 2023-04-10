const deadpool = {
  nombre: "Wade",
  apellido: "Winston",
  poder: "Regeneracion",
  edad: 50,
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  },
};

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder, edad = 0} = deadpool;

function printHero({ nombre, apellido, poder, edad = 0 }) {
  console.log(nombre, apellido, edad, poder);
}

printHero(deadpool);
