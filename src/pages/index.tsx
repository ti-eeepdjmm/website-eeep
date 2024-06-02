// import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import MenuToggle from '@/components/template/MenuToggle'
import MenuItem from '@/components/template/MenuItem'
import Rodape from '@/components/template/Rodape'
import Logo from '@/components/template/Logo'
import Banner from '@/components/template/Banner'

export default function Home() {
  return (
    <Pagina>
      <Cabecalho>
          <Logo/>
          <MenuToggle />
      </Cabecalho>
      <Banner inicio={false} />
      <Rodape />
    </Pagina>
  )
}