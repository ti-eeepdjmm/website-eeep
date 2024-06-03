
interface SecaoProps {
    children: React.ReactNode
    className?: string
    id?:string
}

export default function Secao(props: SecaoProps) {
    return (
        <section id={props.id ?? ''} className={`
                flex flex-col items-center justify-center w-full overflow-x-hidden
                ${props.className ?? ''}
        `}>
            {props.children}
        </section>
    )
}