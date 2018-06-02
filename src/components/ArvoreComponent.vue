<template>
  <div>
    <div v-for="(item, index) of this.items">
      <q-collapsible icon="calendar_today" :label="index | formataMes">
        <hr>
        <div>
          <div v-for="(j, index) of item">
            <q-collapsible icon="date_range" :label="index | formataDiaMesAno">
              <div>
                <div v-for="(y, index) of j" class="row reverse justify-between">
                  <div v-for="p of y" >
                    {{ p | formataPeriodo }}
                  </div>
                </div>
              </div>
            </q-collapsible>
          </div>
        </div>
      </q-collapsible>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'ArvoreComponent',
  mounted() {
    const dbRefHoras = this.$firebase.ref().child('horas');
    dbRefHoras.on('value', snap => {
        this.items = snap.val();
    });
  },
  data: () => ({
    items: '',
    customize: [
      {
        label: 'Maio, 2018',
        header: 'root',
        children: [
          {
            label: 'Dia 28, Segunda',
            icon: 'today',
            color: 'green',
            header: 'generic',
            children: [
              {
                label: 'Entrada : 11:00',
                header: 'generic',
                color: 'yellow',
              },
              {
                label: 'Almoço : 11:00',
                header: 'generic',
                color: 'purple',
              },
              {
                label: 'Volta do almoço : 12:00',
                header: 'generic',
                color: 'grey',
              },
              {
                label: 'Saída : 11:00',
                header: 'generic',
                color: 'red',
              },
             {
                label: 'Total de Horas ',
                body: 'story',
                story: '2 horas positivas'
              }
            ],
            children: [
              {
                label: 'Entrada : 11:00',
                header: 'generic',
                color: 'yellow',
              },
              {
                label: 'Almoço : 11:00',
                header: 'generic',
                color: 'purple',
              },
              {
                label: 'Volta do almoço : 12:00',
                header: 'generic',
                color: 'grey',
              },
              {
                label: 'Saída : 11:00',
                header: 'generic',
                color: 'red',
              },
             {
                label: 'Total de Horas ',
                body: 'story',
                story: '2 horas positivas'
              }
            ],
          },
          {
            label: 'Dia 29, Terça',
            icon: 'today',
            color: 'red',
            header: 'generic',
            children: [
              {
                label: 'Entrada : 11:00',
                header: 'generic',
                color: 'yellow',
              },
              {
                label: 'Almoço : 11:00',
                header: 'generic',
                color: 'purple',
              },
              {
                label: 'Volta do almoço : 12:00',
                header: 'generic',
                color: 'grey',
              },
              {
                label: 'Saída : 11:00',
                header: 'generic',
                color: 'red',
              },
             {
                label: 'Total de Horas ',
                body: 'story',
                story: '2 horas positivas'
              }
            ],
            children: [
              {
                label: 'Entrada : 11:00',
                header: 'generic',
                color: 'yellow',
              },
              {
                label: 'Almoço : 11:00',
                header: 'generic',
                color: 'purple',
              },
              {
                label: 'Volta do almoço : 12:00',
                header: 'generic',
                color: 'grey',
              },
              {
                label: 'Saída : 11:00',
                header: 'generic',
                color: 'red',
              },
             {
                label: 'Total de Horas ',
                body: 'story',
                story: '2 horas positivas'
              }
            ],
          },
          {
            label: 'Saldo Mensal de horas ',
            children: [
              { label: 'Você teve 2 horas negativas ' },
              { label: 'Conferir Horarios', icon: 'timelapse'},
            ]
          }
        ]
      }
    ],
  }),
  filters:  {
    formataPeriodo(value) {
      if (!value) return ''
      value = value.toString()
      let valorFormatado = value.charAt(0).toUpperCase() + value.slice(1)
      valorFormatado = valorFormatado.replace('c', 'ç')
      if(valorFormatado.match(/_/)){
        return valorFormatado.replace('_', ' do ');
      }
      return valorFormatado;
    },
    formataDiaMesAno(value){
      if(!value) return ''
      let data = value.split('_');
      let dataFormatada = data.map(item => item.length == 1 ? `0${item}` : item )
      return dataFormatada.toString().replace(/,/g, '/');
    },
    formataMes(value){
      let m = value.charAt(0);
      let mes = [
       'Janeiro',
       'Fevereiro',
       'Março',
       'Abril',
       'Maio',
       'Junho',
       'Julho',
       'Agosto',
       'Setembro',
       'Outubro',
        'Novembro',
        'Dezembro'
      ]
      let n = parseInt(m)
      return(mes[n-1])
    }
  },

}
</script>

<style scoped>
  .teste {
    width: 100%;
    min-height: 70px;
    margin: 1rem;
    background: red;
  }
</style>
