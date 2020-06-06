//declarar variables
let numero: number = 50;
let cadena: string = 'faby';
let boolean: boolean = true;
let lista: number[] = [1, 2, 3, 4];
let list: Array<string> = ["fay", "fab"];

//let and var
//let._tener un limitado alcance como bloque declaracion 
//var :_ global o local sin importar el ambito de bloque
function pruebaVar() {
    var x = 20;
    if (x == 20) {
        var x = 50;
        console.log("dentro del if x vale " + x);
    }
    console.log("fuera del if x vale " + x);
    if (true) {
        var x = 20;
        console.log("fuera del if x vale " + x);
    }
    var x = 4;
}
//console.log(pruebaVar());

//*******************************/
function pruebaLet() {
    let x = 20;
    if (x == 20) {
        let x = 50;
        console.log("Dentro del if x vale: " + x)
    }

    console.log("fuera del if x vale: " + x);
}
//console.log(pruebaLet());

//funciones y typados

function suma(x: number, y: number): number {
    return x + y;
}
function saludo(nombre: string, apellido ?: string): string {
    if (apellido) {
        return "El nombre es: " + nombre + " El apellido es: " + apellido;
    }
        return "El nombre es: " + nombre ;
}
//console.log(suma(9,4));
//console.log(saludo('lynna'));
//console.log(saludo('lynna','faby'));

/********************** */
/***funciones anonimas */
/********************* */
let miFuncion=(num:number,num2:number):number=>{
    return num+num2;
}
//console.log(miFuncion(2,18));

/**************************************************************** */
/**************************Interfaces*************************** */
/**************************************************************** */

interface IRobot{
    nombre:string;
    apellido:string;
    edad ?:number;
}
function dihola(informacion:IRobot):any{
    return "hola"+informacion.nombre+"-"+informacion.apellido+"y la edad de ella es "+informacion.edad;
}

let robot={nombre:"joder",apellido:"je",edad:20}

//console.log(dihola(robot));

/**************************************************************** */
/**************************Constructor*************************** */
/**************************************************************** */

class Robot{
    //variables
    nombre:string;
    apellido:string;
    
    //constructor

    constructor(nombre ?:string){
        if(nombre!==undefined){
            this.nombre=nombre;
        }else{
            this.nombre="bvbv";
        }
        

    }
     saludar():string{
        return "El nombre es: "+this.nombre;
    }

}

let rob = new Robot();
//console.log(rob.saludar());

/**************************************************************** */
/**************************herencia*************************** */
/**************************************************************** */

class Animal{
    animalName:string;
    patitas:number;

    constructor(name:string){
        this.animalName=name;
    }
    numeroPatitas(patas:number){
        this.patitas=patas;
        console.log("tengo "+this.patitas);
    }
}
class dog extends Animal{
    constructor(name:string){
        super(name)
    }
    saludo(){
        console.log("hola soy "+this.animalName)
    }
}

let tom = new dog("tom");
//tom.saludo();
//tom.numeroPatitas(4);

/*************************************************************** */
/********mofificadores de acceso public and private************* */
/*************************************************************** */


//public._ accesdes dentro de la clase y fuera de la clase que ha heredado a la clase padre
//private ._ solo se accede desde la misma  y si hereda otra clase no le acepta porque es privada y solo es acedidad desde la misma clase 


/*************************************************************** */
/*********************static en typescript********************** */
/*************************************************************** */

class convertion{
    static PI:number=3.141516;
    static radianes(grados:number){
        return "Los radianes son "+grados*convertion.PI/180;
    }
}
//cuando es statico se accede desde la clase comenzando desde la clase porque son estaticas
//console.log(convertion.radianes(25));

/*************************************************************** */
/***************************clases****************************** */
/*************************************************************** */

class lynnaFaby{
    name:string;
    apellido:string;
    saluda():string{
        return "hola soy"+" "+this.name+" "+this.apellido;
    }
}

let love = new lynnaFaby();
love.name="gh";

love.apellido="hfh";

console.log(love.saluda());
