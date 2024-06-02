import { Kanit } from '@next/font/google'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], // Você pode adicionar diferentes pesos
  style: ['normal', 'italic'], // E diferentes estilos
})
interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                flex flex-col items-center
                bg-gray-100 overflow-x-hidden relative
                ${props.className ?? ''}
                ${kanit.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}