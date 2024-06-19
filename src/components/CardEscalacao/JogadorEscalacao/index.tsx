import { Jogador } from "@/types/types" 
import Image from "next/image";

interface CardProps{
    time:string
    jogador:Jogador;
}

export default function JogadorEscalacao({ time, jogador }:CardProps){
    const foto = `/fotos/jogadores/${time.toLocaleLowerCase()}/${jogador.foto}.png`
    return(
        <div className={`
            flex items-center justify-between w-full bg-white shadow-md shadow-slate-500
            px-2 h-20 md:w-60
        `}>
            <div className="flex gap-2 items-center">
                <div className="rounded-full border-2 border-gray-400 h-16 w-16 flex items-start justify-center overflow-hidden">
                    <Image
                        src={foto}
                        height={100}	 
                        width={100}
                        alt="foto jogador"
                        className="max-w-xl -mt-4"
                    />
                </div>
                <span>{jogador.nome}</span>
            </div>
            <div className="flex items-center gap-2">
                {jogador.goleiro ? 
                    <Image
                        src={"icons/gloves.svg"}	 
                        height={48}
                        width={48}
                        alt="foto jogador"
                    />
                    :
                    <></> 
                }
                {jogador.capitao ?
                    <Image
                        src={"icons/capitan.svg"}	 
                        height={32}
                        width={32}
                        alt="foto jogador"
                    />
                    :
                    <></> 
                }
            </div>
        </div>
    )
}