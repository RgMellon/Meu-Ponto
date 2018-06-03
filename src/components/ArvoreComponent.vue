<template>
  <div>
    <div v-for="(item, index) of this.items">
      <q-collapsible style="margin-top: 1rem" class="header-c">
        <template slot="header">
          <q-item-side right>
            <q-icon name="calendar_today" color="primary" size="26px" />
          </q-item-side>
          <q-item-main center :label="index | formataMes" />
        </template>
        <div>
          <div v-for="(j, index) of item">
          <q-item-separator />
            <q-collapsible>
              <template slot="header">
                <q-item-side right>
                  <q-icon name="date_range" color="grey-6" size="24px" />
                </q-item-side>
                <q-item-main center :label="index | formataDiaMesAno" />
              </template>
              <div>
                <div v-for="(y, index) of j" class="row justify-between">
                  <q-item style="margin-left: 1.5rem">
                    <q-item-main>
                    <q-icon name="data_usage" :color="mudaCor(y['periodo'])" size="22px" />
                      {{ y['periodo'] | formataPeriodo }} :
                    </q-item-main>
                    <q-item-side right>
                      {{ y['horario'] }}
                    </q-item-side>
                  </q-item>
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
  methods: {
    mudaCor(entrada) {
      let primeiraLetra  = entrada.charAt(0);
       primeiraLetra == 'e' ? primeiraLetra = 'green' : ''
       primeiraLetra == 'a' ? primeiraLetra = 'yellow' : ''
       primeiraLetra == 'v' ? primeiraLetra = 'purple' : ''
       primeiraLetra == 's' ? primeiraLetra = 'red' : ''
       return primeiraLetra;
    }
  }
}
</script>

<style scoped>
  .header-c {
    background: #f6f7fb69;
    box-shadow: 0px 3px 5px 0px rgba(182, 194, 201, 0.75);
    padding: 0.4rem;
  }
</style>
