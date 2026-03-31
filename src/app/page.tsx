import Link from "next/link";


export default function Home() {
	return (
		<div >
			<h1>Hello world!</h1>
			<Link href={"/events"}><button>Proceed to dashboard</button></Link>
		</div>
	);
}
