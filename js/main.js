window.onload = start;

var formConvalidaciones;
var refConvalidaciones;
var tbodyTablaConvalidaciones;

function start() {
  formConvalidaciones = document.getElementById('form-convalidaciones');
  formConvalidaciones.addEventListener('submit', enviarConvalidacionAFirebase);

  tbodyTablaConvalidaciones = document.getElementById('tbody-tabla-convalidaciones');

  refConvalidaciones = firebase.database().ref().child('convalidaciones');

  mostrarConvalidacionesDeFirebase();
}

function mostrarConvalidacionesDeFirebase() {
  refConvalidaciones.on('value', function (snap) {
    var datos = snap.val();
    var filasAmostrar = "";
    for (var key in datos) {
      filasAmostrar += "<tr>" +
        "<td>" + datos[key].cicloAconvalidar + "</td>" +
        "<td>" + datos[key].moduloAconvalidar + "</td>" +
        "<td>" + datos[key].cicloAportado + "</td>" +
        "<td>" + datos[key].cicloAportado + "</td>" +
        "<td>" + "</td>" +
        "<td>" + "</td>" +
        "</tr>"
    }
    tbodyTablaConvalidaciones.innerHTML = filasAmostrar;
  });
}

function enviarConvalidacionAFirebase() {
  //alert('hola');
  event.preventDefault();
  refConvalidaciones.push({
    cicloAconvalidar: event.target.cicloAconvalidar.value,
    cicloAportado: event.target.cicloAportado.value,
    moduloAconvalidar: event.target.moduloAconvalidar.value,
    moduloAportado: event.target.moduloAportado.value
  });
  formConvalidaciones.reset();
}


