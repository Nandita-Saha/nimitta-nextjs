import Link from "next/link";
import Image from "next/image";
import { Open_Sans } from "next/font/google";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className={`py-3 pt-24 ${opensans.className}`}>
      <div className="baseContainer">
        <ul className="flex items-center justify-center mb-4">
          <li className="px-2 mr-4">
            <Link className="w-4 h-4" href="https://www.linkedin.com/company/nimitta-fx">
              <Image
                className="w-6 h-6"
                src="/assets/footer/linkedin-icon.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li className="px-2 mr-4">
            <Link className="w-4 h-4" href="https://www.facebook.com/nimittaFX">
              <Image
                className="w-6 h-6"
                src="/assets/footer/facebook-icon.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li className="px-2 mr-4">
            <Link className="w-4 h-4" href="https://twitter.com/nimittaFX">
              <Image
                className="w-6 h-6"
                src="/assets/footer/twitter-icon.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li className="px-2 mr-4">
            <Link className="w-4 h-4" href="https://www.instagram.com/nimittafx">
              <Image
                className="w-6 h-6"
                src="/assets/footer/instagram-icon.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
          <li className="px-2 mr-4">
            <Link className="w-4 h-4" href="https://www.youtube.com/@NimittaFX/videos">
              <Image
                className="w-6 h-6"
                src="/assets/footer/youtube-icon.svg"
                alt="logo"
                width={25}
                height={25}
              />
            </Link>
          </li>
        </ul>
        <p className="text-xs py-5 text-center mb-4">Copyright © 2024. nimitta.co, All rights reserved</p>
      </div>
    </div>
  );
}
