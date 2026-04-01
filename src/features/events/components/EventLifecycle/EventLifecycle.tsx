import { Event, EventState } from "../../types";
import { EventRadioItem } from "../EventRadioItem";
import styles from "./EventLifecycle.module.css";


const eventLifecycle: { key: EventState, label: string }[] = [
	{
		label: "Draft",
		key: "draft"
	}, {
		key: "scheduled",
		label: "Scheduled"
	},
	{
		key: "ready",
		label: "Ready for Streaming",
	},
	{
		key: "live",
		label: "Live"
	},
	{
		key: "completed",
		label: "Completed",
	}, {
		key: "replay",
		label: "Replay Available"
	},
]

export const EventLifeCycle = ({ status }: { status: Event["state"]; }) => {
	const currentIndex = eventLifecycle.findIndex(stage => stage.key === status);
	return (
		<div className={styles.container}>
			<p className={styles.caption}>Event lifecycle</p>
			<div className={styles.radio_list}>
				{
					eventLifecycle.map(({ key, label }, index) => (
						<EventRadioItem
							active={index === currentIndex}
							completed={index < currentIndex}
							key={key}
							label={label}
							isLast={index === eventLifecycle.length - 1}
						/>
					))
				}
			</div>
		</div>
	);
}
