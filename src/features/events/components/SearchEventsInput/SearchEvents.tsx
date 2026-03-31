import styles from "./SearchEvents.module.css";
import { FilterEventsDropdown } from "../FilterEventDropdown";


export const SearchEvents = () => {
	return (
		<div className={styles.container}>
			<input className={styles.search_input} placeholder="Search events.." />
			<FilterEventsDropdown />
		</div>
	);
}


