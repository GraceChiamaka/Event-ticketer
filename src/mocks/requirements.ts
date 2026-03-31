import { Requirement } from "@/features/events/types";

export const getDefaultRequirements = (): Requirement[] => [
    {
        id: "crew-assigned",
        label: "Production crew assigned",
        status: "pending",
        required: true,
    },
    {
        id: "streaming-ingest",
        label: "Streaming ingest configured",
        status: "pending",
        required: true,
        blockingReason: "RTMP endpoint needs verification",
    },
    {
        id: "ticket-pricing",
        label: "Ticket pricing configured",
        status: "pending",
        required: true,
    },
    {
        id: "backup-stream",
        label: "Backup stream endpoint",
        status: "pending",
        required: false,
    },
    {
        id: "chat-moderation",
        label: "Chat moderation enabled",
        status: "pending",
        required: true,
    },
    {
        id: "recording-storage",
        label: "Recording storage allocated",
        status: "pending",
        required: true,
        warningReason: "Storage capacity at 78%",
    },
    {
        id: "emergency-contact",
        label: "Emergency contact list",
        status: "pending",
        required: false,
    },
];
