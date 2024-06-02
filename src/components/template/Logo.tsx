import Image from 'next/image'
import logoepdjmm from '../../../public/logos/logo_epdjmm_color.svg'

export default function Logo() {
    return (
        <div className="flex justify-between w-full md:px-10">
            <div className='flex items-center'>
                <Image
                    src={logoepdjmm}
                    height={68}
                    width={68}
                    alt='logo do site'
                    className='md:h-full md:w-44'
                />
                <span className={`
                    text-white font-bold text-base
                `}>EEEPDJMM</span>
            </div>
        </div>
    )
}
