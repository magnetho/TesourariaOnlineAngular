import { Status } from './status.model';

export interface Movimento {
    movimentoId: number,
    descricao: string,
    data: string,
    status: number,
    usuario: string,
    dataAlteracao: string,
    contagemResumo: Status[]
}
