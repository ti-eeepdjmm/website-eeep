// import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import MenuToggle from '@/components/template/MenuToggle'
import Rodape from '@/components/template/Rodape'
import Logo from '@/components/template/Logo'
import Banner from '@/components/template/Banner'
import Secao from '@/components/template/Secao'
import TextoTitulo from '@/components/TextoTitulo'
import CardSobre from '@/components/CardSobre'

export default function Home() {
  return (
    <Pagina>
      <Cabecalho>
          <Logo/>
          <MenuToggle />
      </Cabecalho>
      <Banner inicio={false} />
      <Secao className='bg-white'>
        <TextoTitulo titulo='Nossa História' />
        <CardSobre />
      </Secao>
      <Rodape />
    </Pagina>
  )
}
