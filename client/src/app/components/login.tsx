"use client";

import React, { useState, useEffect , FormEvent, ChangeEvent } from "react";
import { useRouter } from 'next/navigation'
import {useDispatch, useSelector} from "react-redux"
import { useLoginMutation } from "@/store/slices/userApiSlice";
import authSlice from "@/store/slices/authSlice";
import Error from "next/error";
import { toast } from "react-toastify";
import Loading from "./loading"

const setCredentials = authSlice.actions.setCredentials;

export type PropTypes = {
	isLogin: boolean;
	handleCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
	
export default function LoginUserForm({ isLogin, handleCheckboxChange }: PropTypes) {
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useRouter();

	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useSelector((state : any) => state.auth) // had to put any as a temporary solution

	useEffect(() => {
		if (userInfo) {
			navigate.push("/dashboard");
		}
	}, [userInfo, navigate]);
	
	async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(email);
		console.log(password);
		try {
			const res = await login({ email, password }).unwrap();
			dispatch(setCredentials({...res}))
			navigate.push("/dashboard");
		} catch (err:any) { // temp fix for the type typescript error
			toast.error(err?.data?.message || err?.error, { hideProgressBar: true, autoClose: 3000, type: 'error' ,position:'top-right' });
		}
	}
	

	return (
		<>
			{isLoading ? (
				< Loading />
			) : (
				<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 my-20">
					<div className="mx-auto max-w-md">
						<div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
							<h1 className="text-2xl font-semibold text-gray-900">
								Welcome Back
							</h1>
							<form
								className="mt-12"
								action=""
								method="POST"
								onSubmit={handleFormSubmit}
							>
								<div className="relative cursor-pointer">
									<input
										id="email"
										name="email"
										type="text"
										className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
										placeholder="john@doe.com"
										required
										// TODO: ADD EMAIL VALIDATION
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
										Please enter a valid email address
									</span>
									<label
										htmlFor="email"
										className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>
										Email
									</label>
								</div>
								<div className="mt-10 relative cursor-pointer">
									<input
										id="password"
										type="password"
										name="password"
										className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
										placeholder="Password"
										pattern=".{7,}"
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
										Please enter a valid password
									</span>
									<label
										htmlFor="password"
										className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
									>
										Password
									</label>
								</div>

								<input
									type="submit"
									value="Sign in"
									className="mt-12 px-4 py-2 rounded bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-500 focus:ring-opacity-80 cursor-pointer"
								/>
							</form>
							<div>
								<label
									className="mt-4 cursor-pointer block text-sm text-center font-medium text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500"
									htmlFor="Login"
								>
									SignUp Instead?
								</label>
								<input
									className="invisible"
									type="checkbox"
									name="Login"
									id="Login"
									checked={isLogin}
									onChange={handleCheckboxChange}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
