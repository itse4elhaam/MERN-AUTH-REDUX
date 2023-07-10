# PropertyHack(in progress)

This app provides a centralized dashboard for real estate users to track their properties, leads, and sales.
This app is still under development, having said that here are some features that I intend to add.

# Features

Property tracking: The app allows users to track their properties, including their current status, value, and rent.
Lead tracking: The app allows users to track their leads, including their contact information, status, and next steps.
Sales tracking: The app allows users to track their sales, including the property sold, the price, and the commission.
Customizable dashboard: The app allows users to customize their dashboard to show the information that is most important to them.

# Getting Started

Sign up for an account: To get started, you will need to sign up for an account.
Add your properties: Once you have created an account, you can add your properties to the dashboard.
Track your leads: You can track your leads by adding them to the dashboard and setting their status.
Track your sales: You can track your sales by adding them to the dashboard and setting their price and commission.

# About the App

This app is being developed by the owner of this repo, it is intended to make lives of real estate industry easy by reducing the paperwork and shifting it all online.

# Code Documentation & a heads up

This code uses Next.js, tailwind, Shadcn & TypeScript in the frontend with express, mongodb & node in the backend, its login and api connection(frontend to backend) is built around with redux toolkit.
#### Frontend
React components are very simple, components/ui contains Shadcn components. All rest are used within the project.
Redux Toolkit uses slices, reducers, dispatching functions, hooks and mutations to make all this work, all of the work related has been done in the store folder, which has slices folder which contains different slices and has the store file outside.
authSlice contains the essential function to sustain any state(login/logout)
userApiSlice contains all of the functions that make calls to the backend to get/post the required data.
Furthermore ReduxToolkit provides a useSelector hook to get the userInfo that's defined in the store, data can be imported in any page that is wrapped int the redux store context.
React-Toastify has been used for the animated error messages.
#### Backend
I've used a typical MMC structure in the backend, models control all of the object and db object model information and hashing mechanism, middleware contains helper function which help us identify errors and validate user.
Utils has a single file which contains a function that helps us create a jwt token.

# How to run locally

Set you env variables in a .env file in the root
- NODE_ENV
- PORT
- MONGO_URI
- JWT_SECRET

This project uses concurrently, use ```npm run dev``` to run both servers at the same after you've set up every env variable. individually; ```npm run client``` runs the frontend server and ```npm run server``` runs the backend server. Both can be executed in the root of the folder. 

# Contribution

For contributions, raise an issue and wait for it to be assigned to you. 
For collaborations reach out to me at [e4elhaam@outlook.com](e4elhaam@outlook.com)
