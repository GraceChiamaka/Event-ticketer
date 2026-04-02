import { PageHeader } from "@shared/components";
import { EventsListHeader } from "@features/events/components";
import { EventsListClient } from "./EventListClient";

export const EventsListContainer = () => {
	return (
		<div>
			<PageHeader showHeaderButton />
			<EventsListHeader title="Events" description="Manage and monitor all your live events" />
			<EventsListClient />
		</div>
	);
}

