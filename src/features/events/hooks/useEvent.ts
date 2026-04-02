import { useCallback, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "@store/index";
import {
    selectEventById,
    updateEventState,
    setSelectedEventId,
    setEvents,
    selectAllEvents,
} from "@store/events";
import { canStartStreaming } from "@shared/lib/utils";
import type { EventState } from "@features/events/types";
import { useGetEventQuery } from "@/store/api";

export const useEvent = (eventId: string) => {
    const dispatch = useAppDispatch();
    const event = useAppSelector((state) => selectEventById(state, eventId));
    const events = useAppSelector(selectAllEvents);

    const { data, isLoading, isError, isSuccess } = useGetEventQuery(eventId, {
        skip: !!event,
    });
    useEffect(() => {
        if (data) dispatch(setEvents([data]));
    }, [data, dispatch]);

    const { allowed, reason } = useMemo(() => {
        if (!event) {
            return { allowed: false, reason: "Event not found" };
        }
        return canStartStreaming(event.requirements, event.details.scheduledAt);
    }, [event, events]);

    const updateState = useCallback(
        (newState: EventState) => {
            dispatch(updateEventState({ id: eventId, newState }));
        },
        [dispatch, eventId],
    );
    useEffect(() => {
        if (eventId) {
            dispatch(setSelectedEventId(eventId));
        }
    }, [dispatch, eventId]);

    return {
        event: event !== null ? event : (data ?? null),
        isError,
        isLoading,
        isSuccess,
        updateState,
        canStream: { allowed, reason },
    };
};
