import { Button } from "@/shared/components";
import Link from "next/link";


export default function Home() {
	return (
		<div >
			<h1>Hello world!</h1>
			<Link href={"/events"}><Button variant="default">Proceed to dashboard</Button></Link>
		</div>
	);
}
