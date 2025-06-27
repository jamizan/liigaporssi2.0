// src/app/api/dbhelper.js
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function getAllPlayers() {
  return prisma.playerdata.findMany();
}

export async function getAllPlayersWithStats(date) {
  return prisma.playerdata.findMany({
    include: {
      playerstats: {
        where: {
          gamedata: {
            is: {
              gamedate: date,
            },
          },
        },
      },
    },
  });
}

export async function getPlayerById(playerid) {
  return prisma.playerdata.findUnique({ where: { playerid } });
}

// Add more methods as needed

export default prisma;