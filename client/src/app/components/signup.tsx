import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { PropTypes } from "./login";
import { useRegisterMutation } from "@/store/slices/userApiSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import authSlice from "@/store/slices/authSlice";
import Error from "next/error";
import { toast } from "react-toastify";
import Loading from "./loading";

export default function SignupUserForm({
	isLogin,
	handleCheckboxChange,
}: PropTypes) {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const setCredentials = authSlice.actions.setCredentials;
	const dispatch = useDispatch();
	const navigate = useRouter();

	// just like the login, we get the function register here and call it with the important data 
	// and then just like the login system you'll set credentials to persist it.

	const { userInfo } = useSelector((state: any) => state.auth); // had to put any as a temporary solution

	const [register, { isLoading }] = useRegisterMutation();

	// shouldn't be registering if already logged in.
	useEffect(() => {
		if (userInfo) {
			navigate.push("/dashboard");
		}
	}, [userInfo, navigate]);

	async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (
			validData(name, email, password) &&
			passwordsMatch(password, confirmPassword)
		) {
			try {
				const res = await register({ name, email, password }).unwrap();
				dispatch(setCredentials({ ...res }));
				toast.info("Sign up Successful", {
					hideProgressBar: true,
					autoClose: 3000,
					position: "top-right",
				})
				navigate.push("/");
			} catch (err) {
				toast.error("Something went wrong", {
					hideProgressBar: true,
					autoClose: 3000,
					type: "error",
					position: "top-right",
				});
				console.log(err);
			}
		}
	}

	function validData(name: string, email: string, password: string) {
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		const isEmailValid = emailRegex.test(email);

		if (name.length < 1 || password.length < 5 || !isEmailValid) {
			toast.error("Invalid email or password!", {
				hideProgressBar: true,
				autoClose: 3000,
				type: "error",
				position: "top-center",
			});
			return false;
		}

		return true;
	}

	function passwordsMatch(pass: string, confirmPass: string) {
		if (pass !== confirmPass) {
			toast.error("Passwords Do not Match!", {
				hideProgressBar: true,
				autoClose: 3000,
				type: "error",
				position: "top-center",
			});
			return false;
		}

		return true;
	}

return (
	<>
		{isLoading ? (
			<Loading />
		) : (
			<div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 my-10">
				<div className="mx-auto max-w-md">
					<div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
						<h1 className="text-2xl font-semibold text-gray-900">
							Lets get you started
						</h1>
						<form
							className="mt-12"
							action=""
							method="POST"
							onSubmit={handleFormSubmit}
						>
							<div className="relative">
								<input
									id="Name"
									type="Name"
									name="Name"
									className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
									placeholder="Name"
									value={name}
									onChange={(e) => setName(e.target.value)}
								></input>
								<label
									htmlFor="Name"
									className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Name
								</label>
							</div>

							<div className="mt-5 relative">
								<input
									id="email"
									name="email"
									type="text"
									className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
									placeholder="john@doe.com"
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								></input>
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
							<div className="mt-5 relative">
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
								></input>
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
							<div className="mt-5 relative">
								<input
									id="ConfirmPassword"
									type="password"
									name="ConfirmPassword"
									className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-600"
									placeholder="ConfirmPassword"
									pattern=".{7,}"
									value={confirmPassword}
									onChange={(e) =>
										setConfirmPassword(e.target.value)
									}
								></input>
								<span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
									Please enter a valid password
								</span>
								<label
									htmlFor="password"
									className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
								>
									Confirm Password
								</label>
							</div>

							<input
								type="submit"
								value="Sign up"
								className="mt-12 px-4 py-2 rounded bg-sky-500 hover:bg-sky-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-500 focus:ring-opacity-80 cursor-pointer"
							></input>
						</form>
						<div>
							<label
								className="mt-4 cursor-pointer block text-sm text-center font-medium text-sky-600 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-500"
								htmlFor="Login"
							>
								Already have an account?
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
