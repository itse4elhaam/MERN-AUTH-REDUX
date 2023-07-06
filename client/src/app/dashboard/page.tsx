"use client";

import NavMenu from "../components/NavMenu";
import NotFound from "@/app/not-found";
import { useSelector } from "react-redux";

function Hello() {
	const { userInfo } = useSelector((state: any) => state.auth);

	return (
		<>
			{userInfo ? (
				<main>
					<NavMenu />
					<h1 className="text-6xl text-sky-600 text-center my-20">
						You are Logged In 🎉
					</h1>
				</main>
			) : (
				<NotFound />
			)}
		</>
	);
}

export default Hello;
