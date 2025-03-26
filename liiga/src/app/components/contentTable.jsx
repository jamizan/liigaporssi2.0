"use client";

import { useEffect, useState } from 'react';


const contentTable = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('/playerStats.json')
        .then((res) => res.json())
        .then((data) => setPlayers(data));
    }, []);

    return(
    <table className="w-[60%] table-auto">
        <thead className="text-gray-300 text-s border-collapse text-center">
          <tr className="table-row">
            <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Hyökkääjät</th>
          </tr>
          <tr className="table-row bg-gray-200/5 border-b-4">
            <th className="table-cell">Nimi</th>
            <th className="table-cell">Joukkue</th>
            <th className="table-cell">Maalit</th>
            <th className="table-cell">Syötöt</th>
            <th className="table-cell">Rangaistukset</th>
            <th className="table-cell">Laukaukset</th>
            <th className="table-cell">Blockit</th>
            <th className='table-cell'>Aloitukset</th>
            <th className="table-cell">+/-</th>
            <th className='table-cell'>LPP</th>
          </tr>
        </thead>
        <tbody className='text-s border-collapse text-center'>
          {players
          .filter(player => player.position == 'RIGHT_WING' || player.position == 'CENTER' || player.position == 'LEFT_WING')
          .map((player, index)=>
          <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1]+'_'+player.lastname+'-'+player.firstname}>
            <td className="table-cell">{player.firstname} {player.lastname}</td>
            <td className="table-cell">{player.team.split(':')[1].toUpperCase()}</td>
            <td className="table-cell">{player.goals}</td>
            <td className="table-cell">{player.assists}</td>
            <td className="table-cell">{player.penaltyminutes}</td>
            <td className="table-cell">{player.shots}</td>
            <td className="table-cell">{player.blocks}</td>
            <td className='table-cell'>{player.faceoffs}</td>
            <td className="table-cell">{player.plusminus}</td>
            <td className="table-cell">{player.LPP}</td>
          </tr>
          )}
        </tbody>
        <thead className="text-gray-300 text-s border-collapse text-center">
          <tr className="table-row">
            <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Puolustajat</th>
          </tr>
          <tr className="table-row bg-gray-200/5 border-b-4">
            <th className="table-cell">Nimi</th>
            <th className="table-cell">Joukkue</th>
            <th className="table-cell">Maalit</th>
            <th className="table-cell">Syötöt</th>
            <th className="table-cell">Rangaistukset</th>
            <th className="table-cell">Laukaukset</th>
            <th className="table-cell">Blockit</th>
            <th className='table-cell'>Aloitukset</th>
            <th className="table-cell">+/-</th>
            <th className='table-cell'>LPP</th>
          </tr>
        </thead>
        <tbody className='text-s border-collapse text-center'>
          {players
          .filter(player => player.position == 'LEFT_DEFENSEMAN' || player.position == 'RIGHT_DEFENSEMAN')
          .map((player, index)=>
          <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1]+'_'+player.lastname+'-'+player.firstname}>
            <td className="table-cell">{player.firstname} {player.lastname}</td>
            <td className="table-cell">{player.team.split(':')[1].toUpperCase()}</td>
            <td className="table-cell">{player.goals}</td>
            <td className="table-cell">{player.assists}</td>
            <td className="table-cell">{player.penaltyminutes}</td>
            <td className="table-cell">{player.shots}</td>
            <td className="table-cell">{player.blocks}</td>
            <td className='table-cell'>{player.faceoffs}</td>
            <td className="table-cell">{player.plusminus}</td>
            <td className="table-cell">{player.LPP}</td>
          </tr>
          )}
        </tbody>
        <thead className="text-gray-300 text-s border-collapse text-center">
          <tr className="table-row">
            <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Maalivahdit</th>
          </tr>
          <tr className="table-row bg-gray-200/5 border-b-4">
            <th className="table-cell">Nimi</th>
            <th className="table-cell">Joukkue</th>
            <th className="table-cell">Maalit</th>
            <th className="table-cell">Syötöt</th>
            <th className="table-cell">Rangaistukset</th>
            <th className="table-cell">Torjunnat</th>
            <th className="table-cell">Päästetyt maalit</th>
            <th className='table-cell'>LPP</th>
          </tr>
        </thead>
        <tbody className='text-s border-collapse text-center'>
          {players
          .filter(player => player.position == 'GOALIE')
          .map((player, index)=>
          <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1]+'_'+player.lastname+'-'+player.firstname}>
            <td className="table-cell">{player.firstname} {player.lastname}</td>
            <td className="table-cell">{player.team.split(':')[1].toUpperCase()}</td>
            <td className="table-cell">{player.goals}</td>
            <td className="table-cell">{player.assists}</td>
            <td className="table-cell">{player.penaltyminutes}</td>
            <td className="table-cell">{player.saves}</td>
            <td className="table-cell">{player.goalsallowed}</td>
            <td className="table-cell">{player.LPP}</td>
          </tr>
          )}
        </tbody>
      </table>
    );
};

export default contentTable;