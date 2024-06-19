import Image from "next/image";
import imagemEP from '../../../public/banner/eeep.jpg'
import imagemInterclasse from '../../../public/banner/interclasses.jpg'

import { useState } from 'react';

interface PropsBanner {
   inicio: boolean
}

export default function Banner(props:PropsBanner) {
    const [paginaInicial, setPaginaInicial] = useState(props.inicio);
    
    return (
      
        <div id="banner" className={`
            bg-green-700 flex flex-col h-48 md:h-96 overflow-hidden
        `}>

            {paginaInicial ?
                <>
                    <Image
                        src={imagemEP}
                        alt='banner do site'
                        className="md:-mt-8"
                    />
                    <div className="-mt-32 md:absolute md:top-96 w-full text-center text-white">
                        <h2 className="font-bold text-2xl md:text-4xl">Bem vindo!</h2>
                        <p className="md:text-lg">Sua estrada para protagonizar uma história de sucesso começa aqui.</p>
                    </div>
                </>
                :
                <>
                    <Image
                        src={imagemInterclasse}
                        alt='banner do site'
                        className='md:-mt-40 md:w-1/1'
                    />
                    <div className="-mt-32 md:absolute md:top-96 w-full text-center text-white">
                        <h2 className="font-bold text-2xl md:text-4xl">Inteclasses</h2>
                        <p className="px-8 text-xs md:text-lg">O maior campeonato de jogos interclasse da região da Ibiapaba, nessa batalha 
                        só o melhores times avançam e apenas um se sagra campeão!</p>
                    </div>
                </>
            }  
        </div>
    );
}