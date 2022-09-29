import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";
import Image from "next/image";
// import Logo from "../public/streamlineLogo.png";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div>
			<nav className=" shadow-sm bg-[#004445]  w-full z-10">
				<div className="w-full">
					<div className="flex items-center h-20 w-full">
						<div className="flex items-center  mx-10  justify-between w-full">
							<div className="flex justify-start items-center flex-shrink-0 ">
								
									<Image src={'/TanmaySachinFoundation.png'} className = 'rounded-lg' layout = "intrinsic" width='80%'  height='70%'/>

							</div>
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-2">
									<Link
										activeClass="Home"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#FFD800] font-thin px-3 no-underline py-2 text-md hover:text-white"
									>
										Home
									</Link>
									<Link
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#FFD800] text-[#FFD800] font-thin no-underline hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Who we are
									</Link>
									<Link
										activeClass="work"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#FFD800] text-[#FFD800]  font-thin no-underline hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										What we do
									</Link>

									<Link
										activeClass="Services"
										to="work"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer  text-[#FFD800] font-light hover:text-white px-3 py-2 no-underline rounded-md text-sm font-medium"
									>
										Gallery
									</Link>

									<Link
										activeClass="about"
										to="about"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer text-[#FFD800] text-[#FFD800]  font-thin no-underline hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									>
										Contact Us
									</Link>

									<Link
										activeClass="contact"
										to="contact"
										smooth={true}
										offset={50}
										duration={500}
										className="cursor-pointer no-underline justify-self-end  bg-[#FFD800]  text-[#004445] px-3 py-2 rounded-[5rem] text-sm font-medium  hover:text-[#004445]"
									>
										Donate Now
									</Link>
								</div>
							</div>
						</div>
						<div className="mr-10 flex md:hidden ">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="bg-[#FFD800] inline-flex items-center justify-center p-2 rounded-md text-black  hover:[#FFD800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{!isOpen ? (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								) : (
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
				</div>

				<Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 text-center space-y-1 sm:px-3"
							>
								<Link
									href="/home"
									activeClass="home"
									to="home"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium"
								>
									Home
								</Link>
								<Link
									href="/about"
									activeClass="about"
									to="about"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium"
								>
									Who we are
								</Link>

								<Link
									href="/work"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium"
								>
									What we do
								</Link>
								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium"
								>
									Gallery
								</Link>

								<Link
									href="/services"
									activeClass="services"
									to="services"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer hover:bg-[#004445] text-[#004445] no-underline hover:text-[#FFD800] block px-3 py-2 rounded-md text-base font-medium"
								>
									Contact Us
								</Link>
                

								<Link
									href="/contact"
									activeClass="work"
									to="work"
									smooth={true}
									offset={50}
									duration={500}
									className="cursor-pointer bg-[#FFD800] text-[#004445] no-underline hover:text-[#004445] block px-3 py-2 rounded-md text-base font-medium"
								>
									Donate Now
								</Link>
							</div>
						</div>
					)}
				</Transition>
			</nav>
		</div>
	);
}

export default Navbar;