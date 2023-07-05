"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type userInfoType = {
	email: string,
	name: string,
	_id: string,
}

type initStateType = {
	userInfo: userInfoType  | null,
};

export type authSliceType = {
	name: string;
	initialState: initStateType;
	reducers: {
		setCredentials: (
			state: initStateType,
			action: PayloadAction<userInfoType>
		) => void;
		logout: (state: initStateType, action: PayloadAction<void>) => void;
	};
};



const initialState: initStateType = {
	userInfo: localStorage.getItem("userInfo")
		? JSON.parse(localStorage.getItem("userInfo")!)
		: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (
			state: initStateType,
			action: PayloadAction<userInfoType>
		) => {
			state.userInfo = action.payload;
			localStorage.setItem("userInfo", JSON.stringify(action.payload));
		},
		logout: (state: initStateType, action: PayloadAction<void>) => {
			state.userInfo = null;
			localStorage.removeItem("userInfo");
		},
	},
});

export default authSlice; // can be extracted out from the store.js
