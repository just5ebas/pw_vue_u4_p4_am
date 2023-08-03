<template>
  <div>
    <h1>Base de datos de Estudiante</h1>
    <p>
      Selecciona cualquiera de las opciones de la barra de navegación para
      administrar la información
    </p>

    <p>
      <strong>Consultar: </strong>Ingresando la cedula de algun estudiante,
      podras ver su información.
    </p>
    <p>
      <strong>Guardar: </strong>Aqui podras guardar la informacion de un nuevo
      estudiante.
    </p>
    <p>
      <strong>Actualizar: </strong>En esta pestaña podras actualizar la
      informacion correspondiente a uno de los estudiantes, siempre y cuando se
      encuentre en la base de datos.
    </p>
    <p>
      <strong>Eliminar: </strong>Esta pestaña te permitira eliminar un registro
      despues de haber ingresado su id.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  background: #364156;
  border-radius: 15px;
  border: solid 2px #dff8eb;
  margin: 45px;
  color: white;
  padding: 5px 0px;
  box-shadow: 5px 10px 5px 0px #01122e;
}
div h1,
div p strong {
  color: #dff8eb;
}
</style>