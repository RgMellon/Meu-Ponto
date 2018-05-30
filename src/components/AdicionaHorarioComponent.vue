<template>
  <div>
    <q-select float-label="Momento" style="margin-bottom: 2rem; margin-top:1rem"
      v-model="select"
      :options="opcoes"
    />
    <q-datetime color="blue" v-if="$q.theme === 'mat'" v-model="hora" type="time" format24h 
    float-label="Hora em que bateu o ponto" />
    
    <q-btn :loading="loading1" color="blue-5" text-color="white" style="margin-top:2rem"
     @click="simulateProgress(1)" no-caps label="Salvar" class="full-width" />
  </div>
</template>

<script>
export default {
  name: 'AdicionaHorarioComponent',
  data () {
    return {
       select: '',
       hora: null,
        opcoes: [
          {label: 'Entrada', value: 'entrada'},
          {label: 'Almoço', value: 'almoco'},
          {label: 'Volta do almoço', value: 'volta_almoco'},
          {label: 'Saída', value: 'saida'}
        ],
         loading1: false,
    }
  },
  methods: {
    simulateProgress (number) {
      // we set loading state
      this[`loading${number}`] = true
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false
      }, 3000)
    },
  }
}
</script>

<style>
</style>
