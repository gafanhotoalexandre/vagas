<template>
  <!--
  <slot name="titulo" :dadosTitulo="{ titulo: 'Título Lista', nroVagas: 15 }">
    <p>Título da lista de vagas</p>
  </slot>
  -->

  <slot :vagas="vagas">
    <div class="row mt-5 justify-content-center">
      <div v-for="(vaga, index) in vagas" :key="index" class="col-md-6 my-3">
        <vaga v-bind="vaga"></vaga>
      </div>
    </div>
  </slot>

  <!--
  <slot name="rodape" :dadosRodape="{ titulo: 'Rodapé Lista', paginacao: { nroPaginas: 10, paginaAtual: 5 } }">
    <p>Rodapé da lista de vagas</p>
  </slot>
  -->
</template>

<script>
import Vaga from '@/components/comuns/Vaga.vue'

export default {
  name: 'ListaVagas',
  components: {
    Vaga
  },
  data: () => ({
    vagas: [],
  }),
  activated() {
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  },
  mounted() {
    this.emitter.on('filtrarVagas', vaga => {
      const vagas = JSON.parse(localStorage.getItem('vagas'))
      this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase()))
    })
  },
}
</script>

<style>

</style>