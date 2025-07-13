import { availableFilters, delay } from '@/utils/endpoint';

export async function GET() {
  // Mock a delay to simulate a real API
  await delay(1000);

  return Response.json({ availableFilters });
}
