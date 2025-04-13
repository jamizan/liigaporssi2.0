"use client"

import React from "react";
import Image from "next/image";


export default function DefaultDisplay({position, team, info}){
    return(
        <>
        
        <div className="text-center ml-[10%]" id = 'playerImage'>
            <Image src={team} alt="react" width={140} height={100} />
        </div>
        <div id="player-name">
            {position}
        </div>
        <div id="player-captain">
            kakak
        </div>
            
            </>
    );
};