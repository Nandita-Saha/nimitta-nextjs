import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerInner from "@/components/BannerInner";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Works() {
  return (
    <main className={`block ${opensans.className}`}>
      <Header />
      <BannerInner />
      <div className="section-padding text-center">
        <div className="baseContainer">
          <h1 className="text-black font-light text-4xl mb-3">Portfolio</h1>
          <div className="flex text-black items-center justify-center">
            <p className="text-black mx-3 ">All</p>
            <p className="text-black mx-3 ">Film</p>
            <p className="text-black mx-3 ">Architecture</p>
            <p className="text-black mx-3 ">In-house</p>
          </div>
          <div className="cards-container grid grid-cols-2 gap-0 mt-20">
            <div className="col-span-1 ">
              <Link className="works-cards" href="https://www.youtube.com/watch?v=ouyxO0IbIXI&t=11s" target="_blank">
                <Image
                  src="/assets/works/card1.png"
                  alt="card1"
                  width={331}
                  height={463}
                  className="card-img h-auto transition ease-in duration-300 hover:opacity-60 "
                />
                <p className="card-desc">Gaami</p>
              </Link>
            </div>
            <div className="col-span-1 ">
              <div className="works-cards">
                <Image
                  src="/assets/works/card2.png"
                  alt="card1"
                  width={331}
                  height={463}
                  className="card-img h-auto hover:opacity-60 "
                />
                <p className="card-desc">Gaami</p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="works-cards">
                <Image
                  src="/assets/works/card3.png"
                  alt="card1"
                  width={331}
                  height={463}
                  className="card-img h-auto hover:opacity-60 "
                />
                <p className="card-desc">Gaami</p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="works-cards">
                <Image
                  src="/assets/works/card4.png"
                  alt="card1"
                  width={331}
                  height={463}
                  className="card-img h-auto hover:opacity-60 "
                />
                <p className="card-desc">Gaami</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
