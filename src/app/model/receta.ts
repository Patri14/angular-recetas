/*clase para encapsular los atributos de una receta */

export class Receta{

    //atributos
    nombre:string;
    foto:string;
    likes:number;
    descripcion:string;
    isGlutenFree:boolean;
    cocinero:string;
    ingredientes:string[];
   

    //constructor, sólo es posible un constructor
    /*el segundo parámetro sirve para que por defecto salga anónimo */
    constructor(nombre:string, cocinero:string ='anónimo'){
        console.log('receta constructor');
        
        //inicializamos las variables
        this.nombre = nombre;
        this.foto = 'assets/img/receta_default.jpg';
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'lorem impsum dolor sit amet luo larsus lentiam portico';
        this.isGlutenFree = false;
        this.ingredientes =[];

        //llamada al método
        

    }

    //métodos
    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }
}

