"use client"

import React, { use } from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ExtraInfo(
    { playerid }
){
    const [player, setPlayer] = useState({});

useEffect(() => {
    fetch(`/api/players?type=player&playerid=${playerid}`)
        .then((res) => res.json())
        .then((data) => {
            setPlayer(data);
    })
}, [playerid]);

    const statsCount = player.playerstats ? player.playerstats.length : 0;
    const keySums = player.playerstats
    ? player.playerstats.reduce((acc, stat) => {
        Object.entries(stat).forEach(([key, value]) => {
            if (typeof value === "number") {
            acc[key] = (acc[key] || 0) + value;
            }
        });
        return acc;
        }, {})
    : {};

    const lastTenStats = player.playerstats
    ? player.playerstats.slice(-10)
    : [];

    // Sum values for each key in the last 10 stats
    const keySumsLastTen = lastTenStats.reduce((acc, stat) => {
    Object.entries(stat).forEach(([key, value]) => {
        if (typeof value === "number") {
        acc[key] = (acc[key] || 0) + value;
        }
    });
    return acc;
    }, {});


    var imageId = 'https://liigaporssi.fi/LP/images/players/player_'+player.playerid+'.jpg';

    return(
        <tr className="w-full border-b-2 border-stone-600">
            <td className="text-gray-400 w-auto">
                <div className="ml-4 mr-4 flex items-center justify-center">
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
                    {player.position === "GOALIE" ? (
                    <>
                        <thead>
                            <tr className="text-center">
                                <th colSpan={7} className="text-center pt-4">
                                    <h1>Edelliset kymmenen peliä</h1>
                                </th>
                            </tr>
                            <tr className="text-gray-300 border-b-2 border-gray-300 bg-gray-200/5">
                                <th className="py-2">O</th>
                                <th className="py-2">M</th>
                                <th className="py-2">S</th>
                                <th className="py-2">R</th>
                                <th className="py-2">T</th>
                                <th className="py-2">PM</th>
                                <th className="py-2"></th>
                                <th className="py-2"></th>
                                <th className="py-2">LPP</th>
                                <th className="py-2">LPP/O</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row">
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2"></td>
                                <td className="table-cell text-gray-400 py-2"></td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr className="text-center">
                                <th colSpan={7} className="text-center pt-4">
                                    <h1>Kausi tähän mennessä</h1>
                                </th>
                            </tr>
                            <tr className="text-gray-300 border-b-2 border-gray-300 bg-gray-200/5">
                                <th className="py-2">O</th>
                                <th className="py-2">M</th>
                                <th className="py-2">S</th>
                                <th className="py-2">R</th>
                                <th className="py-2">T</th>
                                <th className="py-2">PM</th>
                                <th className="py-2"></th>
                                <th className="py-2"></th>
                                <th className="py-2">LPP</th>
                                <th className="py-2">LPP/O</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="table-row">
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2"></td>
                                <td className="table-cell text-gray-400 py-2"></td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                                <td className="table-cell text-gray-400 py-2">{}</td>
                            </tr>
                        </tbody>
                    </>
                ) : (
                    <>
                        {
                        <>
                        <thead>
                            <tr className="text-center">
                                <th colSpan={10} className="text-center pt-4">
                                    <h1>Edelliset kymmenen peliä</h1>
                                </th>
                            </tr>
                            <tr className="text-gray-300 border-b-2 border-gray-300 bg-gray-200/5">
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
                        </thead><tbody>
                                <tr className="table-row">
                                    <td className="table-cell text-gray-400 py-2">{lastTenStats.length}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.goals}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.assists}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.penaltyminutes}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.shots}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.blocks}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.faceoffs}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.plusminus}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySumsLastTen.lpp}</td>
                                    <td className="table-cell text-gray-400 py-2">
                                          {
                                            lastTenStats.length > 0 && keySumsLastTen.lpp !== undefined
                                            ? (keySumsLastTen.lpp / lastTenStats.length).toFixed(2): 0
                                          }
                                        </td>
                                </tr>
                            </tbody><thead className="">
                                <tr className="text-center">
                                    <th colSpan={10} className="text-center pt-4">
                                        <h1>Kausi tähän mennessä</h1>
                                    </th>
                                </tr>
                                <tr className="text-gray-300 border-b-2 border-gray-300 bg-gray-200/5">
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
                            </thead><tbody>
                                <tr className="table-row">
                                    <td className="table-cell text-gray-400 py-2">{statsCount}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.goals}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.assists}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.penaltyminutes}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.shots}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.blocks}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.faceoffs}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.plusminus}</td>
                                    <td className="table-cell text-gray-400 py-2">{keySums.lpp}</td>
                                    <td className="table-cell text-gray-400 py-2">
                                          {
                                            statsCount > 0 && keySums.lpp !== undefined
                                            ? (keySums.lpp / statsCount).toFixed(2): 0
                                          }
                                    </td>
                                </tr>
                            </tbody>
                            </>
                        }
                    </>
                )}
                    
                </table>
            </td>
        </tr>
    );

}