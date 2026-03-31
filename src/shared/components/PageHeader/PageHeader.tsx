import { PlusIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./PageHeader.module.css";
import { Button, Logo } from "@/shared/components";

export const PageHeader = ({ showHeaderButton = true }: { showHeaderButton?: boolean }) => {
	return (
		<header className={styles.header}>
			<div className={styles.header_container}>
				<Logo />
				{showHeaderButton && <Button variant="default"><PlusIcon className="text-white" /> Create Event</Button>}
			</div>
		</header >
	);
}

