import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
// import logoC from "../../../public/logos/adm-logo.svg"

interface PropsCurso{
    logo: string;
    nome:string;
    link:string;
    descricao:string;
}

export default function CardCurso(props:PropsCurso){
    const logoCurso = `/logos/${props.logo}`
    return(
        <div className={`
                flex flex-col items-center justify-center bg-white shadow-md 
                shadow-green-950 rounded-lg p-4 md:h-64
                `}>
            <Image 
                src={logoCurso}
                alt="logo do curso"
                height={60}
                width={60}
            />
            <h2 className="font-bold text-green-700 text-lg">{props.nome}</h2>
            <p className="text-justify">
                {props.descricao}.
                {<Link className="text-green-700" href={props.link}>Saiba mais.</Link>}
            </p>
        </div>
    );
}