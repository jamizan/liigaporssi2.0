"use client";
import {  } from "react";
import React, { useEffect, useState } from 'react';
import SelectedTable from "./SelectedTable";

export function TableVisibilty(position) {
  const attackerHeader = document.getElementById('attacker-header');
  const attackerBody = document.getElementById('attacker-body');
  const defenderHeader = document.getElementById('defender-header');
  const defenderBody = document.getElementById('defender-body');
  const goalieHeader = document.getElementById('goalie-header');
  const goalieBody = document.getElementById('goalie-body');
  
  if (position == 'ATTACKER') {
    attackerHeader.style.display = '';
    attackerBody.style.display = '';
    defenderHeader.style.display = 'none';
    defenderBody.style.display = 'none';
    goalieHeader.style.display = 'none';
    goalieBody.style.display = 'none';
  }
  if (position == 'DEFENDER') {
    attackerHeader.style.display = 'none';
    attackerBody.style.display = 'none';
    defenderHeader.style.display = '';
    defenderBody.style.display = '';
    goalieHeader.style.display = 'none';
    goalieBody.style.display = 'none';
  }
  if (position == 'GOALIE') {
    attackerHeader.style.display = 'none';
    attackerBody.style.display = 'none';
    defenderHeader.style.display = 'none';
    defenderBody.style.display = 'none';
    goalieHeader.style.display = '';
    goalieBody.style.display = '';
  }
  if (position == 'ALL') {
    attackerHeader.style.display = '';
    attackerBody.style.display = '';
    defenderHeader.style.display = '';
    defenderBody.style.display = '';
    goalieHeader.style.display = '';
    goalieBody.style.display = '';
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
        rowElements[index].style.display = ''
      }
    }
  }  
}
export function addRemove(){
  SelectedTable()
  
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
          <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Hyökkääjät</th>
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
          <th></th>
        </tr>
      </thead>
      <tbody id="attacker-body" className='text-s text-center'>
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
              <td className="pt-2">
                <button
                  title="Valitse"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                  onClick={addRemove}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      strokeWidth="1.5"
                    ></path>
                    <path d="M8 12H16" strokeWidth="1.5"></path>
                    <path d="M12 16V8" strokeWidth="1.5"></path>
                  </svg>
                </button>
              </td>
            </tr>
            )}
        </tbody>
        
        <thead id="defender-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Puolustajat</th>
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
            <th></th>
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
              <td className="pt-2">
                <button
                  title="Valitse"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      strokeWidth="1.5"
                    ></path>
                    <path d="M8 12H16" strokeWidth="1.5"></path>
                    <path d="M12 16V8" strokeWidth="1.5"></path>
                  </svg>
                </button>
              </td>
            </tr>
            )}
        </tbody>
        <thead id="goalie-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Maalivahdit</th>
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
            <th></th>
            <th></th>
            <th></th>
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
              <td></td>
              <td></td>
              <td className="pt-2">
                <button
                  title="Valitse"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      strokeWidth="1.5"
                    ></path>
                    <path d="M8 12H16" strokeWidth="1.5"></path>
                    <path d="M12 16V8" strokeWidth="1.5"></path>
                  </svg>
                </button>
              </td>
            </tr>
            )}
        </tbody>
    
    </>

  );
}
