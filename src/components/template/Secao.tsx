
interface SecaoProps {
    children: React.ReactNode
    className?: string
    id?:string
}

export default function Secao(props: SecaoProps) {
    return (
        <section id={props.id ?? ''} className={`
                flex flex-col gap-2 items-center justify-center py-4 px-2 w-full overflow-x-hidden
                ${props.className ?? ''}
        `}>
            {props.children}
        </section>
    )
}