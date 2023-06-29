"use client" ;

import {useState} from "react";

import LoginUserForm from "../components/login"
import SignupUserForm from "../components/signup"

export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

    const handleCheckboxChange = (e) => {
		setIsLogin(e.target.checked);
	};

  return (
		<>
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
		</>
  );
}
