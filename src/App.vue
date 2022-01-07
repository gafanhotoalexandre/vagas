<template>
  <topo-padrao />
  <conteudo />
</template>

<script>
import Conteudo from './components/layouts/Conteudo.vue'
import TopoPadrao from './components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    TopoPadrao,
  }
}
</script>

<style>

</style>
