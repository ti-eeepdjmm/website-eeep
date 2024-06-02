import Rodape from "./Rodape"

interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                flex flex-col h-screen items-center md:px-96
                bg-gray-100 overflow-x-hidden relative
                ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}