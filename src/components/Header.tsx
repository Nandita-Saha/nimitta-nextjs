import Image from "next/image";
import { Open_Sans } from "next/font/google";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Menu from "./Menu";
import Logo from "./Logo";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Header() {
  return (
    <div
      className={`py-2 fixed z-10 bg-white w-full ${opensans.className}`}
    >
      <Popover className="relative">
        <div className="baseContainer">
          <div className="flex items-center justify-between px-3">
            <Logo />
            <div className="hidden md:flex items-center justify-between">
              <Menu />
            </div>
            <Popover.Button className="md:hidden">
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Panel className="absolute w-full inset-x-0 top-0 z-10 origin-top-right transform  transition lg:hidden">
            {({ close }) => (
              <div className="bg-white overflow-hidden">
                <div className="flex items-center justify-between px-3">
                  <Logo />
                  <Popover.Button>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </Popover.Button>
                </div>

                <div className="block text-left">
                  <Menu />
                </div>
              </div>
            )}
          </Popover.Panel>
        </div>
      </Popover>
    </div>
  );
}
