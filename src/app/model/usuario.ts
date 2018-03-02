/*clase para encapsular los atributos de un usuario */
export enum Sexo {
    MASCULINO = "masculino" ,
    FEMENINO = "fememnino",
    INDEFINIDO = "indefinido"
}

export class Usuario{

    //atributos
    id:number;
    nombreUser:string;
    apellido:string;
    email:string;
    avatar:string;
    sexo:Sexo;

 
    //constructor, sólo es posible un constructor
    /*el segundo parámetro sirve para que por defecto salga anónimo */
    constructor(nombre:string = 'Anónimo'){
        console.log('receta constructor');
        
        //inicializamos las variables
        this.id = -1;
        this.nombreUser = nombre;
        this.apellido = '';
        this.avatar = 'assets/img/avatar.png';
        this.email = '';
        this.sexo = Sexo.INDEFINIDO;

        //llamada al método
        

    }

    //métodos
   
}