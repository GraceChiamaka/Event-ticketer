import styles from "./Logo.module.css";
import { SteamLogoIcon, ArrowLeftIcon, } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export const Logo = ({ showNav = false, navUrl = "/" }) => {
	return (
		<div className={styles.logo_container}>
			{showNav && <Link href={navUrl}><ArrowLeftIcon size={18} /></Link>}
			<div className={styles.logo_wrapper}>
				<span className={styles.logo_icon}>
					<SteamLogoIcon className={styles.logo} />
				</span>
				<div className={styles.logo_text}>
					<p className="text-lg">MIV DOT</p>
					<h3 className="text-xs text-zinc-500">Event Operations</h3>
				</div>
			</div>

		</div>
	);
}

