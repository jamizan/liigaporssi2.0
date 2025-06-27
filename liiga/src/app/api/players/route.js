import { getAllPlayersWithStats } from '../dbhelper.js';

const date = new Date('2025-03-18');
export async function GET(request) {
  try {
    const players = await getAllPlayersWithStats(date);
    return new Response(JSON.stringify(players), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}