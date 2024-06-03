import Card from '@/components/Card'
import Jogador from '@/components/Jogador'
import { Gols, Cartoes } from '@/types/types'

interface Props {
    gols: Array<Gols>;
    cartoesAmarelos: Array<Cartoes>;
    cartoesVermelhos: Array<Cartoes>;
}

export default function Estatisticas({ gols, cartoesAmarelos, cartoesVermelhos }: Props) {
    return (
        <div className='w-full px-2 pb-2'>
            <Card titulo='Gols'>
                {gols.map((jogador, index) =>
                    <Jogador
                        key={index}
                        nome={jogador.nome}
                        time={jogador.time}
                        posicao={index + 1}
                        estatistica={jogador.gols}
                        foto={jogador.foto.trim().length > 0 ? `/fotos/jogadores/${jogador.foto}.jpg` : '/icons/foto-icon.svg'}
                    />)}
            </Card>
            <Card titulo='Cartões Amarelos'>
                {cartoesAmarelos.map((jogador, index) =>
                    <Jogador
                        key={index}
                        nome={jogador.nome}
                        time={jogador.time}
                        posicao={index + 1}
                        estatistica={jogador.cartoes}
                        foto={jogador.foto.trim().length > 0 ? `/fotos/jogadores/${jogador.foto}.jpg` : '/icons/foto-icon.svg'}
                    />)}
            </Card>
            <Card titulo='Cartões Vermelhos'>
                {cartoesVermelhos.map((jogador, index) =>
                    <Jogador
                        key={index}
                        nome={jogador.nome}
                        time={jogador.time}
                        posicao={index + 1}
                        estatistica={jogador.cartoes}
                        foto={jogador.foto.trim().length > 0 ? `/fotos/jogadores/${jogador.foto}.jpg` : '/icons/foto-icon.svg'}
                    />)}
            </Card>
        </div>
    );
}
