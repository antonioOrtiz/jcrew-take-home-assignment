import React from "react";
import Link from 'next/link'

export default function Nav({ fixed }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <nav className="relative jcrew-header flex flex-wrap items-center justify-between px-2 py-3 ">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
              <div className="flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                <a
                  className="jcrew-logo text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  href="#pablo"
                >
                  J.CREW
                </a>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="/">
                      <a>Category Page</a>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75" href="/product-page">
                      <a>Product-Page</a>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
