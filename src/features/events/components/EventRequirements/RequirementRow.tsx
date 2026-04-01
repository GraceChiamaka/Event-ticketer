import { CheckIcon, DotIcon, WarningIcon } from "@phosphor-icons/react/dist/ssr";
import { Requirement } from "../../types";
import styles from "./EventRequirements.module.css";
import { Button } from "@/shared/components";

export const RequirementRow = ({ requirement }: { requirement: Requirement }) => {
	const statusStyles = requirement.status === "success" ? styles.status_success : requirement.status === "warning" ? styles.status_warning : styles.status_pending;
	return (
		<div className={styles.requirement_row}>
			<div className={styles.content}>
				<span className={`${styles.status_icon} ${statusStyles}`}>
					{requirement.status === "success" ? <CheckIcon /> : requirement.status === "warning" ? <WarningIcon /> : <DotIcon weight="fill" size={18} className="text-muted" />}
				</span>
				<div className={styles.label_container}>
					<p className={`${styles.label} ${requirement.status === "warning" ? styles.warning : styles.default}`}>{requirement.label}</p>
					<p className={styles.warning_text}>{requirement.blockingReason}</p>
				</div>
			</div>

			{requirement.status !== "success" && <Button variant="secondary"> Rectify</Button>}

		</div>
	);
}


