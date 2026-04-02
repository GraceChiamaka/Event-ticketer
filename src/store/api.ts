import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Event } from "@features/events/types";

export const eventsApi = createApi({
    reducerPath: "eventsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Event"],
    endpoints: (builder) => ({
        getEvents: builder.query<Event[], void>({
            query: () => "/events",
            providesTags: ["Event"],
        }),
        getEvent: builder.query<Event, string>({
            query: (id) => `/events/${id}`,
            providesTags: ["Event"],
        }),
    }),
});

export const { useGetEventsQuery, useGetEventQuery } = eventsApi;
