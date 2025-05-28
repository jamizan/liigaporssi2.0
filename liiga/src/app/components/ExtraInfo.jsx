"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";

export default function ExtraInfo(
    { player }
){

    const [players, setPlayers] = useState([]);

    var imageId = 'https://liigaporssi.fi/LP/images/players/player_'+player.id+'.jpg';

    return(
        <tr className="table-row w-full">
            <td className="table-cell text-gray-400">
                <div className="">
                    <Image
                        className="w-50 h-auto"
                        src={imageId}
                        alt='askdj'
                        width={1000}
                        height={1000}
                        />
                    <span>
                        {player.id}
                    </span>
                </div>
            </td>
        </tr>
    );

}