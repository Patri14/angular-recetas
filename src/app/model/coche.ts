export class Coche{

    id : number;
    marca : string;
    modelo : string;
    version : string;
    foto : string;

    //caracteristicas
    puertas : number;
    caballos: number;
    consumo: number;
    
    constructor( marca:string , modelo:string, puertas:number, foto?:string, version?:string, caballos?:number, consumo?:number ,id?:number ){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'assets/img/coche_default.jpg';
        }    
        this.puertas = puertas;
        this.caballos = caballos;
        this.consumo = consumo;

    }

}