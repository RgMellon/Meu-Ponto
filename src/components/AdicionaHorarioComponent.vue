<template>
  <div>
    <q-select float-label="Momento" style="margin-bottom: 2rem; margin-top:1rem"
      v-model="select"
      :options="opcoes"
    />
    <q-datetime color="blue" v-if="$q.theme === 'mat'" v-model="hora" type="time" format24h 
    float-label="Hora em que bateu o ponto" />
    
    <q-btn :loading="loading" color="blue-5" text-color="white" style="margin-top:2rem"
     @click="adicionar" no-caps label="Salvar" class="full-width" />
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
        loading: false,
    }
  },
  methods: {
    adicionar () {
      this.loading = true
      this.$addHora(this.select, this.hora);
      this.loading = false;
      this.showNotification('top-left');
      this.$emit('esconde');
    },
    showNotification(position){
      this.$q.notify({
        color: 'grey-6' ,
        textColor: 'white',
        icon: 'thumb_up',
        message : ' Horario adicionado :) ',
        position,
        avatar: '',
        actions: null
      })
    }
  }
}
</script>

<style>
</style>
