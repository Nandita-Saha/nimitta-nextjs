import Image from "next/image";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerInner from "@/components/BannerInner";
import VideoCarousel from "../components/VideoCarousel";

const opensans = Open_Sans({ subsets: ["latin"] });

const videos = [
  "/assets/index/01_Snow.mp4",
  "/assets/index/02_Robot.mp4",
  "/assets/index/03_Martand.mp4",
  "/assets/index/04_Jyestheshwar.mp4",
];

export default function Home() {
  return (
    <main className={`block ${opensans.className}`}>
      <Header />
      <div className="banner-video">
        <VideoCarousel videos={videos} />
      </div>
      <div className="section-padding text-center">
        <div className="baseContainer">
          <h1 className="text-color font-black text-4xl sm:text-5xl md:text-7xl">
            VISUAL EFFECTS
          </h1>
          <p className="text-color text-sm sm:text-lg lg:text-3xl font-light">
            FILMS | ARCHITECTURAL | COMMERCIALS | GAMES
          </p>
          <Link href="/works" className="homepage-btn btn-color ">
            See Our Works
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
