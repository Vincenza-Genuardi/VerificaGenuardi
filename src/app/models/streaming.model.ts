export class Streaming{
    public brani: Brano[];
    public artisti: Artista[];
    constructor(brani:Brano[], artisti:Artista[]){
        this.brani = brani;
        this.artisti = artisti;
    }
}
export class Artista{
    public id: number;
    public nome: string;
    public brani: number;
    constructor(id:number, nome:string, brani:number){
        this.id = id;
        this.nome = nome;
        this.brani = brani;
    }
}
export class Brano{
    public id: number;
    public nome: string;
    public artista: string;
    public durata: String;
    constructor(id:number, nome:string, artista:string, durata:String){
        this.id = id;
        this.nome = nome;
        this.artista = artista;
        this.durata = durata;
    }
}