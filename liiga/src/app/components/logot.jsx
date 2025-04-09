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



export function Logot(team){
    switch (team) {
        case 'ifk':
            team = ifk
            break;
    
        default:
            break;
    }
    return(
        team
    );
}