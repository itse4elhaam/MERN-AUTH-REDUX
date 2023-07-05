"use client";

import React from 'react'
import NavMenu from "../components/NavMenu"
import { Provider } from "react-redux";
import store from "../../store/store";

function hello() {
  return (
		<Provider store={store}>
			<NavMenu />
			<h1 className="text-6xl text-sky-600 text-center my-20">
				You are Logged In 🎉
			</h1>
		</Provider>
  );
}

export default hello;