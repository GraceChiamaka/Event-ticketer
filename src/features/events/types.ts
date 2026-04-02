export type RequirementStatus = "success" | "warning" | "pending";

export type EventState =
    | "draft"
    | "scheduled"
    | "ready"
    | "live"
    | "completed"
    | "replay"
    | "noreplay";

export interface Requirement {
    id: string;
    label: string;
    status: RequirementStatus;
    required: boolean;
    blockingReason?: string;
    warningReason?: string;
}

export interface StreamHealth {
    bandwidthPercent: number;
    bandwidthLabel: string;
    cdnPercent: number;
    cdnLabel: string;
    storagePercent: number;
}

export interface EventDetails {
    scheduledAt: string | null;
    durationMins: number;
    expectedViewers: { min: number; max: number };
    ticketRevenue: number;
    ticketsSold: number;
    streamQuality: string;
}

export interface LiveStats {
    viewerCount: number;
    elapsedSeconds: number;
    chatModerationActive: boolean;
}

export interface Event {
    id: string;
    title: string;
    state: EventState;
    thumbnail: string | null;
    details: EventDetails;
    requirements: Requirement[];
    streamHealth: StreamHealth;
    liveStats: LiveStats | null;
}

export interface EventsStats {
    total: number;
    active: number;
    completed: number;
    revenue: number;
}
