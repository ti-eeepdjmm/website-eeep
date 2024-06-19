// Importações de componentes e hooks necessários
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
import { Cartoes, Confrontos, Gols, Time, Equipe } from '@/types/types'
import TextoTitulo from '@/components/TextoTitulo'
import CardEquipeOrg from '@/components/CardEquipeOrg'
import Estatisticas from '@/components/Estatisticas'
import Rodadas from '@/components/Rodadas'
import CardEquipes from '@/components/CardEquipes'

// Interface que define as propriedades esperadas pelo componente Esportes
interface EsportesProps {
  tabela: Time[];
  gols: Gols[];
  cartoesAmarelos: Cartoes[];
  cartoesVermelhos: Cartoes[];
  confrontos: Confrontos;
  equipes: Array<Equipe>;
}

export default function Esportes({ tabela, gols, cartoesAmarelos, cartoesVermelhos, confrontos, equipes }: EsportesProps) {
  // Estado que guarda qual menu está selecionado, iniciando com 'tabela'
  const [selectedMenu, setSelectedMenu] = useState<string | null>('tabela');

  // Função para lidar com o clique nos itens do menu
  const handleMenuClick = (menu: string) => {
    setSelectedMenu(selectedMenu === menu ? null : menu); // Alterna entre selecionar e deselecionar o menu
  };

  // Função que renderiza o componente correto com base no menu selecionado
  const renderComponent = (menu: string | null) => {
    if (menu === selectedMenu) {
      switch (menu) {
        case 'tabela':
          return <Tabela tabela={tabela} />;
        case 'estatisticas':
          return <Estatisticas gols={gols} cartoesAmarelos={cartoesAmarelos} cartoesVermelhos={cartoesVermelhos} />;
        case 'rodadas':
          return <Rodadas confrontos={confrontos} />;
        case 'equipes':
          return <CardEquipes equipes={equipes} />;
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <Pagina>
      <Cabecalho>
        <Logo />
        <MenuToggle />
      </Cabecalho>
      <Banner inicio={false} />

      {/* Seção dos esportes */}
      <Secao className='px-0 md:flex-row'>
        {/* Menu e conteúdo da Tabela */}
        <div className='w-full'>
          <MenuEsportes
            texto='Tabela'
            icone='table'
            selecionado={selectedMenu === 'tabela'}
            onClick={() => handleMenuClick('tabela')}
          />
          <div className='w-full md:hidden'>
            {renderComponent('tabela')}
          </div>
        </div>
        {/* Menu e conteúdo das Estatísticas */}
        <div className='w-full'>
          <MenuEsportes
            texto='Estatísticas'
            icone='ball2'
            selecionado={selectedMenu === 'estatisticas'}
            onClick={() => handleMenuClick('estatisticas')}
          />
          <div className='w-full md:hidden'>
            {renderComponent('estatisticas')}
          </div>
        </div>
        {/* Menu e conteúdo das Rodadas */}
        <div className='w-full'>
          <MenuEsportes
            texto='Rodadas'
            icone='calendar'
            selecionado={selectedMenu === 'rodadas'}
            onClick={() => handleMenuClick('rodadas')}
          />
          <div className='w-full md:hidden'>
            {renderComponent('rodadas')}
          </div>
        </div>
        {/* Menu e conteúdo das Equipes */}
        <div className='w-full'>
          <MenuEsportes
            texto='Equipes'
            icone='shield'
            selecionado={selectedMenu === 'equipes'}
            onClick={() => handleMenuClick('equipes')}
          />
          <div className='w-full md:hidden'>
            {renderComponent('equipes')}
          </div>
        </div>
      </Secao>

      <Secao>
        {/* Conteúdo dos esportes para desktop */}
        <div id="conteudo-esportes" className='w-full hidden md:block md:px-64'>
          {renderComponent(selectedMenu)}
        </div>
      </Secao>

      {/* Seção equipe de organização */}
      <Secao className='px-2 py-4 gap-4'>
        <TextoTitulo titulo='Equipe de Organização' />
        <div className={`
          flex justify-center flex-wrap items-center gap-2 w-full
          md:grid md:grid-cols-4 md:px-64 md:gap-8
        `}>
          <CardEquipeOrg nome='Prof. Vanessa' funcao='Coordenadora' foto='vanessa' />
          <CardEquipeOrg nome='Prof. Kariny' funcao='Arbitragem' foto='kariny' />
          <CardEquipeOrg nome='Prof. Henrique' funcao='Arbitragem' foto='rick' />
          <CardEquipeOrg nome='Richard' funcao='Assistente' foto='richard' />
          <CardEquipeOrg nome='Kauan' funcao='Assistente' foto='kauan' />
          <CardEquipeOrg nome='Alisson' funcao='Assistente' foto='alisson' />
          <CardEquipeOrg nome='Artur' funcao='Socorrista' foto='sem-foto' semFoto={true} />
          <CardEquipeOrg nome='Joana Darc' funcao='Socorrista' foto='sem-foto' semFoto={true} />
        </div>
      </Secao>
      <Rodape />
    </Pagina>
  );
}

// Função de Server-Side Rendering (SSR) para buscar dados da API na renderização da página
export async function getServerSideProps() {
  // Busca dados da tabela
  const dataTabela = await fetch('https://api-interclasses-app.vercel.app/api/tabela');
  const tabela = await dataTabela.json();

  // Busca dados para estatísticas
  const dataEstatisticas = await fetch('https://api-interclasses-app.vercel.app/api/estatisticas');
  const estatisticas = await dataEstatisticas.json();
  const gols = estatisticas.gols;
  const cartoesAmarelos = estatisticas.cartoes_amarelos;
  const cartoesVermelhos = estatisticas.cartoes_vermelhos;

  // Busca dados das rodadas
  const dataConfrontos = await fetch('https://api-interclasses-app.vercel.app/api/partidas');
  const confrontos = await dataConfrontos.json();

  // Busca dados das equipes
  const dataEquipes = await fetch('https://api-interclasses-app.vercel.app/api/equipes');
  const equipesTemporada = await dataEquipes.json();
  const equipes = equipesTemporada.equipes;

  return {
    props: {
      tabela,
      gols,
      cartoesAmarelos,
      cartoesVermelhos,
      confrontos,
      equipes,
    },
  };
}
