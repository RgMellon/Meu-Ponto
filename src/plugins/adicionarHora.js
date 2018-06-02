import { diaMesAno, mesAno } from './DataHelper';
import { db } from './firebase';

export default ({ app, router, Vue }) => {
  Vue.prototype.$addHora = (periodo, horario) => {
    db.ref('horas').child(`${mesAno}/${diaMesAno}`).push({
      periodo,
      horario: retornaHoraCorreta(horario)
    })
  }
}

function retornaHoraCorreta(horario){
    let parte = horario.split('T');
    let parteDaHora =  parte[1];
    return parteDaHora.substr(0,5);
}