<template>
  <div>
      <p>Conteúdo</p>
      <home></home>
      <publicar-vaga></publicar-vaga>
  </div>
</template>

<script>
import Home from '../views/Home.vue'
import PublicarVaga from '../views/PublicarVaga.vue'

export default {
  name: 'Conteudo',
  components: {
    Home,
    PublicarVaga
  }
}
</script>

<style>

</style>