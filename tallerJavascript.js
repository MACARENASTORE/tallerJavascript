//Talleres: Definir 2 variables, asignarles un valor y utilizando una decisiones imprimir en la consola
//la que tenga el menor valor

//definir 3 variables, asignarles un valores y utilizar decisiones para imprimir en consola la que sea mayor

function calcularNumMayor() {
  let a = 32;
  let b = 28;
  let c = 46;

  if ((a > b && a > c)) {
    console.log("a es mayor que b y c");
  } else if((b > a && b> c)) {
    console.log("b es mayor que que a y c");
  } else if((c > a && c > b)) {
    console.log("c es mayor que a y b ");
  }
}

calcularNumMayor()