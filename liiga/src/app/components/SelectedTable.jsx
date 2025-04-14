"use client"

import DefaultDisplay from "@/app/components/DefaultDisplay";
import question from "@/app/logos/question.png"

export default function SelectedTable({
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    imageSrc6
}){
    

    return(
        <table className="text-center h-full p-px">
            <tbody>
                <tr>

                    <td className="border-2 h-full" id="player-1">
                        <DefaultDisplay position={'Hyökkääjä'} team={imageSrc1.src} name={imageSrc1.nam} LPP={imageSrc1.LPP}/>

                    </td>
                    <td className="border-2 h-full" id="player-2">
                        <DefaultDisplay position={'Hyökkääjä'} team={imageSrc2.src} name={imageSrc2.nam} LPP={imageSrc2.LPP}/>

                    </td>
                    <td className="border-2 h-full" id="player-3">
                        <DefaultDisplay position={'Hyökkääjä'} team={imageSrc3.src} name={imageSrc3.nam} LPP={imageSrc3.LPP}/>

                    </td>
                    <td className="border-2 h-full" id="player-4">
                        <DefaultDisplay position={'Puolustaja'} team={imageSrc4.src} name={imageSrc4.nam} LPP={imageSrc4.LPP}/>

                    </td>
                    <td className="border-2 h-full" id="player-5">
                        <DefaultDisplay position={'Puolustaja'} team={imageSrc5.src} name={imageSrc5.nam} LPP={imageSrc5.LPP}/>

                    </td>
                    <td className="border-2 h-full" id="player-6">
                        <DefaultDisplay position={'Maalivahti'} team={imageSrc6.src} name={imageSrc6.nam} LPP={imageSrc6.LPP}/>

                    </td>
                </tr>
                <tr className="p-[50px]">
                    <td colSpan={6} className="text-center">
                        LPP: {imageSrc1.LPP + imageSrc2.LPP + imageSrc3.LPP + imageSrc4.LPP + imageSrc5.LPP + imageSrc6.LPP}
                    </td>
                </tr>
            </tbody>
        </table>
    );
    
}