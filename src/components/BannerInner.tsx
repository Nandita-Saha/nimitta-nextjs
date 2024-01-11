import Image from "next/image"

export default function BannerInner(){
    return(
        <div className="relative h-96 w-full">

            <Image src="/assets/ban-in.jpg" className="object-cover object-center"  fill  alt="banner-img" />
        </div>
    )
}