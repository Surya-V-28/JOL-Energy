import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-white lg:ml-11">
            {/* 1st block */}
            <div className="col-span-12 lg:col-span-4">
              <div className="box-border border-b-4 border-white p-8 bg-gray-200 text-black text-center rounded-lg xl:w-80 mx-auto">
                <h3 className="font-bold text-4xl mb-4">JOL Energy</h3>
                <div className="text-md font-medium text-black">
                  <h5>VIT Vellore</h5>
                  <p>Vellore District,</p>
                  <p>Tamil Nadu,632014</p>
                  <p>India.</p>
                </div>
              </div>
            </div>
            {/* 2nd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
              <h6 className="text-black text-xl font-bold mb-4">LINKS</h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    smooth to="#about"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    About Us
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    smooth to="#services"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Events
                  </HashLink>
                </li>
                <li className="mb-2">
                  <HashLink
                    smooth to="#contact"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Contact Us
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
              <h6 className="text-black text-xl font-bold mb-4">
                OUR INITIATIVES
              </h6>
              <ul className="text-md">
                <li className="mb-2">
                  <HashLink
                    smooth to="/#Programs"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                  Services
                  </HashLink>
                </li>
                <li className="mb-2">
                  <Link
                    smooth to="/get-involved"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Join Events
                    
                  </Link>
                </li>

                <li className="mb-2">
                  <HashLink
                    smooth to="/#projects-all"
                    className="text-black hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out"
                  >
                    Events
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-black">
              <div className="text-xl mb-6">Follow Us</div>

              <div className="text-md font-medium mb-6">
                Stay connected through our social media channels.
              </div>
              <div className="mx-auto text-center mt-2">
              <ul className="flex justify-center mb-4 md:mb-0 space-x-4">
  {/* Instagram link - Correct SVG */}
  <li>
    <a
      href="https://www.instagram.com/jolenergy.in/"
      className="flex justify-center items-center text-black hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 190.2c-41.7 0-75.3-33.6-75.3-75.3s33.6-75.3 75.3-75.3 75.3 33.6 75.3 75.3-33.6 75.3-75.3 75.3zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93-26.2-26.2-57.6-34.5-93-36.2-36.7-2.1-147.3-2.1-184 0-35.3 1.7-66.7 9.9-93 36.2-26.2 26.2-34.5 57.6-36.2 93-2.1 36.7-2.1 147.3 0 184 1.7 35.3 9.9 66.7 36.2 93 26.2 26.2 57.6 34.5 93 36.2 36.7 2.1 147.3 2.1 184 0 35.3-1.7 66.7-9.9 93-36.2 26.2-26.2 34.5-57.6 36.2-93 2.1-36.7 2.1-147.3 0-184zm-48.1 213.8c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"
        />
      </svg>
    </a>
  </li>

  {/* Placeholder for another Instagram link */}
  <li>
    <a
      href="https://www.instagram.com/jolenergy.in/"
      className="flex justify-center items-center text-black hover:text-gray-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out p-2"
      aria-label="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >   
        <path
          d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
        />
      </svg>
    </a>
  </li>
</ul>

              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
              <div className="text-sm text-black font-semibold py-1">
                Copyright &copy; {new Date().getFullYear()}
                {"  "}
                <HashLink to="/" className=" hover:text-gray-900">
                  Jol Energy
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
