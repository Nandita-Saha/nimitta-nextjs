import Image from "next/image"
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
        
        <Image
        src="/assets/logo2.png"
        alt="logo"
        width={100}
        height={40}
        className="logo"
      />
        </Link>
    )
}