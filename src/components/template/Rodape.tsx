import Link from "next/link"
import Image from "next/image"

export default function Rodape(){
    return(
        <div className={`
            flex flex-col justify-center gap-2 items-center p-4 bg-gray-200 
            text-gray-600 w-screen text-sm
        `}>
            <span className="font-semibold text-base">SIGA-NOS:</span>
            <div className="flex gap-1">
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
            <div className="text-center text-base">
                <p>&copy; EEEP Deputado José Maria Melo 2024.</p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className="flex gap-1">
                <p>Desenvolvido pelo curso de</p>
                <Link href="https://www.instagram.com/infor_epdjmm/">
                    <span className="font-bold">Informática</span>
                </Link>
            </div>
        </div>
    )
}