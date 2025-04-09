"use client"

import React from "react";
import Image from "next/image";
import ifk from "@/app/logos/ifk.png"
import hpk from "@/app/logos/hpk.png"
import ilves from '@/app/logos/ilves.jpg'
import jukurit from "@/app/logos/jukurit.png"
import jyp from "@/app/logos/jyp.png"
import kalpa from "@/app/logos/kalpa.png"
import karpat from "@/app/logos/karpat.png"
import espoo from "@/app/logos/k-espoo.png"
import kookoo from "@/app/logos/kookoo.png"
import lukko from "@/app/logos/lukko.png"
import pelicans from "@/app/logos/pelicans.png"
import saipa from "@/app/logos/saipa.png"
import sport from "@/app/logos/sport.png"
import tappara from "@/app/logos/tappara.png"
import tps from "@/app/logos/tps.png"

export default function SelectedTable(){
    
    return(
        <table className="text-center h-full p-px">
            <tbody>
                <tr>
                    <td className="border-2 h-full">
                        <div>
                        <Image src={ilves} alt="react" width={140} height={100} />
                            

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                    <td className="border-2 h-full">
                    <div>
                        <Image src={ilves} alt="react" width={140} height={100} />

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                    <td className="border-2 h-full">
                    <div>
                        <Image src={ilves} alt="react" width={140} height={100} />

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                    <td className="border-2 h-full">
                    <div>
                        <Image src={ilves} alt="react" width={140} height={100} />

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                    <td className="border-2 h-full">
                    <div>
                        <Image src={kookoo} alt="react" width={140} height={100} />

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                    <td className="border-2 h-full">
                    <div>
                        <Image src={ifk} alt="react" width={120} height={100} />

                        </div>
                        <div id="player-name">
                            name
                        </div>
                        <div id="player-captain">
                            kapteeniksi
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
    
}