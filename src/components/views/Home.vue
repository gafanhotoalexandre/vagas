<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>

    <!-- Listando Vagas -->
    <lista-vagas>
      <!--
      <template v-slot:titulo="slotProps">
        {{ slotProps }}
        <hr>
      </template>

      <template v-slot:default="slotProps">
        {{ slotProps }}
        <hr>
      </template>

      <template v-slot:rodape="slotProps">
        {{ slotProps }}
      </template>
      -->
    </lista-vagas>

    <div class="row mt-5">
      <div class="col-md-4">
        <indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"></indicador>
      </div>

      <div class="col-md-4">
        <indicador titulo="Profissionais Cadastrados" indicador="225" bg="bg-light" color="text-dark"></indicador>
      </div>
      
      <div class="col-md-4">
        <indicador titulo="Visitantes Online" :indicador="usuariosOnline" bg="bg-dark" color="text-white"></indicador>
      </div>
    </div>
  </div>
</template>

<script>
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
import Indicador from '@/components/comuns/Indicador.vue'
import ListaVagas from '@/components/comuns/ListaVagas.vue'

export default {
  name: 'Home',
  components: {
    PesquisarVaga,
    Indicador,
    ListaVagas
  },
  data: () => ({
    usuariosOnline: 0,
  }),
  methods: {
    getUsuariosOnline() {
      this.usuariosOnline = Math.floor(Math.random() * 101) // valor entre 0 e 100
    },
  },
  created() {
    setInterval(this.getUsuariosOnline, 1000)
  },
}
</script>

<style scoped>
  h1 {
    color: rgb(0, 218, 145);
  }
</style>