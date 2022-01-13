<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        
        <h4>Apresente a sua vaga para milhares de profissionais e de graça</h4>

      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="titulo" class="form-label">Título da Vaga:</label>
        <input type="text" v-model="titulo" class="form-control" id="titulo">
        <div class="form-text">Por exemplo: Programador JavaScript e VueJS.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="descricao" class="form-label">Descrição:</label>
        <textarea v-model="descricao" id="descricao" class="form-control"></textarea>
        <div class="form-text">Informe os detalhes da vaga.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <label for="salario" class="form-label">Salário:</label>
        <input type="number" v-model="salario" id="salario" class="form-control">
        <div class="form-text">Informe o salário</div>
      </div>

      <div class="col">
        <label for="modalidade" class="form-label">Modalidade:</label>
        <select v-model="modalidade" class="form-select">
          <option value="" disabled>---Selecione---</option>
          <option value="1">Home Office</option>
          <option value="2">Presencial</option>
        </select>
        <div class="form-text">Informe onde as atividades serão realizadas.</div>
      </div>

      <div class="col">
        <label for="tipo" class="form-label">Tipo:</label>
        <select v-model="tipo" class="form-select">
          <option value="" disabled>---Selecione---</option>
          <option value="1">PJ</option>
          <option value="2">CLT</option>
        </select>
        <div class="form-text">Informe o tipo de contratação.</div>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <button type="submit" @click="salvarVaga()" class="btn btn-primary">Cadastrar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicarVaga',
  data: () => ({
    titulo: '',
    descricao: '',
    salario: '',
    modalidade: '',
    tipo: ''
  }),
  methods: {
    salvarVaga() {

      const tempoDecorrido = Date.now()
      const dataAtual = new Date(tempoDecorrido)
      const dataPublicacao = dataAtual.toISOString()

      let vagas = JSON.parse(localStorage.getItem('vagas'))

      if (!vagas) vagas = []

      vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataPublicacao
      })

      localStorage.setItem('vagas', JSON.stringify(vagas))
    }
  }
}
</script>

<style>

</style>