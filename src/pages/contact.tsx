import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BannerInner from "@/components/BannerInner";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Contact() {
  return (
    <main className={`block ${opensans.className}`}>
      <Header />
      <BannerInner />
      <div className="section-padding text-center">
        <div className="baseContainer">
          <h1 className="text-black font-light text-3xl mb-3">
            Feel free to get in touch with us.
          </h1>
          <p className="text-3xl font-light mb-3">
            For any general chat or to share some cool ideas, drop us an email.
          </p>
          <div className=" grid grid-cols-2 py-5">
            <div className="col-span-1 mx-auto flex ">
              <Image
                src="/assets/contact/map-icon.svg"
                width="30"
                height="40"
                alt="map-icon"
              />
              <p className="text-3xl font-light text-black ml-3" >Kolkata, India</p>
            </div>
            <div className="col-span-1 mx-auto flex">
              <Image
                src="/assets/contact/mail-icon.svg"
                width="30"
                height="30"
                alt="mail-icon"
              />
              <p className="text-3xl font-light text-black ml-3">contact@nimitta.co</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
