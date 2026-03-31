import { calculateCompletionPercentage, formatCompactNumber, formatNumber, getStatusLabel } from "@/shared/lib/utils";
import { Badge } from "@/shared/components";
import { CalendarDotIcon, CurrencyDollarIcon, UserCheckIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import styles from "./EventsTable.module.css";
import { Event } from "../../types";
import { ProgressBar } from "./Progressbar";


export const EventTableRow = ({ event }: { event: Event }) => {
	const completionPercentage = calculateCompletionPercentage(event.requirements);
	const hasWarnings = event.requirements.find((req) => req.status === "warning");
	const hasWarning = typeof hasWarnings === "object" ? true : false;
	return (
		<tr
			key={event.id}
			className={styles.table_row}
		>
			<td className={styles.td}>
				<Link
					href={`/events/${event.id}`}
					className={styles.event_link}
				>
					<div className={styles.event_title}>{event.title}</div>
					<div className={styles.event_id}>{event.id}</div>
				</Link>
			</td>
			<td className={styles.td}>
				<Badge variant={event.state} label={getStatusLabel(event.state)} />
			</td>
			<td className={styles.td}>
				<div className={styles.event_icon_item}>
					<CalendarDotIcon size={16} className={styles.event_icon} />
					{event.details.scheduledAt === null ? "N/a" : new Date(event.details.scheduledAt).toLocaleDateString()}
				</div>
			</td>
			<td className={styles.td}>
				<div className={styles.event_icon_item}>
					<UserCheckIcon size={16} className={styles.event_icon} />
					{formatCompactNumber(event.details.expectedViewers.max)}
					{event.state !== "completed" && <span>

						{event.state == "draft" ? "–" : "expected"}
					</span>}
				</div>
			</td>
			<td className={styles.td}>
				<div className={styles.event_icon_item}>
					<CurrencyDollarIcon size={16} className={styles.event_icon} />
					{formatNumber(event.details.ticketRevenue)}
				</div>
			</td>
			<td className={styles.td}>
				<div className={styles.progress_bar_container}>
					<ProgressBar completionPercent={completionPercentage} hasWarning={hasWarning} />
					<div className="text-xs text-zinc-400 w-10 text-right">
						{completionPercentage}%
					</div>
				</div>
			</td>
		</tr>
	);
}

