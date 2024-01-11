import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import Link from 'next/link'
const opensans = Open_Sans({ subsets: ['latin'] })

export default function Header(){
    return(
        <div className={`py-2 fixed z-10 bg-white w-full ${opensans.className}`}>
            <div className='baseContainer flex items-center justify-between'>
                <Image src="/assets/logo2.png" alt="logo" width={100} height={40} className="logo" / >
                
                <div className='flex items-center justify-between'>
                    <Link className='px-4 text-base hover:text-red-500' href="/">
                    Home 
                    </Link>
                    <Link className='px-4 text-base hover:text-red-500' href="/about">
                    About Us 
                    </Link>
                    <Link className='px-4 text-base hover:text-red-500' href="/works">
                    Our Works 
                    </Link>
                    <Link className='px-4 text-base hover:text-red-500' href="/contact">
                    Contact
                    </Link>
                
                </div>

            </div>
        </div>
 
    )
}