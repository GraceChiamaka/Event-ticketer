"use client";

import { useAppSelector } from "@/store";
import styles from "./EventsTable.module.css";
import { EventTableRow } from "./EventTableRow";
import { selectAllEvents } from "@/store/events";

export const EventsTable = () => {
	const events = useAppSelector(selectAllEvents);

	return (
		<div className={styles.container}>
			{events && (
				<table className={styles.table}>
					<thead className={styles.table_header}>
						<tr>
							<th className={styles.table_head}>Event</th>
							<th className={styles.table_head}>Status</th>
							<th className={styles.table_head}>Scheduled</th>
							<th className={styles.table_head}>Viewers</th>
							<th className={styles.table_head}>Revenue</th>
							<th className={styles.table_head}>Readiness</th>
						</tr>
					</thead>
					<tbody>
						{events.map((event) => {
							return (
								<EventTableRow event={event} key={event.id} />
							)
						})}
					</tbody>
				</table>
			)}
		</div>
	);
}

