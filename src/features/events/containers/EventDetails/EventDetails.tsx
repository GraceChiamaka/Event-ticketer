import { PageHeader } from "@/shared/components";
import { EventDetailContent } from "../../components";

export const EventDetailsContainer = () => {
	return (
		<>
			<PageHeader navUrl="/events" showNav />
			<EventDetailContent />
		</>
	);
}

