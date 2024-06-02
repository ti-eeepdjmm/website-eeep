import Link from "next/link"

export default function Rodape(){
    return(
        <div className={`
            flex flex-col justify-center items-center p-8 bg-gray-200 
            text-gray-600 w-screen text-sm
        `}>
            <p>&copy; Todos os direitos reservados 2023.</p>
            <div className="flex gap-1">
                <p>Desenvolvido pelo curso de</p>
                <Link href="https://www.instagram.com/infor_epdjmm/">
                    <span className="font-bold">Informática</span>
                </Link>
            </div>
        </div>
    )
}