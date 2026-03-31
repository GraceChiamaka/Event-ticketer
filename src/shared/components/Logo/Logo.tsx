import styles from "./Logo.module.css";
import { SteamLogoIcon } from "@phosphor-icons/react/dist/ssr";

export const Logo = () => {
	return (
		<div className={styles.logo_container}>
			<span className={styles.logo_icon}>
				<SteamLogoIcon className={styles.logo} />
			</span>
			<div className={styles.logo_text}>
				<p className="text-lg">MIV DOT</p>
				<h3 className="text-xs text-zinc-500">Event Operations</h3>
			</div>
		</div>
	);
}

