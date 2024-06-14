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
import { Cartoes, Confrontos, Gols, Time } from '@/types/types'
import TextoTitulo from '@/components/TextoTitulo'
import CardEquipeOrg from '@/components/CardEquipeOrg'
import Estatisticas from '@/components/Estatisticas'
import Rodadas from '@/components/Rodadas'
import MenuEquipe from '@/components/MenuEquipe'
import CardEquipes from '@/components/CardEquipes'

interface EsportesProps {
  tabela: Time[];
  gols: Gols[];
  cartoesAmarelos: Cartoes[];
  cartoesVermelhos: Cartoes[];
  confrontos:Confrontos;
}

export default function Esportes({ tabela, gols, cartoesAmarelos, cartoesVermelhos, confrontos }: EsportesProps) {
  const [clickTabela, setClickTabela] = useState(false);
  const [clickEstatistica, setclickEstatistica] = useState(false);
  const [clickRodadas, setclickRodadas] = useState(false);
  const [clickEquipes, setclickEquipes] = useState(false);

  // menus escalação
  const [clickEquipe1, setClickEquipe1] = useState(false);
  const [clickEquipe2, setClickEquipe2] = useState(false);

  return (
    <Pagina>
      <Cabecalho>
        <Logo />
        <MenuToggle />
      </Cabecalho>
      <Banner inicio={false} />
      {/* Secão dos esportes */}
      <Secao className='px-0'>
        <MenuEsportes
          texto='Tabela'
          icone='table'
          selecionado={clickTabela}
          onClick={() => setClickTabela(!clickTabela)}
        />
        {clickTabela ?
          <Tabela tabela={tabela} />
          :
          <></>
        }

        <MenuEsportes
          texto='Estatísticas'
          icone='ball2'
          selecionado={clickEstatistica}
          onClick={() => setclickEstatistica(!clickEstatistica)}
        />
        {clickEstatistica ?
          <Estatisticas
            gols={gols}
            cartoesAmarelos={cartoesAmarelos}
            cartoesVermelhos={cartoesVermelhos}
          />
          :
          <></>
        }

        <MenuEsportes
          texto='Rodadas'
          icone='calendar'
          selecionado={clickRodadas}
          onClick={() => setclickRodadas(!clickRodadas)}
        />
        {clickRodadas ?
          <Rodadas confrontos={confrontos} />
          :
          <></>
        }
        <MenuEsportes
          texto='Equipes'
          icone='shield'
          selecionado={clickEquipes}
          onClick={() => setclickEquipes(!clickEquipes)}
        />
        {clickEquipes ?
          <CardEquipes 
            equipes={[]}
          />
          :
          <></>
        }
      </Secao>
      {/* Seção equipe de organização */}
      <Secao className='px-2 py-4 gap-4'>
        <TextoTitulo titulo='Equipe de Organização' />
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
  // busca dados da tabela
  const dataTabela = await fetch('https://api-interclasses-app.vercel.app/api/tabela');
  const tabela = await dataTabela.json();

  // busca dados para estatísticas
  const dataEstatisticas = await fetch('https://api-interclasses-app.vercel.app/api/estatisticas');
  const estatisticas = await dataEstatisticas.json();
  const gols = estatisticas.gols;
  const cartoesAmarelos = estatisticas.cartoes_amarelos;
  const cartoesVermelhos = estatisticas.cartoes_vermelhos;

  // busca dados das rodas
  const dataConfrontos = await fetch('https://api-interclasses-app.vercel.app/api/partidas');
  const confrontos = await dataConfrontos.json();

  return {
    props: {
      tabela,
      gols,
      cartoesAmarelos,
      cartoesVermelhos,
      confrontos,
    },
  };
}