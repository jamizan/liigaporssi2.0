"use client";
import {  } from "react";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ExtraInfo from "@/app/components/ExtraInfo.jsx"

import ifk from "@/app/logos/ifk.png"
import hpk from "@/app/logos/hpk.png"
import ilves from '@/app/logos/ILVES.png'
import jukurit from "@/app/logos/jukurit.png"
import jyp from "@/app/logos/jyp.png"
import kalpa from "@/app/logos/kalpa.png"
import karpat from "@/app/logos/karpat.png"
import espoo from "@/app/logos/KESPOO.png"
import kookoo from "@/app/logos/kookoo.png"
import lukko from "@/app/logos/lukko.png"
import pelicans from "@/app/logos/pelicans.png"
import saipa from "@/app/logos/saipa.png"
import sport from "@/app/logos/sport.png"
import tappara from "@/app/logos/tappara.png"
import tps from "@/app/logos/tps.png"
import assat from "@/app/logos/assat.png"

import question from "@/app/logos/question.png"
import arrow from "@/app/logos/down.png"

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

export default function ContentTable({
  setImageSrc1, imageSrc1, 
  setImageSrc2, imageSrc2,
  setImageSrc3, imageSrc3,
  setImageSrc4, imageSrc4,
  setImageSrc5, imageSrc5,
  setImageSrc6, imageSrc6

}) {
  
  const [players, setPlayers] = useState([]);
  const [openPlayerInfo, setOpenPlayerInfo] = useState(null);

  useEffect(() => {
    fetch('/playerStats.json')
    .then((res) => res.json())
    .then((data) => setPlayers(data));
  }, []);


  const moveSelected = (player, team) => {
    // Handles player details for display
    switch (team) {
      case 'HIFK':
        var value = ifk;
        break;
      case 'HPK':
        var value = hpk;
        break;
      case 'ILVES':
        var value = ilves;
        break;
      case 'JUKURIT':
        var value = jukurit;
        break;
      case 'JYP':
        var value = jyp;
        break;
      case 'KALPA':
        var value = kalpa;
        break;
      case 'KÄRPÄT':
        var value = karpat;
        break;
      case 'K-ESPOO':
        var value = espoo;
        break;
      case 'KOOKOO':
        var value = kookoo;
        break;
      case 'LUKKO':
        var value = lukko;
        break;
      case 'PELICANS':
        var value = pelicans;
        break;
      case 'SAIPA':
        var value = saipa;
        break;
      case 'SPORT':
        var value = sport;
        break;
      case 'TAPPARA':
        var value = tappara;
        break;
      case 'TPS':
        var value = tps;
        break;
      case 'ÄSSÄT':
        var value = assat;
        break;
    
      default:
        var value = question;
        break;
    }
    var nameStr = player.lastname+' '+ player.firstname;
    
    var position = player.position;
    var playerPosition = '';

    switch (position) {
      case 'LEFT_WING':
         playerPosition = 'ATTACKER';
        break;
      case 'RIGHT_WING':
        playerPosition = 'ATTACKER';
        break;
      case 'CENTER':
        playerPosition = 'ATTACKER';
        break;
      case 'LEFT_DEFENSEMAN':
        playerPosition = 'DEFENDER';
        break;
      case 'RIGHT_DEFENSEMAN':
        playerPosition = 'DEFENDER';
        break;
      case 'GOALIE':
        playerPosition = 'GOALIE';
        break;

      default:
        playerPosition = '';
        break;
    }


    if (imageSrc1.p == '' && playerPosition == 'ATTACKER' &&
      imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
    ) {
      setImageSrc1({ ...imageSrc1, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
    }
    else{
      if (imageSrc2.p == '' && playerPosition == 'ATTACKER' &&
        imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
      ) {
        setImageSrc2({ ...imageSrc2, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
      }
      else{
        if (imageSrc3.p == '' && playerPosition == 'ATTACKER' &&
          imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
        ) {
          setImageSrc3({ ...imageSrc3, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
        }
        else{
          if (imageSrc4.p == '' && playerPosition == 'DEFENDER' &&
            imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
          ) {
            setImageSrc4({ ...imageSrc4, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
          }
          else{
            if (imageSrc5.p == '' && playerPosition == 'DEFENDER' &&
              imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
            ) {
              setImageSrc5({ ...imageSrc5, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
            }
            else{
              if (imageSrc6.p == '' && playerPosition == 'GOALIE' &&
                imageSrc6 != nameStr
              ) {
                setImageSrc6({ ...imageSrc6, src: value, nam: nameStr, p:'t', LPP: player.LPP, playerData: player });
              }
            }
          }
        }
      }
    }
  };

  return (

    <>
      <thead id="attacker-header" className="w-full text-gray-300 text-s border-collapse text-center">
        <tr id="bigHeader" className="table-row">
          <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl py-4">Hyökkääjät</th>
        </tr>
        <tr id="smallHeader" className="w-full table-row bg-gray-200/5 border-b-4">
          <th className="table-cell px-6 py-4">Nimi</th>
          <th className="table-cell px-6 py-4">Joukkue</th>
          <th className="table-cell px-4 py-2">M</th>
          <th className="table-cell px-4 py-2">S</th>
          <th className="table-cell px-4 py-2">R</th>
          <th className="table-cell px-4 py-2">L</th>
          <th className="table-cell px-4 py-2">B</th>
          <th className="table-cell px-4 py-2">A</th>
          <th className="table-cell px-4 py-2">+/-</th>
          <th className="table-cell px-4 py-2">LPP</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="attacker-body" className="text-s text-center">
          {players
            .filter(player => player.position == 'RIGHT_WING' || player.position == 'LEFT_WING' || player.position == 'CENTER')
            .map((player, index) => (
              <React.Fragment key={player.team + '_' + player.lastname + '-' + player.firstname}>
                <tr className="border-b-2 border-stone-600" id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
                  <td className="table-cell px-6 py-4">
                    <div className="text-left pl-3 gap-4 text-decoration-line: underline hover:text-gray-300/80">
                      <span
                        onClick={() =>
                          setOpenPlayerInfo(openPlayerInfo === player.id ? null : player.id)
                        }
                      >{player.firstname} {player.lastname}</span>
                    </div>
                  </td>
                  <td className="table-cell px-6 py-4">{player.team.split(':')[1].toUpperCase()}</td>
                  <td className="table-cell px-4 py-2">{player.goals}</td>
                  <td className="table-cell px-4 py-2">{player.assists}</td>
                  <td className="table-cell px-4 py-2">{player.penaltyminutes}</td>
                  <td className="table-cell px-4 py-2">{player.shots}</td>
                  <td className="table-cell px-4 py-2">{player.blocks}</td>
                  <td className="table-cell px-4 py-2">{player.faceoffs}</td>
                  <td className="table-cell px-4 py-2">{player.plusminus}</td>
                  <td className="table-cell px-4 py-2">{player.LPP}</td>
                  <td className="pt-2">
                    <button
                      title="Valitse"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                      onClick={() => moveSelected(player, player.team.split(':')[1].toUpperCase())}
                      id="selectPlayer"
                      disabled={false}
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
                {openPlayerInfo === player.id && (
                  <ExtraInfo player={player}/>
                )}
              </React.Fragment>
            ))}
        </tbody>
        
        <thead id="defender-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl py-4">Puolustajat</th>
          </tr>
          <tr id="smallHeader" className="table-row bg-gray-200/5 border-b-4">
            <th className="table-cell py-4">Nimi</th>
            <th className="table-cell py-4">Joukkue</th>
            <th className="table-cell py-2">M</th>
            <th className="table-cell py-2">S</th>
            <th className="table-cell py-2">R</th>
            <th className="table-cell py-2">L</th>
            <th className="table-cell py-2">B</th>
            <th className='table-cell py-2'>A</th>
            <th className="table-cell py-2">+/-</th>
            <th className='table-cell py-2'>LPP</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="defender-body" className="text-s border-collapse text-center">
          {players

            .filter(player => player.position == 'RIGHT_DEFENSEMAN' || player.position == 'LEFT_DEFENSEMAN')
            .map((player, index) => (
              <React.Fragment key={player.team + '_' + player.lastname + '-' + player.firstname}>
                <tr className="border-b-2 border-stone-600" id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
                  <td className="table-cell px-6 py-4">
                    <div className="text-left pl-3 gap-4 text-decoration-line: underline hover:text-gray-300/80">
                      <span
                        onClick={() =>
                          setOpenPlayerInfo(openPlayerInfo === player.id ? null : player.id)
                        }
                      >{player.firstname} {player.lastname}</span>
                    </div>
                  </td>
                  <td className="table-cell px-6 py-4">{player.team.split(':')[1].toUpperCase()}</td>
                  <td className="table-cell px-4 py-2">{player.goals}</td>
                  <td className="table-cell px-4 py-2">{player.assists}</td>
                  <td className="table-cell px-4 py-2">{player.penaltyminutes}</td>
                  <td className="table-cell px-4 py-2">{player.shots}</td>
                  <td className="table-cell px-4 py-2">{player.blocks}</td>
                  <td className="table-cell px-4 py-2">{player.faceoffs}</td>
                  <td className="table-cell px-4 py-2">{player.plusminus}</td>
                  <td className="table-cell px-4 py-2">{player.LPP}</td>
                  <td className="pt-2">
                    <button
                      title="Valitse"
                      className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                      onClick={() => moveSelected(player, player.team.split(':')[1].toUpperCase())}
                      id="selectPlayer"
                      disabled={false}
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
                {openPlayerInfo === player.id && (
                  <ExtraInfo player={player}/>
                )}
              </React.Fragment>
            ))}
        </tbody>
        <thead id="goalie-header" className="text-gray-300 text-s border-collapse text-center">
          <tr id="bigHeader" className="table-row">
            <th colSpan={11} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl py-4">Maalivahdit</th>
          </tr>
          <tr id="smallHeader" className="table-row bg-gray-200/5 border-b-4">
            <th className="table-cell py-4">Nimi</th>
            <th className="table-cell py-4">Joukkue</th>
            <th className="table-cell py-2">M</th>
            <th className="table-cell py-2">S</th>
            <th className="table-cell py-2">R</th>
            <th className="table-cell py-2">T</th>
            <th className="table-cell py-2">PM</th>
            <th className='table-cell py-2'>LPP</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody id="goalie-body" className='text-s border-collapse text-center'>
          {players
            .filter(player => player.position == 'GOALIE')
            .map((player, index) => <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
              <td className="table-cell py-4">
                <div className="text-left pl-3 gap-4 text-decoration-line: underline hover:text-gray-300/80">
                  <span
                    onClick={() =>
                      setOpenPlayerInfo(openPlayerInfo === player.id ? null : player.id)
                    }
                  >{player.firstname} {player.lastname}</span>
                </div>
              </td>
              <td className="table-cell py-4">{player.team.split(':')[1].toUpperCase()}</td>
              <td className="table-cell py-2">{player.goals}</td>
              <td className="table-cell py-2">{player.assists}</td>
              <td className="table-cell py-2">{player.penaltyminutes}</td>
              <td className="table-cell py-2">{player.saves}</td>
              <td className="table-cell py-2">{player.goalsallowed}</td>
              <td className="table-cell py-2">{player.LPP}</td>
              <td></td>
              <td></td>
              <td className="pt-2">
              <button
                  title="Valitse"
                  className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                  onClick={() => moveSelected(player, player.team.split(':')[1].toUpperCase())}
                  id="selectPlayer"
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