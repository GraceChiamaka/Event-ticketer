"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/components";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div >
			<h1 >Something went wrong</h1>
			<p>{error.message}</p>

			<Button
				onClick={() => router.push("/")}
			>
				Go home
			</Button>

		</div>
	);
}