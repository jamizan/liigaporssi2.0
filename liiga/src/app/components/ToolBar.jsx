"use client";

import React, { useState, Children } from 'react';

import { TableVisibilty } from '@/app/components/ContentTable';
import { TeamSelect } from '@/app/components/ContentTable';

export default function ToolBar() {
    const [position, setPosition] = useState("position")
    const [team, setTeam] = useState("team")
  return (
    <>
    
    <table className='grid w-[60%] border-separate border-spacing-2'>
          <thead className='bg-slate-300/90'>
              <tr className='table-row'>
                  <th className='table-cell text-stone-900 w-40 pl-5 py-1'>
                      <input className='p-2 border-2 border-stone-800 bg-slate-400/50' type="search" name="searchField" id="searchField" placeholder='Hae pelaajaa' />
                  </th>
                  <th className='table-cell text-gray-400'>
                      <select className='bg-stone-800 p-3' name="pelipaikka" id="position"
                          value={position} onChange={(e) => {
                              setPosition(e.target.value);
                              TableVisibilty(e.target.value);

                          } }
                      >
                          <option value="ALL" defaultValue={Children}>Kaikki</option>
                          <option value="ATTACKER">Hyökkääjä</option>
                          <option value="DEFENDER">Puolustaja</option>
                          <option value="GOALIE">Maalivahti</option>
                      </select>
                  </th>
                  <th className='table-cell text-gray-400'>
                      <select className='bg-stone-800 p-3' name="Joukkue" id="team"
                          value={team} onChange={(e) => {
                            setTeam(e.target.value);
                            TeamSelect(e.target.value)
                          } }
                      >
                        <option value="ALL" defaultValue={Children}>Kaikki</option>
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

      
      </>
  );
}
