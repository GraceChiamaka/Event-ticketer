import { EventsStats } from "../../types";
import { StatsCard } from "../StatsCard";
import styles from "./Stats.module.css";
import { CardVariant } from "../StatsCard";

type Stats = {
	title: string;
	description?: string;
}
type StatKey = keyof EventsStats;

type StatsProps = {
	data: EventsStats;
}
const statsMeta: Record<StatKey, Stats> = {
	total: {
		title: "Total Events",
		description: "This month",
	},
	active: {
		title: "Active",
		description: "Ready & Scheduled",
	},
	completed: {
		title: "Completed Events",
		description: "This month",
	},
	revenue: {
		title: "Revenue",
	},
};
export const Stats = ({ data }: StatsProps) => {
	return (
		<div className={styles.stats_row}>
			{Object.entries(data).map(([key, value]) => {
				const meta = statsMeta[key as StatKey];
				return (
					<StatsCard
						key={key}
						variant={key as CardVariant}
						title={meta.title}
						value={typeof value === "object" ? value.amount : value}
						description={typeof value === "object" ? value.summary : meta.description} />
				)
			})
			}
		</div>
	);
}


