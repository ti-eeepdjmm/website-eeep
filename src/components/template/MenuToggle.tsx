import Link from 'next/link';
import barsIcon from '../../../public/icons/bars.svg'
import closeIcon from '../../../public/icons/close.svg'
import Image from 'next/image'
import { useState } from 'react';



export default function MenuToggle() {
    const [aberto, setAberto] = useState(false);

    const abreMenu = () => setAberto(!aberto)

    return (
        <div className="md:w-full md:flex overflow-hidden md:justify-end">
            <div className='md:hidden' onClick={abreMenu}>
                  {aberto ? 
                    <Image
                        src={closeIcon}
                        height={32}
                        width={32}
                        alt='botão fechar'
                        className=' bg-green-800 transition-all duration-700 md:h-full md:w-44'
                    /> 
                    : 
                    <Image
                        src={barsIcon}
                        height={42}
                        width={42}
                        alt='logo do site'
                        className='transition-all duration-700 md:h-full md:w-44'
                    /> 

                  }  
            </div>
            <nav
                className={`
                    absolute top-16 right-0 w-32 bg-green-800 text-white 
                    flex flex-col items-center transition-transform duration-700 transform 
                    
                    ${aberto ? 'translate-x-0' : 'translate-x-64'}
                     
                    md:relative md:top-0 md:bg-green-700 md:w-96
                    md:translate-x-0

                    `}
            >
                <ul className={`
                                flex flex-col md:flex-row w-full 
                                md:text-base text-center
                                
                `}>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <Link href="/" className="block py-2">Início</Link>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <Link href="/#cursos" className="block py-2">Cursos</Link>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <Link href="/#sobre" className="block py-2">Sobre</Link>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <Link href="/esportes" className="block py-2">Esportes</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
