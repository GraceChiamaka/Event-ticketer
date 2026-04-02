import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, EventState, RequirementStatus } from "@features/events/types";

interface EventsSliceState {
    events: Event[];
    selectedEventId: string | null;
    selectedEvent: Event | null;
}

const initialState: EventsSliceState = {
    events: [],
    selectedEventId: null,
    selectedEvent: null,
};

const eventsSlice = createSlice({
    name: "events",
    initialState,
    reducers: {
        setEvents(state, action: PayloadAction<Event[]>) {
            state.events = action.payload;
            // merge incoming events with existing ones, preserving local updates
            action.payload.forEach((incomingEvent) => {
                const existingIndex = state.events.findIndex(
                    (e) => e.id === incomingEvent.id,
                );
                if (existingIndex === -1) {
                    state.events.push(incomingEvent);
                }
            });
        },
        setSelectedEventId(state, action: PayloadAction<string>) {
            state.selectedEventId = action.payload;
        },
        forceSetEvents(state, action: PayloadAction<Event[]>) {
            // hard replace, used only on first load
            state.events = action.payload;
        },
        updateEventState(
            state,
            action: PayloadAction<{ id: string; newState: EventState }>,
        ) {
            const { id, newState } = action.payload;
            const event = state.events.find((e) => e.id === id);
            if (event) {
                event.state = newState;
            }
        },
        updateRequirementStatus(
            state,
            action: PayloadAction<{
                eventId: string;
                requirementId: string;
                statusId: RequirementStatus;
            }>,
        ) {
            const { eventId, requirementId, statusId } = action.payload;
            const event = state.events.find((e) => e.id === eventId);
            if (event) {
                const requirement = event.requirements.find(
                    (r) => r.id === requirementId,
                );
                if (requirement) {
                    requirement.status = statusId;
                }
            }
        },
    },
});

export const {
    forceSetEvents,
    setEvents,
    setSelectedEventId,
    updateEventState,
    updateRequirementStatus,
} = eventsSlice.actions;

export default eventsSlice.reducer;
