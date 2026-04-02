import { RootState } from "../index";
import { EventState } from "@features/events/types";

export const selectAllEvents = (state: RootState) => state.events.events;

export const selectSelectedEventId = (state: RootState) =>
    state.events.selectedEventId;

export const selectSelectedEvent = (state: RootState) => {
    const selectedEventId = state.events.selectedEventId;
    if (!selectedEventId) return null;
    return state.events.events.find((event) => event.id === selectedEventId) || null;
};

export const selectEventsByState = (state: RootState, eventState: EventState) =>
    state.events.events.filter((event) => event.state === eventState);

export const selectEventById = (state: RootState, eventId: string) =>
    state.events.events.find((event) => event.id === eventId) || null;
