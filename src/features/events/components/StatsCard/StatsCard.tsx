import styles from "./StatsCard.module.css";
export type CardVariant = "default" | "active" | "completed" | "revenue";

type StatsCardProps = {
	value: number | string;
	title: string;
	description: string;
	variant?: CardVariant;
}

export const StatsCard = ({ title, value, description, variant = "default" }: StatsCardProps) => {
	const titleClass = variant === "active" ? styles.active_title : variant === "completed" ? styles.completed_title : "";
	return (
		<div className={styles.stats_card_container}>
			<p className={styles.title}>{title}</p>
			<h3 className={`${styles.heading} ${titleClass}`}>{value}</h3>
			<p className={`${styles.title} ${variant === "revenue" && styles.completed_title}`}>{description}</p>
		</div >
	);
}


