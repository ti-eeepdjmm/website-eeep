
import barsIcon from '../../../public/icons/bars.svg'
import Image from 'next/image'

interface Props {
    children: React.ReactNode
}
export default function Cabecalho({children}:Props) {
    return (
        <header className={
            `flex justify-between items-center py-0 px-4
           bg-green-700 w-screen h-16 md:px-64 md:h-24 shadow-md shadow-green-800
           sticky top-0
           `}>
            {children}
        </header>
    )
}