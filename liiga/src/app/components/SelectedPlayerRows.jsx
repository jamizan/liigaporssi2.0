"use client"

import React, {useState} from "react";
import ExtraInfo from "@/app/components/ExtraInfo";
import question from '@/app/logos/question.png'

export default function SelectedPlayerRows({value,
    imageSrc,
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6,
    openPlayerInfo, setOpenPlayerInfo
}){

    function deleteSelected(value){
        switch (value) {
            case '1':
                setImageSrc1({ ...imageSrc1, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                
                break;
            case '2':
                setImageSrc2({ ...imageSrc2, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                
                break;
            case '3':
                setImageSrc3({ ...imageSrc3, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                break;
            case '4':
                setImageSrc4({ ...imageSrc4, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                break;
            case '5':
                setImageSrc5({ ...imageSrc5, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                break;
            case '6':
                setImageSrc6({ ...imageSrc6, src: question, nam: '\u200B', p:'', LPP: '\u200B', playerData: [] })
                break;
        
            default:
                break;
        }
    }


    
    return(
    <>
            <tr className="border-b-2 border-stone-600">
                <td className="table-cell px-6 py-4">
                    <div className="text-left pl-3 gap-4 text-decoration-line: underline hover:text-gray-300/80">
                      <span
                        onClick={() =>
                          setOpenPlayerInfo(openPlayerInfo === imageSrc.playerData.id ? null : imageSrc.playerData.id)
                        }
                      >{imageSrc.nam}
                      </span>
                    </div>
                </td>
                <td className="table-cell px-6 py-4">
                    {imageSrc.playerData?.teamname || ""}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.goals}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.assists}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.penaltyminutes}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.shots || imageSrc.playerData.saves || 0}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.blocks || imageSrc.playerData.goalsallowed || 0}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.faceoffs}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.playerData.plusminus}
                </td>
                <td className="table-cell px-4 py-2">
                    {imageSrc.lpp}
                </td>
                <td>
                    <button
                    title="Valitse"
                    className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                    onClick={ () => deleteSelected(value)}
                    id="selectPlayer"
                    disabled={false}
                    >
                    <svg className="w-[20px] h-[20px] text-gray-800 dark:text-white stroke-zinc-400" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <path stroke="currentColor" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    </button>

                </td>

            </tr>
            {openPlayerInfo === imageSrc.playerData.id && (
                <ExtraInfo player={imageSrc.playerData}/>
            )}
        </>
    );

}
