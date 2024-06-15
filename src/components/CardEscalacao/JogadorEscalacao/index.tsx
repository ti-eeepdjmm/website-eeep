import { Jogador } from "@/types/types" 
import Image from "next/image";

interface CardProps{
    time:string
    jogador:Jogador;
}

export default function JogadorEscalacao({ time, jogador }:CardProps){
    return(
        <div className={`
            flex justify-beetween w-full bg-white shadow-md shadow-slate-500
        `}>
            <Image
                src={`fotos/jogadores/${time}/${jogador.foto}`}	 
                height={62}
                width={62}
                alt="foto jogador"
            />
            <span>{jogador.nome}</span>
            {jogador.goleiro ??
                <Image
                    src={"icons/gloves.svg"}	 
                    height={62}
                    width={62}
                    alt="foto jogador"
                />  
            }
            {jogador.capitao ??
                <Image
                    src={"icons/capitan.svg"}	 
                    height={62}
                    width={62}
                    alt="foto jogador"
                />  
            }
        </div>
    )
}