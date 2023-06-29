import Image from "next/image";
export default function NavBar() {
	return (
		// still need to rename this file and setup a file convention
		<header>
			<nav className="px-8 xl:px-20 flex justify-between py-3 text-primary-800 shadow-md items-center min-h-[8vh]">
				<div className="Logo text-lg font-bold flex items-center hover:cursor-pointer">
					PropertyHack.NET
				</div>
				<div className="text-nav-wrapper hidden flex-col absolute bg-slate-50 text-center top-48 lg:static lg:bg-transparent lg:gap-36 lg:flex lg:flex-row">
					<ul className="flex gap-x-12 xl:mr-80 flex-col lg:flex-row items-center">
						<li className="transition-all hover:text-sky-600 lg:text-lg relative duration-500 ease-in-out hover:cursor-pointer">
							<a className="nav-effect" href="">
								Services
							</a>
						</li>
						<li className="transition-all hover:text-sky-600 lg:text-lg relative duration-500 ease-in-out hover:cursor-pointer">
							<a className="nav-effect" href="pricing.html">
								Company
							</a>
						</li>
						<li className="transition-all hover:text-sky-600 lg:text-lg relative duration-500 ease-in-out hover:cursor-pointer">
							<a className="nav-effect" href="">
								Blog
							</a>
						</li>
					</ul>
					<div className="transition-all duration-300 ease-in-out register-actions flex gap-12 flex-col lg:flex-row lg:items-center">
						<button
							 className="border-2 transition-all duration-500 ease-in-out border-sky-600 px-4 py-4 rounded-md hover:scale-105 cursor-pointer "
						>Get Started</button>
					</div>
				</div>
			</nav>

			{/* <Button variant="outline">Button</Button> */}

		</header>
		
	);
}