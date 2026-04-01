
import { Event } from "../../types";
import styles from "./EventRequirements.module.css";
import { RequirementRow } from "./RequirementRow";


/** 
 * TODO: use requirement id to display modal to update required information
 */
export const EventRequirements = ({ requirements }: { requirements: Event['requirements'] }) => {

	const countCompleted = requirements.reduce((acc, curr) => {
		acc = curr.status === "success" ? acc + 1 : acc + 0;
		return acc
	}, 0);
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p className={styles.heading}>Operational Requirements</p>
				<p>{countCompleted}/{requirements.length} completed</p>
			</div>

			{requirements.map(({ id, ...rest }) => <RequirementRow key={id} requirement={{ id, ...rest }} />)}

		</div>
	);
}
