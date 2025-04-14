"use client"

import React from "react";
import Image from "next/image";


export default function DefaultDisplay({team, name, LPP}){
    return(
        <>
        <div id="player-name">
            {name}
        </div>
        <div className="text-center ml-[10%]">
            <Image id="playerImage" src={team} alt="react" width={140} height={100} />
        </div>

        <div>
            {LPP}
        </div>

        <div className="flex">
            <div className="w-[50%]" id="player-captain">
                Kapteeniksi
            </div>
            <div className="w-[50%]">
                <button>
                    Vaihda
                </button>
            </div>
        </div>
        
            
            </>
    );
};