"use client" ;

import Link from "next/link";
import { useRouter } from "next/navigation";
import authSlice from "@/store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useLogoutMutation } from "@/store/slices/userApiSlice";

export default function NavBar() {
	
	const logout = authSlice.actions.logout;
	const dispatch = useDispatch();
	const navigate = useRouter();
	const { userInfo } = useSelector((state: any) => state.auth); // had to put any as a temporary solution

	const [logoutApiCall] = useLogoutMutation();

	async function logOut() {
		try {
			await logoutApiCall().unwrap();
			dispatch(logout());
			navigate.push("/")
		} catch (err) {
			console.log(err)
		}
	}

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
				</div>

				<DropdownMenu>
					<DropdownMenuTrigger className="px-2 py-4 outline-none transition-all duration-300 hover:bg-gray-100 rounded-md">
						{userInfo? userInfo.name : "ERROR"}
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href={"/profile"}>View Data</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>Update Data</DropdownMenuItem>
						<DropdownMenuItem onClick={logOut}>
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</nav>

			{/* <Button variant="outline">Button</Button> */}
		</header>
	);
}
