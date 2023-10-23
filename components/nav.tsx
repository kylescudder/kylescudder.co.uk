"use client"

import {
  IconGitBranch,
  IconLetterX,
  IconMenu2,
  IconSocial,
} from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full fixed top-0 left-0 right-0 z-10 contents">
        <div className="container justify-between px-4 mx-auto md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between pt-1 md:py-5 md:block">
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? <IconLetterX /> : <IconMenu2 />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center py-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-2 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#portfolio" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center">
                      <IconGitBranch />
                      <span className="ml-2">Projects</span>
                    </div>
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-2 md:ml-6 text-center  border-b-2 md:border-b-0  hover-bg-purple-600  border-purple-900  md:hover-text-purple-600 md:hover-bg-transparent">
                  <Link href="#social" onClick={() => setNavbar(!navbar)}>
                    <div className="flex items-center">
                      <IconSocial />
                      <span className="ml-2">Socials</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
