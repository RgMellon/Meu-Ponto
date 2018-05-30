<template>
   <q-page padding class="row justify-center docs-tree">
    <div style="width: 700px; max-width: 90vw;">
      <q-scroll-area style="width: 350px; height: 75vh">
        <arvore></arvore>
      </q-scroll-area>
      <btnFlutuante></btnFlutuante>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ArvoreComponent from '../components/ArvoreComponent';
import BotaoFlutuanteComponent from '../components/BotaoFlutuanteComponent';
export default {
  name: 'PageIndex',
  components: {
    arvore : ArvoreComponent,
    btnFlutuante: BotaoFlutuanteComponent,
  }
}
</script>
