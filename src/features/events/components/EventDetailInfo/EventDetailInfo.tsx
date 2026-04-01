import { CalendarBlankIcon, ClockCountdownIcon, CurrencyDollarIcon, UsersIcon, VideoCameraIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./EventDetailInfo.module.css";
import { Event } from "../../types";
import { ProgressBar } from "@/shared/components";

export const EventDetailInfo = ({ details, stream }: { details: Event["details"]; stream: Event["streamHealth"] }) => {

	return (
		<div className={styles.container}>
			<h3 className={styles.info_heading}>Event Details</h3>
			<div className={styles.detail_row}>
				<span className={styles.icon_container}>
					<CalendarBlankIcon />
				</span>
				<div>
					<p className={styles.info_label}>Scheduled</p>
					<p className={styles.info_value}>{details?.scheduledAt ? `${new Date(details.scheduledAt).toDateString()} At ${new Date(details.scheduledAt).toTimeString()}` : "No Schedule"}</p>
				</div>
			</div>
			<div className={styles.detail_row}>
				<span className={styles.icon_container}>
					<ClockCountdownIcon />
				</span>
				<div >
					<p className={styles.info_label}>Duration</p>
					<p className={styles.info_value}>{details?.durationMins ? details.durationMins : "Not set"}</p>
				</div>
			</div>
			<div className={styles.detail_row}>
				<span className={styles.icon_container}>
					<UsersIcon />
				</span>
				<div >
					<p className={styles.info_label}>Expected Viewers</p>
					<p className={styles.info_value}>{(details?.expectedViewers.max && details.expectedViewers.min) ? `${details.expectedViewers.min} - ${details.expectedViewers.max}` : "Not set"}</p>
				</div>
			</div>
			<div className={styles.detail_row}>
				<span className={styles.icon_container}>
					<CurrencyDollarIcon />
				</span>
				<div >
					<p className={styles.info_label}>Ticket Revenue</p>
					<p className={styles.info_value}>{details?.ticketsSold ? details.ticketsSold : "Not set"}</p>
				</div>
			</div>
			<div className={styles.detail_row}>
				<span className={styles.icon_container}>
					<VideoCameraIcon />
				</span>
				<div >
					<p className={styles.info_label}>Stream Quality</p>
					<p className={styles.info_value}>{details?.streamQuality ? details.streamQuality : "Not set"}</p>
				</div>
			</div>

			<div className={styles.divider}></div>

			<div>
				<p className={styles.info_label}>Stream Health</p>
				<br />

				<div className={styles.stream_info}>
					<ProgressBar percent={stream.bandwidthPercent} variant={stream.bandwidthPercent >= 80 ? "success" : "primary"} label={"Bandwidth"} metaLabel={stream.bandwidthLabel} />
				</div>
				<div className={styles.stream_info}>
					<ProgressBar percent={stream.cdnPercent} variant={stream.cdnPercent >= 80 ? "success" : "primary"} label={"CDN Status"} metaLabel={stream.cdnLabel} />

				</div>
				<div className={styles.stream_info}>
					<ProgressBar percent={stream.storagePercent} variant={stream.storagePercent >= 80 ? "success" : "primary"} label={"Storage"} metaLabel={`${stream.storagePercent}%`} />

				</div>
			</div>

		</div>
	);
}

