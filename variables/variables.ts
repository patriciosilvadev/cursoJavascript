
class hola1{

    id:number;
    nombre:string;
    apellido:string;

    constructor(id :number,nombre :string,apellido:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
    }
    saludar(texto:string):void{
        console.log(texto+" "+this.id+" "+this.nombre);

    }
}

let loves = new hola1(1,"star","jeje");
console.log(loves.saludar("ok"));