// import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import MenuToggle from '@/components/template/MenuToggle'
import Rodape from '@/components/template/Rodape'
import Logo from '@/components/template/Logo'
import Banner from '@/components/template/Banner'
import Secao from '@/components/template/Secao'
import MenuEsportes from '@/components/MenuEsportes'
import { useState } from 'react'
import Tabela from '@/components/Tabela'
import { Time } from '@/types/types'

interface EsportesProps {
  tabela: Time[];
}

export default function Esportes({ tabela }:EsportesProps) {
  const [clickTabela, setClickTabela] = useState(false);

  return (
    <Pagina>
      <Cabecalho>
          <Logo/>
          <MenuToggle />
      </Cabecalho>
      <Banner inicio={false} />
      <Secao className='px-0'>
        <MenuEsportes 
          texto='Tabela'
          icone='table'
          selecionado={clickTabela}
          onClick={() => setClickTabela(!clickTabela)}
        />
        {clickTabela ?
            <Tabela tabela={tabela}/>
            :
            <></>
        }
      </Secao>
      <Rodape />
    </Pagina>
  )
}

// Estratégia de SSR para buscar dados da API na rederização da página
export async function getServerSideProps() {
  const res = await fetch('https://api-interclasses-app.vercel.app/api/tabela');
  const tabela = await res.json();

  return {
      props: {
          tabela,
      },
  };
}