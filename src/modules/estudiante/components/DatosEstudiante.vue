<template>
  <div class="principal">
    <h1>Consultar información</h1>
    <p>Ingresa la cedula del estudiante al que buscas</p>
    <br />
    <div class="peticion">
      <label for="">Cedula</label>
      <input v-model="cedula" type="text" />
    </div>

    <button @click="consultarEstudiante">Consultar</button>
  </div>

  <div v-if="nombre != null" class="secundaria">
    <h1>Informacion Obtenida</h1>
    <div class="respuesta">
      <label for="">Nombre</label>
      <input v-model="nombre" type="text" />
      <label for="">Apellido</label>
      <input v-model="apellido" type="text" />
      <label for="">Fecha de nacimiento</label>
      <input v-model="fechaNacimiento" type="text" />
    </div>
  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteClient.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async consultarEstudiante() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fechaNacimiento = data.fechaNacimiento;

      this.cedula = null;
    },
  },
};
</script>

<style scoped>
.peticion,
.respuesta {
  justify-content: center;
  align-items: center;

  display: grid;

  grid-template-columns: repeat(2, 200px);
}

div label,
div h1 {
  font-weight: bold;
  color: #a6e1fa;
}

div * {
  margin: 5px 0px;
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

  border: 0px;
  border-bottom: 2px solid white;
  color: white;
}

.principal button {
  border-radius: 7px;
  border: 4px outset #a6e1fa;

  font-size: 15px;
  background: #0c488d;

  font-weight: bold;
  color: white;

  padding: 4px 10px;
  margin-top: 15px;
}

.principal button:hover {
  cursor: pointer;
}

.principal button:active {
  background: #0e6ba8;
  border: 4px inset #0e6ba8;
}

.secundaria {
  background: #001c55;
  margin: 30px 500px;
  padding: 20px;

  border-radius: 10px;
  box-shadow: 6px 6px 3px 2px #00072d;
}

.respuesta input {
  border: 0px;
  background: none;
  outline: none;

  color: white;
  font-size: 14px;
}

.respuesta,
.respuesta label,
.respuesta input {
  margin-top: 10px;
}
</style>