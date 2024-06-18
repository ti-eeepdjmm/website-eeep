import Image from 'next/image'
import logoepdjmm from '../../../public/logos/logo_epdjmm_color.svg'
import Link from 'next/link'

export default function Logo() {
    return (
        <div className="flex justify-between w-full md:px-0">
            <Link href="/">
            <div className='flex items-center'>
                    <Image
                        src={logoepdjmm}
                        height={68}
                        width={68}
                        alt='logo do site'
                        className='md:h-full md:w-28'
                    />
                    <span className={`
                        text-white font-bold text-base
                    `}>
                        EEEPDJMM
                    </span>
            </div>
            </Link>
        </div>
    )
}
