class Persona{
    static contadorPersonas = 0;
    constructor(nombre, apellido){
        this._idPersonas = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get contadorPersonas (){
        return this._idPersonas;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
}


