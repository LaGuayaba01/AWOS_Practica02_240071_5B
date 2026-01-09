const bg = "linear-gradient(90deg, rgba(233, 233, 233, 1) 0%, rgba(26,198,113,1) 35%, rgba(131, 0, 218, 1) 100%)";
const style_console = `background: ${bg}; color: white; font-size: 16px; font-weight: bold; padding: 10px; border-radius: 5px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);`;

console.log("%c1.- Ejercicio 01: Declaración de Variables", style_console);


//Declaración de Variables
var miNombre = "Yhostin M.";
var misApellidos;
//utilizaremos la funcion console.log para imprimir el valor actual de la variable

console.warn("--Declaración de Variables itilizando el prefijo VAR--");

//Utilizaremos la función console.log para imprimir el valor actual de la variable
console.log("El valor de la variable miNombre es = ", miNombre);
console.log("El valor de la variable misApellidos es = ", misApellidos);
//Esto arroja un undefined dado que la variable  njo ha sido iniciualiazada , es decir no se le ha asignado un valor que almacenar

misApellidos = " Ramirez Gonzalez";
//En este momento ña vvariable ya tiene un valor almacenado por que añlimprimirlo deberá mostrar dicho dato
console.log("El valor de la variable misApellidos es = ", misApellidos);

miNombre = "Yhostin M:";
console.log("Hola mi nombre completo es ", miNombre, " ", misApellidos)


//Declaración de Variables utilizando el prefijo CONST
console.warn("--Declaración de Variables itilizando el prefijo CONST--");

/*  La palabra reservada CONST nos permite a nivel memoria reservar espacio para
almacenar datos de una constante que a diferencia de una VARIABLE esta no puede
cambiar su valor durante la ejecucuión del programa, de igual manera no se pueden 
declarar constantes sin obligatoriamente inicializarlas, es decir asignarlas un valor
especifico, por ejemplo:*/

const miMatricula = 240071;

//Impriomir el valor de  una constante 
console.log("El valor de la constante miMatricula es = ", miMatricula);
// const miEdad; Este es un error por que la constante no fue inicializada
/* miMatricula = 240000 Ocasiona un error por que el valor de una 
CONSTANTE no puede cambiar una vez ha sido asignada. */


//Declaración de Variables utilizando el prefijo LET
/* a palabra reservada LET en JavaScript nos permite declarar variables de una 
manera muy similar a VarDate, con la diferencia del alcance (SCOPE) de la misma, es decir
aquellas variables declaradas co */

var miFechaNacimiento = new Date("2006-03-11");

function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requrimos de la fecha del día de hoy
    let fechaHoy = new Date();
    
    /* //Dado que los datos de fechas son almacenados en milisegunddos por default en
    JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos por día */
    let milisegundosPorDia = 1000 * 60 * 60 * 24;
    
    /* //Ya que tenemos los milisegundos por día tenemos que restar a la fecha de hoy, la
    fecha en que nacimos para calcular los milisegundos que hemos vivido */
    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;
    
    //Invocamos el método matemático de la funció ´piso (FLOOR)
    let edad = diasVividos / 365.25;
    edad = Math.floor(edad);
    
    return edad;
}

console.warn("--Declaración de Variables utilizando el prefijo LET--");
console.log("El valor de la variable miFechaNacimiento es = ", miFechaNacimiento);
var miEdad = calcularEdad(miFechaNacimiento);
console.log("Después de ejecutar la función calcularEdad(), puedo saber que tienes", miEdad, "años de edad.");

// Declaramos las variables afuera para que tengan alcance en todo este sector
var esMayorDeEdad; 
let esMenorDeEdad; 

if (miEdad >= 18) {
    esMayorDeEdad = true;
    esMenorDeEdad = false;
} else {
    esMayorDeEdad = false;
    esMenorDeEdad = true;
}


console.log("En base a tu edad puedo deducir que el valor de esMayorEdad es: ", esMayorDeEdad, " y el valor de esMenorDeEdad es:", esMenorDeEdad);

console.warn("--Interpolación de Datos--");
console.log(`Hola, ${miNombre} ${misApellidos}, sé que tienes ${miEdad} años, por lo que eres: ${esMayorDeEdad ? 'Mayor de edad' : 'Menor de edad'}`);


