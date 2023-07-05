"use client";

import { useState } from "react";
import { ChangeEvent } from "react";

import { Provider } from "react-redux";

import LoginUserForm from "../components/login";
import SignupUserForm from "../components/signup";
import store from "../store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Home() {
	const [isLogin, setIsLogin] = useState(true);

	const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
		setIsLogin(e.target.checked);
	};


	return (
		<Provider store={store}>
			<ToastContainer />
			<div className="grid place-content-center mt-20">
				{isLogin ? (
					<LoginUserForm
						isLogin={true}
						handleCheckboxChange={handleCheckboxChange}
					/>
				) : (
					<SignupUserForm
						isLogin={false}
						handleCheckboxChange={handleCheckboxChange}
					/>
				)}
			</div>
		</Provider>
	);
}
