export interface Time {
    time: string;
    p: number;
    pn: number;
    j: number;
    v: number;
    e: number;
    d: number;
    gp: number;
    gc: number;
    sg: number;
}


export interface Gols {
    _id?: any;
    nome: string;
    time: string;
    gols: number;
    foto: string
  }
  
export interface Cartoes {
    _id?: any;
    nome: string;
    time: string;
    cartoes: number;
    foto: string
}

  export interface Partidas {
    _id?: any;
    timeA: string;
    timeB: string;
    placarA: number;
    placarB: number;
    data: string;
    hora: string;
    finalizado: boolean;
    vencedor: string;
  }

  export interface Confrontos{
      _id: "",
      temporada: 0,
      rodadas: {
        grupos: [[
          partida:Partidas,
          partida:Partidas,
          partida:Partidas,
          partida:Partidas,
          partida:Partidas,
        ]],
        finais: [{
          fase:string,
          jogos:[]
        }]
      }
  }