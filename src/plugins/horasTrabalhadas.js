const arrayHoras = [];
export default ({ app, router, Vue }) => {
  Vue.prototype.$horasTrabalhadasDia = (horas) =>{

    let primeiroPeriodo = parseFloat(calculaPeriodo(horas[0], horas[1]));
    let segundoPeriodo = parseFloat(calculaPeriodo(horas[2], horas[3]));

    return(primeiroPeriodo + segundoPeriodo);
  }

  function calculaPeriodo(hora2, hora3) {
    if(typeof(hora2) && typeof(hora3) !== 'undefined'){
      let d1 = new Date(1970, 0, 1);
      let d2 = new Date(1970, 0, 1);

      d1.setHours(hora2.substr(0, 2));
      d1.setMinutes(hora2.substr(3, 4));

      d2.setHours(hora3.substr(0, 2));
      d2.setMinutes(hora3.substr(3, 4));

      return calculaTempo(d2, d1);
    }
  }


  function calculaTempo(tempo1, tempo2){
    var time = tempo1.getTime() - tempo2.getTime();

    var h = time / 3600000;
    return parseFloat(h, 10) + ":" + ((time % 3600000) / 60000);
  }
}
