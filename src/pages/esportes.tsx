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

export default function Esportes() {
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
            <Tabela />
            :
            <></>
        }
      </Secao>
      <Rodape />
    </Pagina>
  )
}
