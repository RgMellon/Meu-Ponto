<template>
   <q-page padding class="row justify-center docs-tree">
    <div style="width: 700px; max-width: 95vw;">
     
        <arvore></arvore>
     
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
