"use client" ;

import { Inter } from 'next/font/google';
import { Provider } from "react-redux";
import store from "@/store/store";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PropertyHack.NET',
  description: 'A real estate dashboard',
}



export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {

  return (
		<html lang="en">
			<body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
			</body>
		</html>
  );
}
