"use client" ;

import {useState} from "react";

import store from "../store/store"
import {Provider} from 'react-redux'

import LoginUserForm from "../components/login"
import SignupUserForm from "../components/signup"

export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

    const handleCheckboxChange = (e) => {
		setIsLogin(e.target.checked);
	};

  return (
		<Provider store={store}>
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
