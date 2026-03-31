import { Event, Requirement } from "@/features/events/types";

export const getStatusLabel = (status: Event["state"]) => {
    switch (status) {
        case "live":
            return "Live Now";
        case "ready":
            return "Ready for Streaming";
        case "scheduled":
            return "Scheduled";
        case "completed":
            return "Completed";
        case "replay":
            return "Replay Available";
        default:
            return "Draft";
    }
};

export const calculateCompletionPercentage = (
    requirements: Requirement[],
): number => {
    const satisfied = requirements.filter((r) => r.status === "success").length;
    return Math.round((satisfied / requirements.length) * 100);
};

export const formatNumber = (value: number): string => {
    return new Intl.NumberFormat().format(value);
};
export const formatCompactNumber = (value: number): string => {
    const abs = Math.abs(value);

    if (abs >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
    }

    if (abs >= 1_000_000) {
        return (value / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    }

    if (abs >= 1_000) {
        return (value / 1_000).toFixed(1).replace(/\.0$/, "") + "k";
    }

    return value.toString();
};
