import { mockEvents } from "@/mocks/events";

export async function GET(
    _req: Request,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    if (id) {
        const event = mockEvents.find((e) => e.id === id);
        if (!event) {
            return Response.json({ error: "Event not found" }, { status: 404 });
        }
        return Response.json(event);
    }
    return Response.json(
        { message: "Event with id not found" },
        { status: 500 },
    );
}
