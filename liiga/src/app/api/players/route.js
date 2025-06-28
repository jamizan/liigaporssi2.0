import { getAllPlayersWithStats, getPlayerStatsById } from '../dbhelper.js';

//const date = new Date.now().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format
const date = new Date('2025-03-18');
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const playerid = searchParams.get('playerid');
  const type = searchParams.get('type');
  try {
    if (type === 'stats') {
      const players = await getAllPlayersWithStats(date);
      return new Response(JSON.stringify(players), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (type === 'player' && playerid) {
      const players = await getPlayerStatsById(Number(playerid));
      return new Response(JSON.stringify(players), {
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}