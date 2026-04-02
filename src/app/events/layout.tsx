import { AppProvider } from "@store/Provider";


export default function EventsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<AppProvider>{children}</AppProvider>
	);
}