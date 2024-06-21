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
import Cursos from '@/components/Cursos'

export default function Home() {
  return (
    <Pagina>
      <Cabecalho>
          <Logo/>
          <MenuToggle />
      </Cabecalho>
      <Banner inicio={true} />
      <Secao id="sobre" className='bg-white px-4 py-4 gap-2 md:px-64 md:h-[30rem] md:justify-start'>
        <TextoTitulo titulo='Nossa História' />
        <CardSobre />
      </Secao>
      <Secao id="cursos" className='bg-green-700 p-4 gap-2 md:px-64'>
          <TextoTitulo titulo='Cursos' white={true}/>
          <Cursos />
      </Secao>
      <Rodape />
    </Pagina>
  )
}
