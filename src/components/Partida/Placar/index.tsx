
import Image from "next/image";
import LogoTime from "@/components/LogoTime";

interface Props {
    time: string;
    placar: number;
    vencedor: boolean;
    final?: boolean
}

export default function Placar({ time, placar, vencedor, final}: Props) {
    return (
        <div className={`
            flex 
            ${final? `justify-start gap-4` : `justify-between `}
            text-sm  text-gray-700 w-40 items-center`}>
            <div className="flex gap-2 items-center">
                <LogoTime
                    time={time}
                    height={32}
                    width={32}
                />
                <div className={`
                    ${vencedor ? 'font-bold' : ''}
                `}>
                    {time}
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className={`
                        ${vencedor ? 'font-bold' : ''}
                `}>
                        {placar}
                </div>
                <div>
                    {vencedor && final? <Image
                        src="/icons/trophy.svg"
                        height={25}
                        width={25}
                        alt="icon trofeu"
                    /> : ''}
                </div>
            </div>
            
        </div>
    )
}