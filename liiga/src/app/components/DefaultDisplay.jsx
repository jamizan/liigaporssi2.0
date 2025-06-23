"use client"

import React from "react";
import Image from "next/image";
import question from '@/app/logos/question.png'


export default function DefaultDisplay({team, name, LPP, value,
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6

}){
    function makeCaptain( value, LPP ){
        switch (value) {
            case '1':
                points = imageSrc1.captainLPP;
            break;
            case '2':
                setImageSrc2({ ...imageSrc2, LPP: newLPP })
            break;
            case '3':
                setImageSrc3({ ...imageSrc3, LPP: newLPP })
            break;
            case '4':
                setImageSrc4({ ...imageSrc4, LPP: newLPP })
            break;
            case '5':
                setImageSrc5({ ...imageSrc5, LPP: newLPP })
            break;
            case '6':
                setImageSrc6({ ...imageSrc6, LPP: newLPP })
            break;
        
            default:
                let points = LPP
                break;
        }
    }

    function deleteSelected(value){
        switch (value) {
            case '1':
                setImageSrc1({ ...imageSrc1, src: question, nam: '\u200B', p:'', LPP: '\u200B' })
                
                break;
            case '2':
                setImageSrc2({ ...imageSrc2, src: question, nam: '\u200B', p:'', LPP: '\u200B' })
                
                break;
            case '3':
                setImageSrc3({ ...imageSrc3, src: question, nam: '\u200B', p:'', LPP: '\u200B' })
                break;
            case '4':
                setImageSrc4({ ...imageSrc4, src: question, nam: '\u200B', p:'', LPP: '\u200B' })                
                break;
            case '5':
                setImageSrc5({ ...imageSrc5, src: question, nam: '\u200B', p:'', LPP: '\u200B' })
                break;
            case '6':
                setImageSrc6({ ...imageSrc6, src: question, nam: '\u200B', p:'', LPP: '\u200B' })
                break;
        
            default:
                break;
        }
    }

    return(

        <>

        <div id="player-name" className="bg-stone-800 h-[24]">
            {name}
        </div>
        <div className="text-center flex items-center justify-center">
            <Image height={''} width={80} id="playerImage" src={team} alt="team"/>
        </div>
        <div className="text-zinc-900" aria-placeholder="&#8203;">
            {LPP}
        </div>
        <div className="flex">
            <div className="w-[100%] top-0 bg-stone-800 hover:bg-stone-800/50 cursor-pointer" 
                onClick={ () => deleteSelected(value) }>
                <button
                    title="Vaihda"
                    className="cursor-pointer"
                >
                    Poista
                </button>
            </div>
            <div className="w-[100%] bottom-0 inset-x-0 bg-stone-800 hover:bg-stone-800/50 cursor-pointer" 
                onClick={ () => makeCaptain(value, LPP) }>
                <button
                    title="Kapteeni"
                    id="captain-button"
                    className="cursor-pointer w-full h-[24]"
                    
                >
                    Kapteeni
                </button>
            </div>
            
        </div>
        
        
            
            </>
    );
};