/**
 * 
 */
export class CoordenadaGeografica {
    longitud: number;
    latitud: number;
}
/**
 * 
 */
export class Localizacion {
    lugar: String;
    coordenadaGeografica: CoordenadaGeografica;
}
/**
 * 
 */
export class Tuit {    
    usuario: Usuario;
    localizacion: Localizacion;
    texto: String;
    conteoFavoritos: number;
    conteoRetweet: number;
    fechaPublicacion: Date;
}
/**
 * 
 */
export class Usuario {
    nick: String;
    conteoSeguidores: number;
    conteoAmigos: number;
    conteoFavoritos: number;
    url: String;
}