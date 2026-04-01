
import { canStartStreaming } from "@/shared/lib/utils";
import { Event } from "../../types";
import { EventDetailsHeader } from "../EventDetailHeader";
import { EventDetailInfo } from "../EventDetailInfo";
import { EventLifeCycle } from "../EventLifecycle";
import { EventRequirements } from "../EventRequirements";
import { GoLiveBar } from "../GoLiveBar";
import styles from "./style.module.css";

export const EventDetailContent = ({ event }: { event: Event }) => {
	const streamingEnabled = canStartStreaming(event.requirements, event.details.scheduledAt);
	return (
		<div className={styles.container}>
			<div className={styles.details_content}>
				<EventDetailsHeader title={event.title} description={`Event ID: ${event.id}`} state={event.state} />
				<EventLifeCycle
					status={event.state}
				/>
				<EventRequirements requirements={event.requirements} />
				<GoLiveBar canStream={streamingEnabled} />
			</div>
			<EventDetailInfo details={event.details} stream={event.streamHealth} />
		</div>
	);
}

