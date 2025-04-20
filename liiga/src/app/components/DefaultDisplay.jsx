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



    function deleteSelected(value){
        switch (value) {
            case '1':
                setImageSrc1({ ...imageSrc1, src: question, nam: '', p:'', LPP: '' })
                
                break;
            case '2':
                setImageSrc2({ ...imageSrc2, src: question, nam: '', p:'', LPP: '' })
                
                break;
            case '3':
                setImageSrc3({ ...imageSrc3, src: question, nam: '', p:'', LPP: '' })
                break;
            case '4':
                setImageSrc4({ ...imageSrc4, src: question, nam: '', p:'', LPP: '' })                
                break;
            case '5':
                setImageSrc5({ ...imageSrc5, src: question, nam: '', p:'', LPP: '' })
                break;
            case '6':
                setImageSrc6({ ...imageSrc6, src: question, nam: '', p:'', LPP: '' })
                break;
        
            default:
                break;
        }
        
        
    }


    return(

        <>
        <div className="w-[100%] border-2">
            <button
                title="Vaihda"
                className="cursor-pointer"
                onClick={ () => deleteSelected(value) }
            >
                Vaihda
            </button>
        </div>
        <div id="player-name">
            {name}
        </div>
        <div className="text-center ml-[10%]">
            <Image height={''} width={80} id="playerImage" src={team} alt="react"/>
        </div>

        <div>
            {LPP}
        </div>
        <div className="w-[100%] border-2 relative bottom-0" id="player-captain">
            Kapteeniksi
        </div>
        
        
            
            </>
    );
};