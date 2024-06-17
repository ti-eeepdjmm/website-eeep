import { Equipe } from "@/types/types" 
import CardEscalacao from "../CardEscalacao";
import { useState } from "react";
import MenuEquipe from "../MenuEquipe";

interface CardProps{
    equipes:Array<Equipe>;
}

export default function CardEquipes({ equipes }:CardProps){
    const [activeIndex, setActiveIndex] = useState(null);

    const handleMenuClick = (index:any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return(
        <div className="flex flex-col gap-2 p-2 w-full bg-gray-200">
            {
                equipes.map((equipe, index) => 
                  <>
                    <MenuEquipe 
                       icone={equipe.nome}
                       selecionado={activeIndex === index} 
                       texto={equipe.nome}
                       key={index}
                       onClick={() => handleMenuClick(index)}
                    />
                    {activeIndex === index &&
                        <CardEscalacao
                            key={index}
                            nome={equipe.nome}
                            escalacao={equipe.escalacao}
                        />
                    }
                  </>
                )
            }
        </div>
    )
}