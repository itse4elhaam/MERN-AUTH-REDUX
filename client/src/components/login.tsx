"use client";

import React from "react";

export default function LoginUserForm({ isLogin, handleCheckboxChange }) {
	return (
		<>
			<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 my-20">
				<div className="mx-auto max-w-md">
					<div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
						<h1 className="text-2xl font-semibold text-gray-900">
							Welcome Back
						</h1>
						<form className="mt-12" action="" method="POST">
							<div className="relative">
								<input
									id="email"
									name="email"
									type="text"
									className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
									placeholder="john@doe.com"
									required
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
								/>
								<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
									Please enter a valid email address
								</span>
								<label
									for="email"
									className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Email or mobile number
								</label>
							</div>
							<div className="mt-10 relative">
								<input
									id="password"
									type="password"
									name="password"
									className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
									placeholder="Password"
									pattern=".{7,}"
								/>
								<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
									Please enter a valid password
								</span>
								<label
									for="password"
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
		</>
	);
}
