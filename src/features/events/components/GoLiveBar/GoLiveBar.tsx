import { Button } from "@/shared/components";
import { LockIcon } from "@phosphor-icons/react/dist/ssr";
import styles from "./LiveBar.module.css";


export const GoLiveBar = ({ canStream }: { canStream: { allowed: boolean; reason: string | null; } }) => {
	return (
		<div className={styles.container}>
			<div>
				<h4>Ready to go live?</h4>
				<p>Complete all requirements to enable streaming</p>
			</div>
			<Button variant={canStream.allowed ? "default" : "secondary"} disabled={!canStream.allowed}>{!canStream.allowed && <LockIcon className="text-muted" size={16} />}Start Streaming </Button>
		</div>
	);
}
