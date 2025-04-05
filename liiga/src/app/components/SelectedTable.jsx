"use client"

import React from "react";
import Image from "next/image";
import ilves from '@/app/logos/ilves.jpg'

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
                </tr>
            </tbody>
        </table>
    );
}