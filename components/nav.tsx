import { IconGitBranch, IconSocial } from "@tabler/icons-react";

export default function Nav() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* Your button contents */}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
            {" "}
            {/* Adjusted this line */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#portfolio"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium 
									after:absolute after:w-full after:scale-x-0 after:h-1 after:rounded-lg
									after:bottom-2 after:left-0 after:bg-seance-600 after:content-['']
									after:bg-right-bottom after:ease-out after:duration-300
									after:transition hover:after:scale-x-100 hover:after:origin-bottom-left"
                  aria-current="page"
                >
                  <IconGitBranch />
                  Projects
                </a>
                <a
                  href="#social"
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium 
									after:absolute after:w-full after:scale-x-0 after:h-1 after:rounded-lg
									after:bottom-0 after:left-0 after:bg-seance-600
									after:bg-right-bottom after:ease-out after:duration-300
									after:transition hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  <IconSocial />
                  Socials
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#portfolio"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            <IconGitBranch />
            Projects
          </a>
          <a
            href="#social"
            className="text-gray-300 hover-bg-gray-700 hover-text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            <IconSocial />
            Socials
          </a>
        </div>
      </div>
    </nav>
  );
}
