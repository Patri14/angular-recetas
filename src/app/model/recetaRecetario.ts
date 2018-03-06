/*clase para encapsular los atributos de una receta */

export class RecetaRecetario{

    //atributos
    id: number;
    nombre:string;
    cocinero:string;
    likes:number;
    foto:string;
    ingredientes:string[];
    descripcion:string;
    isGlutenFree:boolean;
    
   
   

    //constructor, sólo es posible un constructor
    /*el segundo parámetro sirve para que por defecto salga anónimo */
    constructor(nombre:string, cocinero:string ='anónimo',likes?:number, foto?:string, ingredientes?:string[], descripcion?:string, isGlutenFree?:boolean, id?:number ){
        console.log('recetaRecetario constructor');
        
        //inicializamos las variables
        this.nombre = nombre;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'assets/img/coche_default.jpg';
        }  
        
        this.likes = likes;
        this.cocinero = cocinero;
        this.descripcion = descripcion;
        this.isGlutenFree = isGlutenFree;
        this.ingredientes =ingredientes;
        this.id=id;

        //llamada al método
        

    }

    //métodos
    addIngrediente(ingrediente:string){
        this.ingredientes.push(ingrediente);
    }
}

