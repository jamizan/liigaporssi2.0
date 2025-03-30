"use client";
import {  } from "react";
import React, { useEffect, useState } from 'react';

export function TableVisibilty(position) {
  const attackerHeader = document.getElementById('attacker-header');
  const attackerBody = document.getElementById('attacker-body');
  const defenderHeader = document.getElementById('defender-header');
  const defenderBody = document.getElementById('defender-body');
  const goalieHeader = document.getElementById('goalie-header');
  const goalieBody = document.getElementById('goalie-body');
  
  if (position == 'ATTACKER') {
    attackerHeader.style.tableLayout = 'table';
    attackerBody.style.display = 'table';
    defenderHeader.style.display = 'none';
    defenderBody.style.display = 'none';
    goalieHeader.style.display = 'none';
    goalieBody.style.display = 'none';
  }
  if (position == 'DEFENDER') {
    attackerHeader.style.display = 'none';
    attackerBody.style.display = 'none';
    defenderHeader.style.display = 'table';
    defenderBody.style.display = 'table';
    goalieHeader.style.display = 'none';
    goalieBody.style.display = 'none';
  }
  if (position == 'GOALIE') {
    attackerHeader.style.display = 'none';
    attackerBody.style.display = 'none';
    defenderHeader.style.display = 'none';
    defenderBody.style.display = 'none';
    goalieHeader.style.display = 'table';
    goalieBody.style.display = 'table';
  }
  if (position == 'ALL') {
    attackerHeader.style.display = 'table';
    attackerBody.style.display = 'table';
    defenderHeader.style.display = 'table';
    defenderBody.style.display = 'table';
    goalieHeader.style.display = 'table';
    goalieBody.style.display = 'table';
  }
  
}

export function TeamSelect(team) {
  const playerTable = document.getElementById('content-table');
  const rowElements = playerTable.querySelectorAll('tr');
    
  for (let index = 0; index < rowElements.length; index++) {
    if (rowElements[index].id != 'bigHeader' && rowElements[index].id != 'smallHeader') {
      const rowTeam = rowElements[index].id.split('_')[0].toUpperCase();
      if (rowTeam != team && team != 'ALL') {
        rowElements[index].style.display = 'none'
      }
      else{
        rowElements[index].style.display = 'block'
      }
    }
  }  
}

export default function ContentTable() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/playerStats.json')
    .then((res) => res.json())
    .then((data) => setPlayers(data));
  }, []);

  return (

    <>
      <thead id="attacker-header" className="w-[100] text-gray-300 text-s border-collapse text-center">
        <tr id="bigHeader" className="table-row">
          <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Hyökkääjät</th>
        </tr>
        <tr id="smallHeader" className="w-[100] table-row bg-gray-200/5 border-b-4">
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
      <tbody id="attacker-body" className='text-s border-collapse text-center'>
          {players
            .filter(player => player.position == 'ATTACKER')
            .map((player, index) => <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
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
        
        <thead id="defender-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Puolustajat</th>
          </tr>
          <tr id="smallHeader" className="table-row bg-gray-200/5 border-b-4">
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
        <tbody id="defender-body" className='text-s border-collapse text-center'>
          {players

            .filter(player => player.position == 'DEFENDER')
            .map((player, index) => <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
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
        <thead id="goalie-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={10} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Maalivahdit</th>
          </tr>
          <tr id="smallHeader" className="table-row bg-gray-200/5 border-b-4">
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
        <tbody id="goalie-body" className='text-s border-collapse text-center'>
          {players
            .filter(player => player.position == 'GOALIE')
            .map((player, index) => <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
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
    
    </>

  );
}
