import barsIcon from '../../../public/icons/bars.svg'
import closeIcon from '../../../public/icons/close.svg'
import Image from 'next/image'
import { useState } from 'react';



export default function MenuToggle() {
    const [aberto, setAberto] = useState(false);

    const abreMenu = () => setAberto(!aberto)

    return (
        <div className="">
            <div className='' onClick={abreMenu}>
                  {aberto ? 
                    <Image
                        src={closeIcon}
                        height={32}
                        width={32}
                        alt='logo do site'
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
                className={
                    `absolute top-16 right-0 w-32 bg-green-800 text-white 
                    flex flex-col items-center transition-transform duration-700 transform 
                    ${aberto ? 'translate-x-0' : 'translate-x-64'
                    }`
                }
            >
                <ul className="w-full text-center">
                    <li className="border-b border-white-600 w-full">
                        <a href="#home" className="block py-2">Início</a>
                    </li>
                    <li className="border-b border-white-600 w-full">
                        <a href="#home" className="block py-2">Cursos</a>
                    </li>
                    <li className="border-b border-white-600 w-full">
                        <a href="#home" className="block py-2">Sobre</a>
                    </li>
                    <li className="border-b border-white-600 w-full">
                        <a href="#home" className="block py-2">Esportes</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
