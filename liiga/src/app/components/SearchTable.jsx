"use client"

import React, { useState, useEffect } from 'react';

import ifk from "@/app/logos/IFK.png"
import hpk from "@/app/logos/HPK.png"
import ilves from '@/app/logos/ILVES.png'
import jukurit from "@/app/logos/JUKURIT.png"
import jyp from "@/app/logos/JYP.png"
import kalpa from "@/app/logos/KALPA.png"
import karpat from "@/app/logos/KARPAT.png"
import espoo from "@/app/logos/KESPOO.png"
import kookoo from "@/app/logos/KOOKOO.png"
import lukko from "@/app/logos/LUKKO.png"
import pelicans from "@/app/logos/PELICANS.png"
import saipa from "@/app/logos/SAIPA.png"
import sport from "@/app/logos/SPORT.png"
import tappara from "@/app/logos/TAPPARA.png"
import tps from "@/app/logos/TPS.png"
import question from "@/app/logos/QUESTION.png"

export default function SearchTable({ 
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6,
    setSearch, search }) {
  
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('/playerStats.json')
        .then((res) => res.json())
        .then((data) => setPlayers(data));
    }, []);

    const moveSelected = (player, team) => {
    // Handles player details for display
    switch (team) {
      case 'IFK':
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
      case 'KARPAT':
        var value = karpat;
        break;
      case 'ESPOO':
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
    
      default:
        var value = question;
        break;
    }
    var nameStr = player.lastname+' '+ player.firstname;
    

    if (imageSrc1.p == '' && player.position == 'ATTACKER' &&
      imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
    ) {
      setImageSrc1({ ...imageSrc1, src: value, nam: nameStr, p:'t', LPP: player.LPP });
      
    }
    else{
      if (imageSrc2.p == '' && player.position == 'ATTACKER' &&
        imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
      ) {
        setImageSrc2({ ...imageSrc2, src: value, nam: nameStr, p:'t', LPP: player.LPP });
      }
      else{
        if (imageSrc3.p == '' && player.position == 'ATTACKER' &&
          imageSrc1.nam != nameStr && imageSrc2.nam != nameStr && imageSrc3.nam != nameStr
        ) {
          setImageSrc3({ ...imageSrc3, src: value, nam: nameStr, p:'t', LPP: player.LPP });
        }
        else{
          if (imageSrc4.p == '' && player.position == 'DEFENDER' &&
            imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
          ) {
            setImageSrc4({ ...imageSrc4, src: value, nam: nameStr, p:'t', LPP: player.LPP });
          }
          else{
            if (imageSrc5.p == '' && player.position == 'DEFENDER' &&
              imageSrc4.nam != nameStr && imageSrc5.nam != nameStr
            ) {
              setImageSrc5({ ...imageSrc5, src: value, nam: nameStr, p:'t', LPP: player.LPP });
            }
            else{
              if (imageSrc6.p == '' && player.position == 'GOALIE' &&
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
    
  } else{
  return (
    <div>
        <table className='absolute z-50 ml-2 w-65 bg-stone-800 border-2 border-stone-600'>
            <tbody className='w-full'>
                {players
            .filter(player => player.lastname.toLowerCase().includes(search.toLowerCase()) || player.firstname.toLowerCase().includes(search.toLowerCase()))
            
            .map((player, index) => <tr key={index} className='border-b-2 border-stone-600' id={player.team.split(':')[1] + '_' + player.lastname + '-' + player.firstname}>
                    <td className="table-cell w-full pl-2">{player.firstname} {player.lastname}</td>
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
                )}
            </tbody>
        </table>
    </div>
  );
}
    }