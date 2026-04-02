"use client"
import { Provider } from "react-redux";
import { store } from "@store/index";


export const AppProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<Provider store={store}>{children}</Provider>
	);
}