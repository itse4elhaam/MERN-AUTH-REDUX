# MERN-AUTH(With Redux)

This application was made for practicing how authorizations & authentication work in the MERN stack.

## Code Documentation & a heads up

This code uses Next.js, tailwind, Shadcn & TypeScript in the frontend with express, mongodb & node in the backend, its login and api connection(frontend to backend) is built around with redux toolkit.

---
#### Frontend

React components are very simple, components/ui contains Shadcn components. All rest are used within the project.
Redux Toolkit uses slices, reducers, dispatching functions, hooks and mutations to make all this work, all of the work related has been done in the store folder, which has slices folder which contains different slices and has the store file outside.
authSlice contains the essential function to sustain any state(login/logout)
userApiSlice contains all of the functions that make calls to the backend to get/post the required data.
Furthermore ReduxToolkit provides a useSelector hook to get the userInfo that's defined in the store, data can be imported in any page that is wrapped int the redux store context.
React-Toastify has been used for the animated error messages.

---
#### Backend

I've used a typical MMC structure in the backend, models control all of the object and db object model information and hashing mechanism, middleware contains helper function which help us identify errors and validate user.
Utils has a single file which contains a function that helps us create a jwt token.
