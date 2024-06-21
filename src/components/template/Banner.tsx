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
            bg-green-700 flex flex-col h-48 md:h-[40rem] overflow-hidden
            relative
        `}>

            {paginaInicial ?
                <>
                    <Image
                        src={imagemEP}
                        alt='banner do site'
                        className="md:-mt-8"
                    />
                    <div className={`
                        absolute w-full h-full text-center text-white
                        flex flex-col justify-center gap-3
                    `}>
                        <h2 className="font-bold text-2xl md:text-5xl">Bem vindo!</h2>
                        <p className="md:text-2xl">Sua estrada para protagonizar uma história de sucesso começa aqui.</p>
                    </div>
                </>
                :
                <>
                    <Image
                        src={imagemInterclasse}
                        alt='banner do site'
                        className='md:-mt-40 md:w-1/1'
                    />
                   <div className={`
                        absolute w-full h-full text-center text-white
                        flex flex-col justify-center gap-3 md:px-60
                    `}>
                        <h2 className="font-bold text-2xl md:text-5xl">Interclasses</h2>
                        <p className="px-8 text-xs md:text-2xl">O maior campeonato de jogos interclasse da região da Ibiapaba, nessa batalha 
                        só o melhores times avançam e apenas um se sagra campeão!</p>
                    </div>
                </>
            }  
        </div>
    );
}