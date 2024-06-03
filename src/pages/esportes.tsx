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
import TextoTitulo from '@/components/TextoTitulo'
import CardEquipeOrg from '@/components/CardEquipeOrg'

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
      <Secao className='px-2 py-4 gap-4'>
        <TextoTitulo titulo='Equipe de Organização'/>
        <div className='flex justify-center flex-wrap items-center gap-2 w-full'>
            <CardEquipeOrg 
              nome='Prof. Vanessa'
              funcao='Coordenadora'
              foto='vanessa'
            />
            <CardEquipeOrg 
              nome='Prof. Kariny'
              funcao='Arbitragem'
              foto='kariny'
            />  
            <CardEquipeOrg 
              nome='Prof. Henrique'
              funcao='Arbitragem'
              foto='rick'
            /> 
            <CardEquipeOrg 
              nome='Richard'
              funcao='Assistente'
              foto='richard'
            /> 
            <CardEquipeOrg 
              nome='Kauan'
              funcao='Assistente'
              foto='kauan'
            />
            <CardEquipeOrg 
              nome='Alisson'
              funcao='Assistente'
              foto='alisson'
            /> 
            <CardEquipeOrg 
              nome='Artur'
              funcao='Socorrista'
              foto='sem-foto'
              semFoto={true}
            /> 
            <CardEquipeOrg 
              nome='Jordana'
              funcao='Socorrista'
              foto='sem-foto'
              semFoto={true}
            /> 
        </div>
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