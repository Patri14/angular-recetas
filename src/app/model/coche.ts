export class Coche{
    id: number;
    marca: string;
    modelo: string;
    version: string;
    foto:string;

    //características
    puertas: number;
    caballos: number;
    consumo: number;


//si ponemos el interrogante al parametro es q es opcional
    constructor (marca:string,  modelo:string, version?:string){
        this.id= -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.foto = 'assets/img/coche_default.jpg';

        this.puertas = 0;
        this.caballos = 0;
        this.consumo = 0;
    }
}