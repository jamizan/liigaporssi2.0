"use client"

import DefaultDisplay from "@/app/components/DefaultDisplay";
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
import question from "@/app/logos/question.png"
import { useState } from "react";

export default function SelectedTable(player, team){
    
    console.log(team);
    

    return(
        <table className="text-center h-full p-px">
            <tbody>
                <tr>
                    <td className="border-2 h-full" id="player-1">
                    </td>
                    <td className="border-2 h-full">
                        <DefaultDisplay position={'Hyökkääjä'} team={question}/>

                    </td>
                    <td className="border-2 h-full">
                        <DefaultDisplay position={'Hyökkääjä'} team={question}/>

                    </td>
                    <td className="border-2 h-full">
                        <DefaultDisplay position={'Puolustaja'} team={question}/>

                    </td>
                    <td className="border-2 h-full">
                        <DefaultDisplay position={'Puolustaja'} team={question}/>

                    </td>
                    <td className="border-2 h-full">
                        <DefaultDisplay position={'Maalivahti'} team={question}/>

                    </td>
                </tr>
            </tbody>
        </table>
    );
    
}