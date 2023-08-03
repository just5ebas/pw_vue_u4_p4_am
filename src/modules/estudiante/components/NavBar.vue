<template>
  <div>
    <router-link to="/consultar">Consultar</router-link>
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/actualizar">Actualizar</router-link>
    <router-link to="/eliminar">Eliminar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin-bottom: 25px;
  padding: 0 30px;
}
div a {
  font-weight: bold;
  color: #272d2d;
  margin: 0 15px;
}
div a:focus {
  color: #FFFC31;
}
</style>