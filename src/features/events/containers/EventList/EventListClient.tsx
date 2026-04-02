
'use client'
import { useEffect } from 'react'
import { useGetEventsQuery } from '@store/api'
import { forceSetEvents, selectAllEvents, setEvents } from '@store/events'
import { useAppDispatch, useAppSelector } from '@store/index'
import { Stats, SearchEvents, EventsTable } from '@features/events/components'

export const EventsListClient = () => {
	const dispatch = useAppDispatch()
	const { data, isLoading, isError } = useGetEventsQuery();
	const events = useAppSelector(selectAllEvents);

	useEffect(() => {
		if (data) {
			if (events.length === 0) {
				dispatch(forceSetEvents(data))
			} else {
				dispatch(setEvents(data))
			}
		}
	}, [data, dispatch, events.length])


	if (isLoading) return <div>Loading Events...</div>
	if (isError) return <div>Failed to load events.</div>

	return (
		<>
			<Stats />
			<SearchEvents />
			<EventsTable />
		</>
	)
}