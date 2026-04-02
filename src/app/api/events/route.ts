import { mockEvents } from '@/mocks/events'

export async function GET() {
  return Response.json(mockEvents)
}
