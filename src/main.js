import { createApp } from 'vue'
import App from './App.vue'

// importando o mitt
import mitt from 'mitt'

// criando a instância do pacote mitt
const emitter = mitt()

// createApp(App).mount('#app')
// iniciando a instância do Vue com base no componente App
const app = createApp(App)

// configurando a instância do mitt como sendo uma propriedade global
// esta propriedade global estará disponível para todas as instâncias de componentes dentro do App
app.config.globalProperties.emitter = emitter

// associar a instância do Vue com o elemento html de id -> app
app.mount('#app')
