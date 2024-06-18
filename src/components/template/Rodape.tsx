import Link from "next/link"
import Image from "next/image"

export default function Rodape() {
    return (
        <div className={`
            flex flex-col justify-center gap-2 items-center p-4 bg-gray-200 
            text-gray-700 w-screen text-sm md:grid md:grid-cols-3 md:px-64 md:py-8
        `}>
            <div className="flex flex-col justify-center md:items-start gap-2">
                <span className="font-semibold text-base text-center w-full md:text-left">Siga-nos:</span>
                <div className="flex justify-center gap-1">
                    <Link href="https://www.instagram.com/eeepdepjosemariamelo">
                        <Image
                            src={'/icons/social-insta.svg'}
                            alt="redes sociais"
                            height={40}
                            width={40}
                        />
                    </Link>
                    <Link href="https://www.facebook.com/eeepdepjosemariamelo/">
                        <Image
                            src={'/icons/social-face.svg'}
                            alt="redes sociais"
                            height={40}
                            width={40}
                        />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCpD_tFJUdFzGic6wIYeLwWg">
                        <Image
                            src={'/icons/social-youtube.svg'}
                            alt="redes sociais"
                            height={40}
                            width={40}
                        />
                    </Link>
                </div>
                <div className="text-center text-base md:text-left">
                    <p>&copy; EEEP Deputado José Maria Melo 2024.</p>
                    <p>Todos os direitos reservados.</p>
                </div>
            </div>
            <div className="md:flex hidden">
                <ul className={`
                                flex flex-col w-full h-full gap-2
                                md:text-base text-center font-semibold           
                `}>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <a href="/" className="block">Início</a>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <a href="/#cursos" className="block">Cursos</a>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <a href="/#sobre" className="block">Sobre</a>
                    </li>
                    <li className="md:border-0 border-b border-white-600 hover:text-yellow-400 w-full transition-all duration-200">
                        <a href="/esportes" className="block">Esportes</a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <span className="font-bold text-base text-center md:text-left">Endereço:</span>
                    <div className="flex flex-col">
                        <span>Avenida Tenente Matias S/N, CE-187 </span>
                        <span>CEP: 62380-000, Guaraciaba do Norte-CE</span>
                        <span>e-mail:<a href="mailto:eeepdepjosemaria.cr05@escola.ce.gov.br">eeepdepjosemaria.cr05@escola.ce.gov.br</a> </span>
                    </div>
                </div>
                <div className="flex gap-1 justify-center md:justify-start">
                    <p>Desenvolvido pelo curso de</p>
                    <Link href="https://www.instagram.com/infor_epdjmm/">
                        <span className="font-bold">Informática</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}