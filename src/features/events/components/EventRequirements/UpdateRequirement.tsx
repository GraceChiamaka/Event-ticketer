"use client";

import { useAppDispatch } from "@/store";
import { Requirement } from "../../types";
import { updateRequirementStatus } from "@/store/events";


export const UpdateRequirement = ({ close, eventId, requirement }: { requirement: Requirement; close: () => void; eventId: string }) => {
	const dispatch = useAppDispatch();

	const handleUpdateRequirement = () => {
		dispatch(updateRequirementStatus({ eventId, requirementId: requirement.id, statusId: requirement.status }));
		close();
	}
	return (
		<div>
			<h3>Update selected Requirement</h3>
			<button onClick={handleUpdateRequirement}>Mark as done</button>
		</div>
	);
}

