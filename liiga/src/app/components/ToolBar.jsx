"use client";

import React, { useState, Children } from 'react';

import { TableVisibilty } from '@/app/components/ContentTable';
import { TeamSelect } from '@/app/components/ContentTable';

export default function ToolBar(
    { setSearch, search })
 
    {
    const [position, setPosition] = useState("position")
    const [team, setTeam] = useState("team")
  return (
    <>
    
    <table className='grid w-[60%] border-separate border-spacing-2'>
          <thead className='bg-slate-300/90'>
              <tr className='table-row'>
                  <th className='relative table-cell text-stone-900 w-40 pl-5 py-1'>
                      <div className='relative flex items-center gap-2'>
                          <input
                              className='p-2 border-2 border-stone-800 bg-stone-400/50 pr-8'
                              type="search"
                              name="searchField"
                              id="searchField"
                              placeholder='Hae pelaajaa'
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              autoComplete="off"
                          />
                          {search && (
                              <button
                                  type="button"
                                  className="absolute right-2 text-gray-500 hover:text-red-600 focus:outline-none"
                                  onClick={() => setSearch("")}
                                  tabIndex={-1}
                                  aria-label="Tyhjennä haku"
                              >
                                  &#10005;
                              </button>
                          )}
                      </div>
                  </th>
                  <th className='table-cell text-gray-400'>
                      <select className='bg-stone-800 p-3 hover:bg-stone-800/50 cursor-pointer' name="pelipaikka" id="position"
                          value={position} onChange={(e) => {
                              setPosition(e.target.value);
                              TableVisibilty(e.target.value);

                          } }
                      >
                          <option className='bg-stone-800' value="ALL" defaultValue={Children}>Kaikki</option>
                          <option className='bg-stone-800' value="ATTACKER">Hyökkääjä</option>
                          <option className='bg-stone-800' value="DEFENDER">Puolustaja</option>
                          <option className='bg-stone-800' value="GOALIE">Maalivahti</option>
                      </select>
                  </th>
                  <th className='table-cell text-gray-400'>
                      <select className='bg-stone-800 p-3 hover:bg-stone-800/50 cursor-pointer' name="Joukkue" id="team"
                          value={team} onChange={(e) => {
                            setTeam(e.target.value);
                            TeamSelect(e.target.value)
                          } }
                      >
                        <option className='bg-stone-800' value="ALL" defaultValue={Children}>Kaikki</option>
                        <option className='bg-stone-800' value="HIFK">HIFK</option>
                        <option className='bg-stone-800' value="HPK">HPK</option>
                        <option className='bg-stone-800' value="ILVES">ILVES</option>
                        <option className='bg-stone-800' value="JUKURIT">JUKURIT</option>
                        <option className='bg-stone-800' value="JYP">JYP</option>
                        <option className='bg-stone-800' value="KALPA">KALPA</option>
                        <option className='bg-stone-800' value="K-ESPOO">K-ESPOO</option>
                        <option className='bg-stone-800' value="KOOKOO">KOOKOO</option>
                        <option className='bg-stone-800' value="KÄRPÄT">KÄRPÄT</option>
                        <option className='bg-stone-800' value="LUKKO">LUKKO</option>
                        <option className='bg-stone-800' value="PELICANS">PELICANS</option>
                        <option className='bg-stone-800' value="SAIPA">SAIPA</option>
                        <option className='bg-stone-800' value="SPORT">SPORT</option>
                        <option className='bg-stone-800' value="TAPPARA">TAPPARA</option>
                        <option className='bg-stone-800' value="TPS">TPS</option>
                        <option className='bg-stone-800' value="ÄSSÄT">ÄSSÄT</option>
                      </select>
                  </th>
              </tr>
          </thead>


    </table>

      
      </>
  );
}