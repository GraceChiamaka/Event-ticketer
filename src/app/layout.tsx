import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik_Moonrocks } from "next/font/google";
import "@styles/globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});
const rubikMoon = Rubik_Moonrocks({
	variable: "--font-rubik-moon",
	subsets: ["latin"],
	weight: ['400']
});

export const metadata: Metadata = {
	title: "LivDot Event App",
	description: "Best moder event streaming app you can find",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${rubikMoon.variable}`}>
			<body>{children}</body>
		</html>
	);
}
