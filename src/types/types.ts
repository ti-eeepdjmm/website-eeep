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