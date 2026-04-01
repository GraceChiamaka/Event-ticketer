import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./PageHeader.module.css";
import { Button, Logo } from "@/shared/components";


type PageHeaderProps = {
	navUrl?: string;
	showHeaderButton?: boolean;
	showNav?: boolean;
}

export const PageHeader = ({ showHeaderButton = false, showNav = false, navUrl = "/" }: PageHeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<Logo showNav={showNav} navUrl={navUrl} />
				{showHeaderButton && <Button variant="default"><PlusIcon className="text-white" /> Create Event</Button>}
			</div>
		</header >
	);
}

