"use client"

import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExtraInfo(
    { player }
){

    const [playersYearly, setPlayersYearly] = useState({});
    const [playersLastTen, setPlayersLastTen] = useState({});
    const [playerInstances, setPlayerInstances] = useState([]);
    const [playerInstancesTen, setPlayerInstancesTen] = useState([]);

useEffect(() => {
    fetch('/yearlyPlayerData.json')
        .then((res) => res.json())
        .then((data) => {
            const playerInstances = [];
            var playerInstancesTen = 0;
            const currentYear = {
                goals: 0,
                assists: 0,
                plusminus: 0,
                penaltyminutes: 0,
                blocks: 0,
                shots: 0,
                faceoffs: 0,
                LPP: 0,
            };
            const lastTen = {
                goals: 0,
                assists: 0,
                plusminus: 0,
                penaltyminutes: 0,
                blocks: 0,
                shots: 0,
                faceoffs: 0,
                LPP: 0,
            };

            Object.keys(data).forEach((date) => {
                if (Array.isArray(data[date])) {
                    data[date].forEach((players) => {
                        players.forEach((playerData) => {
                            if (playerData.id === player.id) {
                                playerInstances.push({ date, ...playerData });

                                currentYear.goals += playerData.goals || 0;
                                currentYear.assists += playerData.assists || 0;
                                currentYear.plusminus += playerData.plusminus || 0;
                                currentYear.penaltyminutes += playerData.penaltyminutes || 0;
                                currentYear.blocks += playerData.blocks || 0;
                                currentYear.shots += playerData.shots || 0;
                                currentYear.faceoffs += playerData.faceoffs || 0;
                                currentYear.LPP += playerData.LPP || 0;
                            }
                        });
                    });

                } else {
                    console.error(`Expected an array for date ${date}, but got: `, typeof data[date]);
                }
            });

            const lastTenGames = playerInstances.slice(-10);
            lastTenGames.forEach((game) => {
                playerInstancesTen += 1;

                lastTen.goals += game.goals || 0;
                lastTen.assists += game.assists || 0;
                lastTen.plusminus += game.plusminus || 0;
                lastTen.penaltyminutes += game.penaltyminutes || 0;
                lastTen.blocks += game.blocks || 0;
                lastTen.shots += game.shots || 0;
                lastTen.faceoffs += game.faceoffs || 0;
                lastTen.LPP += game.LPP || 0;
            });
            
            setPlayersYearly(currentYear);
            setPlayersLastTen(lastTen);
            setPlayerInstances(playerInstances);
            setPlayerInstancesTen(playerInstancesTen);
        })
        .catch((error) => console.error("Error fetching data: ", error));
}, []);


    var imageId = 'https://liigaporssi.fi/LP/images/players/player_'+player.id+'.jpg';

    return(
        <tr className="w-full border-b-2 border-stone-600">
            <td className="text-gray-400 w-auto">
                <div className="ml-4 mr-4">
                    <Image
                        className="w-auto h-50"
                        src={imageId}
                        alt={player.firstname + " " + player.lastname}
                        width={1000}
                        height={1000}
                        />
                </div>
            </td>
            <td colSpan={10} className="w-100">
                <table className="w-full table-fixed mt-2 mb-4">
                    <thead>
                        <tr className="text-center">
                            <th colSpan={10} className="text-center pt-4">
                                <h1>Edelliset kymmenen peliä</h1>
                            </th>
                        </tr>
                        <tr className="text-gray-300 border-b-2 border-gray-300">
                            <th className="py-2">O</th>
                            <th className="py-2">M</th>
                            <th className="py-2">S</th>
                            <th className="py-2">R</th>
                            <th className="py-2">L</th>
                            <th className="py-2">B</th>
                            <th className="py-2">A</th>
                            <th className="py-2">+/-</th>
                            <th className="py-2">LPP</th>
                            <th className="py-2">LPP/O</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td className="table-cell text-gray-400 py-2">{playerInstancesTen}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.goals}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.assists}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.penaltyminutes}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.shots}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.blocks}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.faceoffs}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.plusminus}</td>
                            <td className="table-cell text-gray-400 py-2">{playersLastTen.LPP}</td>
                            <td className="table-cell text-gray-400 py-2">{(playersLastTen.LPP / playerInstancesTen).toFixed(2)}</td>
                        </tr>
                    </tbody>
                    <thead className="">
                        <tr className="text-center">
                            <th colSpan={10} className="text-center pt-4">
                                <h1>Kausi tähän mennessä</h1>
                            </th>
                        </tr>
                        <tr className="text-gray-300 border-b-2 border-gray-300">
                            <th className="py-2">O</th>
                            <th className="py-2">M</th>
                            <th className="py-2">S</th>
                            <th className="py-2">R</th>
                            <th className="py-2">L</th>
                            <th className="py-2">B</th>
                            <th className="py-2">A</th>
                            <th className="py-2">+/-</th>
                            <th className="py-2">LPP</th>
                            <th className="py-2">LPP/O</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-row">
                            <td className="table-cell text-gray-400 py-2">{playerInstances.length}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.goals}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.assists}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.penaltyminutes}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.shots}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.blocks}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.faceoffs}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.plusminus}</td>
                            <td className="table-cell text-gray-400 py-2">{playersYearly.LPP}</td>
                            <td className="table-cell text-gray-400 py-2">{(playersYearly.LPP / playerInstances.length).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    );

}