<template>
  <div>
     <p class="caption"> </p>
     <q-tree :nodes="customize" node-key="label">
        <div slot="header-root" slot-scope="prop" class="row items-center">
          <q-icon :name="prop.node.icon || 'calendar_today'" color="primary" size="30px" class="q-mr-sm" />
          <div>
            {{ prop.node.label }}
          </div>
        </div>
        <div slot="header-generic" slot-scope="prop" class="row items-center">
          <q-icon :name="prop.node.icon || 'data_usage'" :color="prop.node.color" size="25px" class="q-mr-sm" />
          <div class="text-weight-bold text-primary">{{ prop.node.label }}</div>
        </div>
       <div slot="body-story" slot-scope="prop">
          <span class="text-weight-thin">Saldo : </span> {{ prop.node.story }}
        </div>
     </q-tree>
  </div>
</template>

<script>
export default {
  name: 'ArvoreComponent',
  data: () => ({
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
  })
}
</script>

<style>
</style>
