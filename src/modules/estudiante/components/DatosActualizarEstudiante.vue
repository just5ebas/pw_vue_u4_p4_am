<template>
  <div class="principal">
    <h1>Actualizacion de datos</h1>
    <p>
      Los datos que se actualizaran corresponden al estudiante con el
      identificador que ingreses
    </p>
    <div class="peticion">
      <label for="">Id</label>
      <input v-model="id" type="text" />
      <label for="">Cedula</label>
      <input v-model="cedula" type="text" />
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Fecha de Nacimiento</label>
      <input v-model="fechaNacimiento" type="datetime-local" />
    </div>

    <button @click="actualizarEstudiante">Actualizar</button>
  </div>
</template>
  
  <script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteClient.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      id: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento,
        provincia: "Pichincha",
      };

      actualizarEstudianteFachada(data, this.id);

      this.reiniciar();
    },
    reiniciar() {
      this.cedula = null;
      this.nombre = null;
      this.apellido = null;
      this.id = null;
      this.fechaNacimiento = null;
    },
  },
};
</script>
  
<style scoped>
.peticion {
  justify-content: center;
  align-items: center;

  display: grid;

  grid-template-columns: repeat(2, 200px);
}

.peticion label,
h1 {
  font-weight: bold;
  color: #a6e1fa;
}

.principal {
  background: #001c55;
  color: white;
  margin: 10px 400px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 6px 6px 3px 2px #00072d;
}
.principal input {
  outline: none;
  background: none;
  font-size: 16px;

  border: 0px;
  border-bottom: 2px solid white;
  color: white;
}

.peticion,
.peticion label,
.peticion input {
  margin-top: 15px;
}

.principal button {
  border-radius: 7px;
  border: 4px outset #a6e1fa;

  font-size: 15px;
  background: #0c488d;

  font-weight: bold;
  color: white;

  margin-top: 30px;
  padding: 4px 10px;
}

.principal button:hover {
  cursor: pointer;
}

.principal button:active {
  background: #0e6ba8;
  border: 4px inset #0e6ba8;
}
</style>