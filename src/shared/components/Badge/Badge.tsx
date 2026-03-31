import { Event } from "@/features/events/types";
import styles from "./Badge.module.css";
type BadgeProps = {
	variant: Event["state"];
	label: string;
}
export const Badge = ({ variant, label }: BadgeProps) => {
	const badgeClasses = variant === "live" ? styles.live : variant === "completed" ? styles.completed :
		variant === "ready" ? styles.ready : variant === "scheduled" ? styles.scheduled : variant === "replay" ? styles.replay :
			variant === "noreplay" ? styles.replay : styles.default;

	return (
		<span
			className={`${styles.badge}  ${badgeClasses}`}>
			{variant === 'live' && (
				<span className={styles.pulse_dot} />
			)}
			{label}
		</span>
	);
}

