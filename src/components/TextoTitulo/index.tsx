
interface TextoProps {
    titulo: string;
    white?:boolean;
}

export default function TextoTitulo(props: TextoProps) {
    return (
        <div className="text-center flex flex-col gap-2 w-full mb-4">
            <div id="titulo" className="flex flex-col items-center">
                <h2 className={`
                    text-lg font-bold md:text-xl 
                    ${props.white ? `text-white` : `text-green-700`}
                `}>
                    {props.titulo}
                </h2>
                <div id="barra-horizontal" className={`
                         w-1/2 h-1 md:w-1/4
                        ${props.white ? `bg-white border-2 border-white` : `bg-green-700 border-2 border-green-700`}
                `}>
                </div>
            </div>
        </div>
    );
}