"use client"

import React, { useState } from 'react';
import DefaultDisplay from "@/app/components/DefaultDisplay";
import SelectedPlayerRows from "@/app/components/SelectedPlayerRows";

export default function SelectedTable({
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6,
}){

    const [openPlayerInfo, setOpenPlayerInfo] = useState(null);
    

    return(
        <><table className="text-center w-[100%] ">
            <tbody>
                <tr>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-1">
                        <DefaultDisplay setImageSrc1={setImageSrc1} imageSrc1={imageSrc1} position={'Hyökkääjä'} team={imageSrc1.src} name={imageSrc1.nam} LPP={imageSrc1.LPP} value={'1'} />
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-2">
                        <DefaultDisplay setImageSrc2={setImageSrc2} imageSrc2={imageSrc2} position={'Hyökkääjä'} team={imageSrc2.src} name={imageSrc2.nam} LPP={imageSrc2.LPP} value={'2'} />
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-3">
                        <DefaultDisplay setImageSrc3={setImageSrc3} imageSrc3={imageSrc3} position={'Hyökkääjä'} team={imageSrc3.src} name={imageSrc3.nam} LPP={imageSrc3.LPP} value={'3'} />
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-4">
                        <DefaultDisplay setImageSrc4={setImageSrc4} imageSrc4={imageSrc4} position={'Puolustaja'} team={imageSrc4.src} name={imageSrc4.nam} LPP={imageSrc4.LPP} value={'4'} />
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-5">
                        <DefaultDisplay setImageSrc5={setImageSrc5} imageSrc5={imageSrc5} position={'Puolustaja'} team={imageSrc5.src} name={imageSrc5.nam} LPP={imageSrc5.LPP} value={'5'} />
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-6">
                        <DefaultDisplay setImageSrc6={setImageSrc6} imageSrc6={imageSrc6} position={'Maalivahti'} team={imageSrc6.src} name={imageSrc6.nam} LPP={imageSrc6.LPP} value={'6'} />
                    </td>
                </tr>
                <tr className="p-[50px]">
                    <td colSpan={6} className="text-center bg-zinc-900">
                        LPP: {imageSrc1.LPP + imageSrc2.LPP + imageSrc3.LPP + imageSrc4.LPP + imageSrc5.LPP + imageSrc6.LPP}
                    </td>
                </tr>
            </tbody>
        </table>
        <table className="w-[100%] w-full table-auto justify-center text-center">
            {[imageSrc1, imageSrc2, imageSrc3, imageSrc4, imageSrc5].some(src => src.nam !== '\u200B') && (
            <thead className="text-gray-300 border-b-2 border-gray-300">
                <tr>
                    <th className="py-2">Nimi</th>
                    <th className="py-2">Joukkue</th>
                    <th className="py-2">M</th>
                    <th className="py-2">S</th>
                    <th className="py-2">R</th>
                    <th className="py-2">L</th>
                    <th className="py-2">B</th>
                    <th className="py-2">A</th>
                    <th className="py-2">+/-</th>
                    <th className="py-2">LPP</th>
                </tr>
            </thead>
            )}
            <tbody>
                {(imageSrc1.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc1={setImageSrc1} imageSrc1={imageSrc1} imageSrc={imageSrc1} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'1'} />
                )}
                {(imageSrc2.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc2={setImageSrc2} imageSrc2={imageSrc2} imageSrc={imageSrc2} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'2'} />
                )}
                {(imageSrc3.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc3={setImageSrc3} imageSrc3={imageSrc3} imageSrc={imageSrc3} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'3'} />
                )}
                {(imageSrc4.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc4={setImageSrc4} imageSrc4={imageSrc4} imageSrc={imageSrc4} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'4'} />
                )}
                {(imageSrc5.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc5={setImageSrc5} imageSrc5={imageSrc5} imageSrc={imageSrc5} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'5'} />
                )}
            </tbody>
            { [imageSrc6].some(src => src.nam !== '\u200B') && (
            <thead className="text-gray-300 border-t-3 border-gray-300">
                <tr>
                    <th className="py-2">Nimi</th>
                    <th className="py-2">Joukkue</th>
                    <th className="py-2">M</th>
                    <th className="py-2">S</th>
                    <th className="py-2">R</th>
                    <th className="py-2">T</th>
                    <th className="py-2">PM</th>
                    <th></th>
                    <th></th>
                    <th className="py-2">LPP</th>
                </tr>
            </thead>
            )}
            <tbody>
                {(imageSrc6.nam !== '\u200B') &&(
                    <SelectedPlayerRows setImageSrc6={setImageSrc6} imageSrc6={imageSrc6} imageSrc={imageSrc6} openPlayerInfo={openPlayerInfo} setOpenPlayerInfo={setOpenPlayerInfo} value={'6'} />
                )}
            </tbody>
            
        </table>
    </>
    );
}