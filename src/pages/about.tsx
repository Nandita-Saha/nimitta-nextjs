import Image from "next/image";
import Link from "next/link";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BannerInner from "@/components/BannerInner";

import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function About() {
  return (
    <main className={`block ${opensans.className}`}>
      <Header />
      <BannerInner />
      <div className="section-padding text-center">
        <div className="baseContainer">
          <h1 className="text-black font-light text-7xl mb-6">About Us</h1>
          <p className="text-3xl font-light mb-6">
            We are a bunch of enthusiast individuals loves the art of
            storytelling through cinematic visuals. Based in Kolkata, India, we
            like showing Indic art and culture with modern CGI Animation and
            Visual Effects. We are a very small team now with talented artists.
            Any CG or concept artists wants to share their ideas and creativity
            to make short films please contact us.
          </p>
          <h2 className="text-5xl text-black font-light mb-10">Our Team</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="col-start-1 col-span-1">
              <div className="team-member">
                <Image src="/assets/about/vicky.jpg" width={500} className="rounded-lg" height={500} alt="VICKY KHATIK" />
                <p className="text-xl text-black font-bold text-center mt-2">VICKY KHATIK</p>
                <p className="text-3xl text-color font-light text-center">Project Supervisor</p>
                <Link href="https://www.linkedin.com/in/vicky-khatik-a4b9b6184/">
                  <Image src="/assets/about/linkedin-icon.svg" height={30} width={30} className="text-center mx-auto mt-1" alt="linkedin profile" />
                </Link>
              </div>

            </div>
            <div className="col-start-2 col-span-1">
              <div className="team-member">
                <Image src="/assets/about/rohit.jpg" width={500} height={500} className="rounded-lg" alt="ROHIT GUPTA" />
                <p className="text-xl text-black font-bold text-center mt-2">ROHIT GUPTA</p>
                <p className="text-3xl text-color font-light text-center">FX & Lighting</p>
                <Link href="https://www.linkedin.com/in/rohit-gupta-865284186/">
                  <Image src="/assets/about/linkedin-icon.svg" height={30} width={30} className="text-center mx-auto mt-1" alt="linkedin profile" />
                </Link>
              </div>

            </div>
            <div className="col-start-3 col-span-1">
              <div className="team-member">
                <Image src="/assets/about/amit.jpg" width={500} height={500} className="rounded-lg" alt="AMIT KESHARI" />
                <p className="text-xl text-black font-bold text-center mt-2">AMIT KESHARI</p>
                <p className="text-3xl text-color font-light text-center">Compositing & Matchmoving</p>
                <Link href="https://www.linkedin.com/in/amit-keshari-345873190/">
                  <Image src="/assets/about/linkedin-icon.svg" height={30} width={30} className="text-center mx-auto mt-1" alt="linkedin profile" />
                </Link>
              </div>

            </div>
            <div className="col-start-4 col-span-1">
              <div className="team-member">
                <Image src="/assets/about/anil.jpg" width={500} height={500} className="rounded-lg" alt="ANIL SHAW" />
                <p className="text-xl text-black font-bold text-center mt-2">ANIL SHAW</p>
                <p className="text-3xl text-color font-light text-center">Animation</p>
                <Link href="https://www.linkedin.com/in/anil-shaw-55b5a8184/">
                  <Image src="/assets/about/linkedin-icon.svg" height={30} width={30} className="text-center mx-auto mt-1" alt="linkedin profile" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
