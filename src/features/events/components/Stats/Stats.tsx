"use client";
import { EventsStats } from "../../types";
import { StatsCard } from "../StatsCard";
import { CardVariant } from "../StatsCard";
import { useStats } from "../../hooks";
import { useMemo } from "react";
import styles from "./Stats.module.css";

type Stats = {
	title: string;
	description?: string;
}
type StatKey = keyof EventsStats;

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
		description: ""
	},
};
export const Stats = () => {
	const { stats } = useStats();

	const formattedStats = useMemo(() => {
		if (stats && stats !== null) {
			const conversionRate = stats?.totalExpectedViewers > 0
				? Math.round((stats?.ticketsSold / stats?.totalExpectedViewers) * 100)
				: 0

			const formattedRevenue = stats.revenue >= 1000
				? `$${(stats.revenue / 1000).toFixed(1)}K`
				: `$${stats.revenue}`

			return {
				total: stats.total,
				active: stats.active,
				completed: stats.completed,
				revenue: {
					amount: formattedRevenue,
					summary: `${conversionRate}% ticket conversion rate`,
				},
			}
		}

	}, [stats]);


	return stats && (
		<div className={styles.stats_row}>
			{formattedStats && Object.entries(formattedStats).map(([key, value]) => {
				const meta = statsMeta[key as StatKey];
				return (
					<StatsCard
						key={key}
						variant={key as CardVariant}
						title={meta.title}
						value={typeof value === "object" ? value.amount : value}
						description={typeof value === "object" ? value.summary : meta.description ?? ""} />
				)
			})
			}
		</div>
	);
}


