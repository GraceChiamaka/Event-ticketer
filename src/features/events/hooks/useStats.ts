import { useAppSelector } from "@/store";
import { selectAllEvents } from "@/store/events";
import { useMemo } from "react";

type StatsData = {
    total: number;
    active: number;
    completed: number;
    revenue: number;
    ticketsSold: number;
    totalExpectedViewers: number;
};

export const useStats = () => {
    const events = useAppSelector(selectAllEvents);

    const statsData: StatsData | null = useMemo(() => {
        if (events) {
            return events.reduce(
                (acc, event) => {
                    // calculate totalEvents
                    acc.total = events.length;

                    // calculate activeEvents = Scheduled + ReadyForStreaming
                    if (
                        event.state === "scheduled" ||
                        event.state === "ready"
                    ) {
                        acc.active += 1;
                    }

                    // completed = Completed + ReplayAvailable
                    if (
                        event.state === "completed" ||
                        event.state === "replay"
                    ) {
                        acc.completed += 1;
                    }

                    // calculates ticket revenue
                    acc.revenue += event.details.ticketRevenue;
                    //  tickets sold
                    acc.ticketsSold += event.details.ticketsSold;

                    //  max expected viewers across all events
                    acc.totalExpectedViewers +=
                        event.details.expectedViewers.max;

                    return acc;
                },
                {
                    total: 0,
                    active: 0,
                    completed: 0,
                    revenue: 0,
                    ticketsSold: 0,
                    totalExpectedViewers: 0,
                },
            );
        }
        return null;
    }, [events]);

    return {
        stats: statsData,
    };
};
