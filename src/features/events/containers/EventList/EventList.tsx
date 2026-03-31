import { PageHeader } from "@shared/components";
import { EventsListHeader, EventsTable, SearchEvents, Stats } from "@features/events/components";
import { mockEvents, statsData } from "@/mocks/events";

export const EventsListContainer = () => {
	return (
		<div>
			<PageHeader showHeaderButton />
			<EventsListHeader title="Events" description="Manage and monitor all your live events" />
			<Stats data={statsData} />
			<SearchEvents />
			<EventsTable events={mockEvents} />
		</div>
	);
}

