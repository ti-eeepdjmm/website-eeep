import Image from "next/image";


interface MenuProps{
    icone: string;
    texto: string;
    selecionado: boolean;
    onClick:() => void;
}

export default function MenuEsportes(props:MenuProps){
    const icone = `/icons/${props.icone}.svg`;
    return(
        <div 
            className={`
                bg-green-700 flex items-center transition-all duration-300
                justify-between gap-2 w-full px-4 py-1 border-b-2 md:cursor-pointer
                ${props.selecionado ? 'bg-green-800':''}
                md:hover:bg-green-800 md:h-16 md:border-r-2 md:justify-center
                relative
            `}
            onClick={props.onClick}
        >
            <div className="flex items-center gap-2">
                <Image 
                    src={icone}
                    alt="icone botão"
                    width={34}
                    height={34}
                /> 
                <span className="text-white text-base">{props.texto}</span>  
            </div>
            <Image 
                src="/icons/arrow.svg"
                alt="icone seta"
                width={24}
                height={24}
                className={`
                    transition-all duration-300
                    ${props.selecionado ? 'rotate-90':''}
                    md:hidden
                `}
            /> 
        </div>
    );
}