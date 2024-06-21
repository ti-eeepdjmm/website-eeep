import Link from 'next/link';
import barsIcon from '../../../public/icons/bars.svg';
import closeIcon from '../../../public/icons/close.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MenuToggle() {
    const [aberto, setAberto] = useState(false);
    const router = useRouter();

    const abreMenu = () => setAberto(!aberto);

    const menuItems = [
        { name: 'Início', path: '/' },
        { name: 'Cursos', path: '/#cursos' },
        { name: 'Sobre', path: '/#sobre' },
        { name: 'Esportes', path: '/esportes' },
    ];

    return (
        <div className="md:w-full md:flex overflow-hidden md:justify-end z-30">
            <div className='md:hidden' onClick={abreMenu}>
                {aberto ? 
                    <Image
                        src={closeIcon}
                        height={32}
                        width={32}
                        alt='botão fechar'
                        className='bg-green-800 transition-all duration-700 md:h-full md:w-44'
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
                <ul className={`flex flex-col md:flex-row w-full md:text-base text-center`}>
                    {menuItems.map(item => (
                        <li key={item.path} className={`
                            md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200 
                            ${router.pathname === item.path ? 'text-yellow-400' : ''}
                            py-2
                            `}>
                            <Link href={item.path}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
