import Image from "next/image";

interface MenuProps{
    icone: string;
    texto: string;
    selecionado: boolean;
    onClick:() => void;
}

export default function MenuEquipe(props:MenuProps){
    const icone = `/logos/${props.icone.toLocaleLowerCase().substring(3,)}-logo.svg`;
    console.log(icone);
    return(
        <div 
            className={`
                bg-white flex items-center text-black transition-all duration-300 h-9
                justify-between gap-2 w-full px-4 py-1 border-b-2 shadow-md shadow-slate-300
                ${props.selecionado ? 'bg-gray-400':''}
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
                <span className="text-black text-base">{props.texto}</span>  
            </div>
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 20 20" 
                xmlns="http://www.w3.org/2000/svg"
                className={`
                    transition-all duration-300
                    ${props.selecionado ? 'rotate-90':''}
                `}
            >
                <path className="fill-gray-700" d="M6.61619 2.045C6.38185 2.27941 6.25021 2.59729 6.25021 2.92875C6.25021 3.2602 6.38185 3.57809 6.61619 3.8125L12.8037 10L6.61619 16.1875C6.38849 16.4233 6.2625 16.739 6.26535 17.0668C6.26819 17.3945 6.39966 17.708 6.63142 17.9398C6.86318 18.1715 7.17669 18.303 7.50444 18.3058C7.83218 18.3087 8.14794 18.1827 8.38369 17.955L15.4549 10.8837C15.6893 10.6493 15.8209 10.3315 15.8209 10C15.8209 9.66854 15.6893 9.35066 15.4549 9.11625L8.38369 2.045C8.14928 1.81066 7.8314 1.67902 7.49994 1.67902C7.16848 1.67902 6.8506 1.81066 6.61619 2.045Z" fill="white"/>
            </svg>
        </div>
    );
}