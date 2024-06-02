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
            bg-green-700 flex flex-col h-48
        `}>

            {paginaInicial ?
                <>
                    <Image
                        src={imagemEP}
                        alt='banner do site'
                        className="h-full"
                    />
                    <div className="-mt-32 text-center text-white">
                        <h2 className="font-bold text-2xl">Bem vindo!</h2>
                        <p className="">Sua estrada para protagonizar uma história de sucesso começa aqui.</p>
                    </div>
                </>
                :
                <>
                    <Image
                        src={imagemInterclasse}
                        alt='banner do site'
                        className='h-full'
                    />
                    <div className="-mt-32 text-center text-white">
                        <h2 className="font-bold text-2xl">Inteclasses</h2>
                        <p className="px-8 text-xs">O maior campeonato de jogos interclasse da região da Ibiapaba, nessa batalha 
                        só o melhores times avançam e apenas um se sagra campeão!</p>
                    </div>
                </>
            }  
        </div>
    );
}