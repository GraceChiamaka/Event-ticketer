"use client"
import { EventDetailsHeader } from "../EventDetailHeader";
import { EventDetailInfo } from "../EventDetailInfo";
import { EventLifeCycle } from "../EventLifecycle";
import { EventRequirements } from "../EventRequirements";
import { GoLiveBar } from "../GoLiveBar";
import styles from "./style.module.css";
import { useParams } from "next/navigation";
import { useEvent } from "../../hooks";

export const EventDetailContent = () => {
	const { id } = useParams();
	const { event, canStream, isLoading, isSuccess } = useEvent(id as string);

	if (isLoading) return <div>Loading event detail...</div>

	return isSuccess && event !== null && (
		<div className={styles.container}>
			<div className={styles.details_content}>
				<EventDetailsHeader title={event.title} description={`Event ID: ${event.id}`} state={event.state} />
				<EventLifeCycle
					status={event.state}
				/>
				<EventRequirements requirements={event.requirements} />
				<GoLiveBar canStream={canStream} />
			</div>
			<EventDetailInfo details={event.details} stream={event.streamHealth} />
		</div>
	);
}


