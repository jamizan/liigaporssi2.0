"use client";

import React, { useState } from 'react';

const toolbar = () => {
    const [position, setPosition] = useState("position")
    


    return (
        <table className='grid w-[60%] bg-blue-800 border-separate border-spacing-2'>
            <thead>
                <tr className='table-row'>
                    <th className='table-cell text-stone-900 w-40 pl-5 py-1'>
                        <input className='p-2 ' type="search" name="searchField" id="searchField" placeholder='Hae pelaajaa'/>
                    </th>
                    <th className='table-cell text-gray-400'>
                        <select className='bg-stone-800 p-3' name="pelipaikka" id="position"
                            value={position} onChange={(e)=>{
                                setPosition(e.target.value)
                                console.log(e.target.value);
                                     
                            }}
                        >
                            <option value="all">Kaikki</option>
                            <option value="attacker">Hyökkääjä</option>
                            <option value="defender">Puolustaja</option>
                            <option value="goalie">Maalivahti</option>
                        </select>
                    </th>
                    <th className='table-cell text-gray-400'>
                        <select className='bg-stone-800 p-3' name="Joukkue" id="team">
                            <option value="HIFK">HIFK</option>
                            <option value="HPK">HPK</option>
                            <option value="ILVES">ILVES</option>
                            <option value="JUKURIT">JUKURIT</option>
                            <option value="JYP">JYP</option>
                            <option value="KALPA">KALPA</option>
                            <option value="K-ESPOO">K-ESPOO</option>
                            <option value="KOOKOO">KOOKOO</option>
                            <option value="KÄRPÄT">KÄRPÄT</option>
                            <option value="LUKKO">LUKKO</option>
                            <option value="PELICANS">PELICANS</option>
                            <option value="SAIPA">SAIPA</option>
                            <option value="SPORT">SPORT</option>
                            <option value="TAPPARA">TAPPARA</option>
                            <option value="TPS">TPS</option>
                            <option value="ÄSSÄT">ÄSSÄT</option>
                        </select>
                    </th>
                </tr>
            </thead>
            
        </table>
    );
};

export default toolbar;