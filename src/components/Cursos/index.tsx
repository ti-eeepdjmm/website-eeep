import { StaticImport } from "next/dist/shared/lib/get-img-props";
import CardCurso from "../CardCurso";

const cursos = [
    {
        nome:"Técnico em Administração",
        descricao:"Curso Técnico em Administração prepara os alunos para desempenharem funções administrativas em empresas, com ênfase em gestão de recursos, planejamento estratégico e organização empresarial",
        logo:"adm-logo.svg",
        link:"#"
    },
    {
        nome:"Técnico em Agropecuária",
        descricao:"O Curso Técnico em Agropecuária oferece uma formação voltada para a gestão e operação de atividades agrícolas e pecuárias, abordando técnicas de produção sustentável e inovação no campo",
        logo:"agro-logo.svg",
        link:"#"
    },
    {
        nome:"Técnico em Edificações",
        descricao:"O Curso Técnico em Edificações foca na formação de profissionais aptos a atuar na construção civil, com conhecimentos em planejamento, execução e controle de obras",
        logo:"edif-logo.svg",
        link:"#"
    },
    {
        nome:"Técnico em Informática",
        descricao:"O Curso Técnico em Informática capacita os estudantes para desenvolver, implantar e gerenciar sistemas e redes de computadores, além de habilidades em programação e suporte técnico",
        logo:"infor-logo.svg",
        link:"#"
    },  
]

export default function Cursos(){
    return(
        <div className="md:grid md:grid-cols-2 flex flex-col gap-4 items-center justify-center">
            <p className="text-center text-white md:col-span-2">
                A Escola Estadual de Educação Profissional Deputado José Maria Melo 
                oferece atualmente quatro cursos técnicos que preparam os alunos para diversas áreas profissionais.   
            </p>
            {
                cursos.map((curso, index) => 
                    <CardCurso 
                        key={index} 
                        nome={curso.nome} 
                        descricao={curso.descricao} 
                        logo={curso.logo}
                        link={curso.link} 
                    />
                )
            }
        </div>
    );
}