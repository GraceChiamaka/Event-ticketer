"use client"
import { CheckIcon, DotIcon, WarningIcon } from "@phosphor-icons/react/dist/ssr";
import { Requirement } from "../../types";
import styles from "./EventRequirements.module.css";
import { Button, ModalTrigger, useModal, ModalContent } from "@/shared/components";
import { UpdateRequirement } from "./UpdateRequirement";
import { useParams } from "next/navigation";

export const RequirementRow = ({ requirement }: { requirement: Requirement }) => {
	const modal = useModal();
	const { id } = useParams();
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

			{requirement.status !== "success" && (
				<ModalTrigger
					refs={modal.refs}
					getReferenceProps={modal.getReferenceProps} >
					<Button variant="secondary"> Rectify</Button>
				</ModalTrigger>
			)}
			<ModalContent
				refs={modal.refs}
				getFloatingProps={modal.getFloatingProps}
				open={modal.open}
			>
				<UpdateRequirement eventId={id as string} requirement={requirement} close={() => modal.setOpen(false)} />
			</ModalContent>

		</div>
	);
}


