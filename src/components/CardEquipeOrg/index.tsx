import Image from "next/image";

interface CardProps{
    nome:string;
    foto:string;
    funcao:string;
    semFoto?:boolean;
}

export default function CardEquipeOrg({ nome, foto, funcao, semFoto }:CardProps){
    return(
        <div className={`
            flex flex-col items-center justify-center p-4 gap-0 
            shadow-md shadow-gray-500 rounded-lg w-40 h-44 md:w-48
        `}>
            <div className="rounded-full overflow-hidden h-24 w-24 flex items-start justify-center border-2 border-green-700">
                {semFoto ? 
                    <Image 
                        src={`/fotos/organizacao/${foto}.jpg`}
                        alt="foto da equipe"
                        width={40}
                        height={40}
                        className="mt-6"
                    />
                    :
                    <Image 
                        src={`/fotos/organizacao/${foto}.jpg`}
                        alt="foto da equipe"
                        width={100}
                        height={100}
                        className="min-w-32"
                    />
                }
                
            </div>
            <span className="font-semibold text-sm">{nome}</span>
            <span className="italic text-xs">{funcao}</span>
        </div>
    );
}