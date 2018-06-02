
let mes = [
  { 0 : 'Janeiro'},
  { 1 : 'Fevereiro'},
  { 2 : 'Março'},
  { 3 : 'Abril'},
  { 4 : 'Maio'},
  { 5 : 'Junho'},
  { 6 : 'Julho'},
  { 7 : 'Agosto'},
  { 8 : 'Setembro'},
  { 9 : 'Outubro'},
  { 10 : 'Novembro'},
  { 11 : 'Dezembro'}
]
export default ({ app, router, Vue }) => {
    Vue.prototype.$numPorMes = (num) => {
      console.log(num + 'oi');
    }
  }
