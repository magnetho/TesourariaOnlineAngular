export class Contagem {

    constructor(
   public contagemResumoId:number,
   public movimentoId:number,
   public descricao:string,
   public valorSistema: number,
   public data: string,
   public status:number,
   public usuario:string,
   public dataAlteracao:string
    ){}

}