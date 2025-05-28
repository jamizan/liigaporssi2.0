"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

export default function SearchTable({ 
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6,
    setSearch, search,
  }) {
  
    const [players, setPlayers] = useState([]);

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
      setImageSrc1({ ...imageSrc1, src: value, nam: nameStr, p:'t', LPP: player.LPP });
      
    }
    else{
      if (imageSrc2.p == '' && playerPosition == 'ATTACKER' &&
        imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
      ) {
        setImageSrc2({ ...imageSrc2, src: value, nam: nameStr, p:'t', LPP: player.LPP });
      }
      else{
        if (imageSrc3.p == '' && playerPosition == 'ATTACKER' &&
          imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
        ) {
          setImageSrc3({ ...imageSrc3, src: value, nam: nameStr, p:'t', LPP: player.LPP });
        }
        else{
          if (imageSrc4.p == '' && playerPosition == 'DEFENDER' &&
            imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
          ) {
            setImageSrc4({ ...imageSrc4, src: value, nam: nameStr, p:'t', LPP: player.LPP });
          }
          else{
            if (imageSrc5.p == '' && playerPosition == 'DEFENDER' &&
              imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
            ) {
              setImageSrc5({ ...imageSrc5, src: value, nam: nameStr, p:'t', LPP: player.LPP });
            }
            else{
              if (imageSrc6.p == '' && playerPosition == 'GOALIE' &&
                imageSrc6 != nameStr
              ) {
                setImageSrc6({ ...imageSrc6, src: value, nam: nameStr, p:'t', LPP: player.LPP });
              }
            }
          }
        }
      }
    }
  };

  if (search == '') {

  } else {
    const teamLogos = {
      IFK: ifk,
      HPK: hpk,
      ILVES: ilves,
      JUKURIT: jukurit,
      JYP: jyp,
      KALPA: kalpa,
      KARPAT: karpat,
      ESPOO: espoo,
      KOOKOO: kookoo,
      LUKKO: lukko,
      PELICANS: pelicans,
      SAIPA: saipa,
      SPORT: sport,
      TAPPARA: tappara,
      TPS: tps,
    };

    return (
      <div>
        <table className='table-auto absolute z-50 ml-2 bg-stone-800 border-2 border-stone-600 border-spacing-2'>
          <thead>
            <tr className='border-b-2 border-stone-600 justify-content-center'>
              <th colSpan={2} className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>Nimi</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>M</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>S</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>R</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>L</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>T</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>A</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>+/-</th>
              <th className='px-2 py-1 bg-stone-800 text-stone-400 border-stone-600 whitespace-nowrap'>LPP</th>
              <th className='px-2 py-1 bg-stone-800 border-stone-600'></th>
            </tr>
          </thead>
          <tbody>
            {players
              .filter(player => player.lastname.toLowerCase().includes(search.toLowerCase()) || player.firstname.toLowerCase().includes(search.toLowerCase()))
              .map((player, index) => (
                <tr key={index} className='border-b-2 border-stone-600 justify-content-center'>
                  <td>
                    <Image
                      height={''}
                      width={40}
                      id="playerImage"
                      src={teamLogos[player.team.split(':')[1]?.toUpperCase()] || question}
                      alt="team"
                    />
                  </td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.firstname} {player.lastname}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.goals}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.assists}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.penaltyminutes}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.shots}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.blocks}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.faceoffs}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.plusminus}</td>
                  <td className="table-cell px-2 whitespace-nowrap">{player.LPP}</td>
                  <td className="pt-2 pr-2">
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
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}