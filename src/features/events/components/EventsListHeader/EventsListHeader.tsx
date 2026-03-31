import styles from "./EventsListHeader.module.css";

type EventsHeaderProps = {
	title: string;
	description: string;
}
export const EventsListHeader = ({ title, description }: EventsHeaderProps) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
}

