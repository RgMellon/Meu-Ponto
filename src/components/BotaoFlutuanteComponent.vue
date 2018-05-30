<template>
  <div class="row justify-around">
    <q-fab color="blue" icon="add" direction="up" class="btn-flutuante">
        <div class="conteudo-flutuante shadow-6">
          <addHorario></addHorario>
        </div>
    </q-fab>
  </div>
</template>

<script>
import AdicionaHorarioComponent from './AdicionaHorarioComponent';
export default {
  name: 'BotaoFlutuanteComponent',
  components: {
    addHorario: AdicionaHorarioComponent,
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
 .conteudo-flutuante{
    width: 300px;
    height: 260px;
    padding: 1rem;
    margin-bottom: 1rem;
    background: white;
 }
 .btn-flutuante {
   position: fixed;
   bottom: 20px;
 }
</style>
