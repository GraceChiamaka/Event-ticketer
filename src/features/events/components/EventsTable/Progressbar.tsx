import styles from "./EventsTable.module.css";


export const ProgressBar = ({ completionPercent = 10, hasWarning }: { completionPercent: number; hasWarning: boolean }) => {
	return (
		<div className={styles.progressbar}>
			<div className={styles.progressbar_track}>
				<div
					className={`${styles.progressbar_ink} ${completionPercent === 100
						? styles.ink_success
						: hasWarning
							? styles.ink_warning
							: styles.ink_default
						}`}
					style={{ width: `${completionPercent}%` }}
				/>
			</div>
		</div>
	);
}
