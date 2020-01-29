export class Pokemon {

    private _id: number;
    private _nombre: string;
    private _imagen: string;
    private _imagen2: string;
    private _imagen3: string;
    private _imagen4: string;
    private _abilities: Array<any>;
    private _abilitiesDetalle: Array<any>;

    constructor(nombre: string) {
        this._id = 0;
        this._nombre = nombre;
        this._imagen = 'https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg';
        this._imagen2 = 'https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg';
        this._imagen3 = 'https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg';
        this._imagen4 = 'https://i.etsystatic.com/12696278/r/il/bb21a8/1868980486/il_570xN.1868980486_d6zs.jpg';
        this._abilities = [];
        this._abilitiesDetalle = [];
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get imagen2(): string {
        return this._imagen2;
    }
    public set imagen2(value: string) {
        this._imagen2 = value;
    }

    public get imagen3(): string {
        return this._imagen3;
    }
    public set imagen3(value: string) {
        this._imagen3 = value;
    }

    public get imagen4(): string {
        return this._imagen4;
    }
    public set imagen4(value: string) {
        this._imagen4 = value;
    }

    public get abilities(): Array<any> {
        return this._abilities;
    }
    public set abilities(value: Array<any>) {
        this._abilities = value;
    }

    public get abilitiesDetalle(): Array<any> {
        return this._abilitiesDetalle;
    }
    public set abilitiesDetalle(value: Array<any>) {
        this._abilitiesDetalle = value;
    }

}
