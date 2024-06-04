import CardRodada from '@/components/CardRodada'
import Partida from '@/components/Partida'
import CardRodadasFinais from '@/components/CardRodadasFinais'
import { Partidas, Confrontos } from '@/types/types'

interface PropsRodadas {
    confrontos: Confrontos;
}

export default function Rodadas({ confrontos }: PropsRodadas) {

    return (
        <div className='py-4'>
            {
                confrontos.rodadas.finais.length > 0 ?
                    confrontos.rodadas.finais.map((rodada) =>
                        rodada.jogos.map((partida: Partidas, index: number) =>
                            <CardRodadasFinais rodada={index + 1} finais={rodada.fase} key={index}>
                                <Partida
                                    timeA={partida.timeA}
                                    timeB={partida.timeB}
                                    placarA={partida.placarA}
                                    placarB={partida.placarB}
                                    finalizado={partida.finalizado}
                                    data={partida.data}
                                    hora={partida.hora}
                                    vencedor={partida.vencedor}
                                    colspan={true}
                                    indefinido={partida.vencedor === 'indefinido'}
                                    final={rodada.fase == 'Final' ? true : false}
                                />
                            </CardRodadasFinais>
                        )
                    ) :
                    confrontos.rodadas.grupos.map((rodada, index) =>
                        <CardRodada rodada={index + 1} totalRodadas={rodada.length} key={index}>
                            {
                                rodada.map((partida: Partidas, index: number) =>
                                    <Partida
                                        key={index}
                                        timeA={partida.timeA}
                                        timeB={partida.timeB}
                                        placarA={partida.placarA}
                                        placarB={partida.placarB}
                                        finalizado={partida.finalizado}
                                        data={partida.data}
                                        hora={partida.hora}
                                        vencedor={partida.vencedor}
                                        colspan={index == rodada.length - 1 && rodada.length == 5 ? true : false}
                                    />
                                )
                            }
                        </CardRodada>
                    )
            }</div>
    );
}
