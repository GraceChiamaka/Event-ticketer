import { CheckIcon, DotIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./EventRadioItem.module.css";

export const EventRadioItem = ({ label, active, completed = true, isLast }: { label: string; active: boolean; completed: boolean; isLast: boolean }) => {
	const radioClasses = active ? styles.radio_active : "";
	const completedClasses = completed ? styles.radio_done : "";
	const inActiveCondition = !active && !completed;
	const inactive = inActiveCondition && styles.radio_inactive;
	const dashClasses = inActiveCondition ? styles.dash_muted : styles.dash_active;

	return (
		<div className={styles.container}>
			<div className={styles.item_container}>
				<div className={`${styles.radio_item} ${radioClasses} ${completedClasses} ${inactive}`}>
					{completed ? <CheckIcon size={22} weight="bold" /> :
						<DotIcon size={30} weight="fill" className={`${inActiveCondition ?
							styles.radio_label_inactive :
							styles.radio_label_active}`} />
					}
				</div>
				<span className={`
				${styles.radio_label}  
				${inActiveCondition ?
						styles.radio_label_inactive :
						styles.radio_label_active}`
				}>{label}</span>
			</div>
			{!active && !isLast && <span className={`${styles.dash} ${dashClasses} `}></span>}

		</div>
	);
}

