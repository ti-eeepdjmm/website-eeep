import { Jogador } from "@/types/types" 
import JogadorEscalacao from "./JogadorEscalacao";


interface CardProps{
    nome:string
    escalacao:Array<Jogador>;
}

export default function CardEscalacao({ nome, escalacao }:CardProps){
    return(
        <div className="flex flex-col w-full p-2 gap-2">
            {
                escalacao.map((jogador, index) => 
                  <JogadorEscalacao
                        key={index}
                        time={nome}
                        jogador={jogador}
                  />  
                )
            }
        </div>
    )
}