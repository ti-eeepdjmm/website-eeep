import logoepdjmm from '../../../public/logos/logo_epdjmm_color.svg'
import barsIcon from '../../../public/icons/bars.svg'
import Image from 'next/image'

interface Props {
    children: React.ReactNode
}
export default function Cabecalho() {
    return (
        <header className={
            `flex  justify-between items-center  py-0 px-4
           bg-green-700 w-screen h-16 md:px-96 md:h-40 shadow-md shadow-gray-400
           sticky top-0
           `}>
            <div className='flex items-center'>
                <Image
                    src={logoepdjmm}
                    height={68}
                    width={68}
                    alt='logo do site'
                    className='md:h-full md:w-44'
                />
                <span className={`
                    text-white font-bold text-base
                `}>EEEPDJMM</span>
            </div>

            <Image
                src={barsIcon}
                height={40}
                width={40}
                alt='logo do site'
                className='md:h-full md:w-44'
            />
        </header>
    )
}