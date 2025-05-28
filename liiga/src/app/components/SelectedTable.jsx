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
<<<<<<< HEAD
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
=======
        <table className="text-center w-[100%]">
            <tbody>
                <tr>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-1">
                        <DefaultDisplay setImageSrc1={setImageSrc1} imageSrc1={imageSrc1} position={'Hyökkääjä'} team={imageSrc1.src} name={imageSrc1.nam} LPP={imageSrc1.LPP} value={'1'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-2">
                        <DefaultDisplay setImageSrc2={setImageSrc2} imageSrc2={imageSrc2} position={'Hyökkääjä'} team={imageSrc2.src} name={imageSrc2.nam} LPP={imageSrc2.LPP} value={'2'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-3">
                        <DefaultDisplay setImageSrc3={setImageSrc3} imageSrc3={imageSrc3} position={'Hyökkääjä'} team={imageSrc3.src} name={imageSrc3.nam} LPP={imageSrc3.LPP} value={'3'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-4">
                        <DefaultDisplay setImageSrc4={setImageSrc4} imageSrc4={imageSrc4} position={'Puolustaja'} team={imageSrc4.src} name={imageSrc4.nam} LPP={imageSrc4.LPP} value={'4'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-5">
                        <DefaultDisplay setImageSrc5={setImageSrc5} imageSrc5={imageSrc5} position={'Puolustaja'} team={imageSrc5.src} name={imageSrc5.nam} LPP={imageSrc5.LPP} value={'5'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-6">
                        <DefaultDisplay setImageSrc6={setImageSrc6} imageSrc6={imageSrc6} position={'Maalivahti'} team={imageSrc6.src} name={imageSrc6.nam} LPP={imageSrc6.LPP} value={'6'}/>
                    </td>
                </tr>
                <tr className="p-[50px]">
                    <td colSpan={6} className="text-center bg-zinc-900">
                        LPP: {imageSrc1.LPP + imageSrc2.LPP + imageSrc3.LPP + imageSrc4.LPP + imageSrc5.LPP + imageSrc6.LPP}
>>>>>>> refs/remotes/origin/main
                    </td>
                </tr>
            </tbody>
        </table>
    );
    
}