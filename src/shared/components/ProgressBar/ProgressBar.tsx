import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
	percent: number;
	variant?: "primary" | "success" | "error" | "warning" | "info";
	label: string;
	metaLabel?: string;
};

export const ProgressBar = ({
	percent,
	variant = "primary",
	label,
	metaLabel,
}: ProgressBarProps) => {
	const clampedPercent = Math.min(Math.max(percent, 0), 100);

	const variantClass = {
		primary: styles.primary,
		success: styles.success,
		error: styles.error,
		warning: styles.warning,
		info: styles.info,
	}[variant];

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span className={styles.label}>{label}</span>
				{metaLabel && <span className={styles.metaLabel}>{metaLabel}</span>}
			</div>
			<div className={`${styles.progressBar} ${variantClass}`}>
				<div
					className={styles.fill}
					style={{ width: `${clampedPercent}%` }}
				/>
			</div>
		</div>
	);
};
