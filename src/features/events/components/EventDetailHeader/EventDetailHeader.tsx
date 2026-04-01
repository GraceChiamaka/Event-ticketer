import { Badge } from "@/shared/components";
import styles from "./EventDetailHeader.module.css";
import { Event } from "../../types";
import { getStatusLabel } from "@/shared/lib/utils";

type DetailsHeaderProps = {
	title: string;
	description: string;
	state: Event['state']
}

export const EventDetailsHeader = ({ title, description, state }: DetailsHeaderProps) => {
	return (
		<header className={styles.container}>
			<div>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
			<Badge variant={state} label={getStatusLabel(state)} />
		</header>
	);
}

