import { PageHeader } from "@/shared/components";
import { EventDetailContent } from "../../components";
import { mockEvents } from "@/mocks/events";

export const EventDetailsContainer = () => {
	const event = mockEvents[0];

	return (
		<>
			<PageHeader navUrl="/events" showNav />
			<EventDetailContent event={event} />
		</>
	);
}

