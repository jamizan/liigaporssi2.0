"use client"

import DefaultDisplay from "@/app/components/DefaultDisplay";

export default function SelectedTable({
    setImageSrc1, imageSrc1, 
    setImageSrc2, imageSrc2,
    setImageSrc3, imageSrc3,
    setImageSrc4, imageSrc4,
    setImageSrc5, imageSrc5,
    setImageSrc6, imageSrc6
}){
    

    return(
        <table className="text-center w-[100%]">
            <tbody>
                <tr>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-1">
                        <DefaultDisplay setImageSrc1={setImageSrc1} imageSrc1={imageSrc1} position={'Hyökkääjä'} team={imageSrc1.src} name={imageSrc1.nam} LPP={imageSrc1.LPP} value={'1'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-2">
                        <DefaultDisplay setImageSrc2={setImageSrc2} imageSrc2={imageSrc2} position={'Hyökkääjä'} team={imageSrc2.src} name={imageSrc2.nam} LPP={imageSrc2.LPP} value={'2'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-3">
                        <DefaultDisplay setImageSrc3={setImageSrc3} imageSrc3={imageSrc3} position={'Hyökkääjä'} team={imageSrc3.src} name={imageSrc3.nam} LPP={imageSrc3.LPP} value={'3'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-4">
                        <DefaultDisplay setImageSrc4={setImageSrc4} imageSrc4={imageSrc4} position={'Puolustaja'} team={imageSrc4.src} name={imageSrc4.nam} LPP={imageSrc4.LPP} value={'4'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-5">
                        <DefaultDisplay setImageSrc5={setImageSrc5} imageSrc5={imageSrc5} position={'Puolustaja'} team={imageSrc5.src} name={imageSrc5.nam} LPP={imageSrc5.LPP} value={'5'}/>
                    </td>
                    <td className="border-2 border-stone-600 w-[10%] relative bg-white" id="player-6">
                        <DefaultDisplay setImageSrc6={setImageSrc6} imageSrc6={imageSrc6} position={'Maalivahti'} team={imageSrc6.src} name={imageSrc6.nam} LPP={imageSrc6.LPP} value={'6'}/>
                    </td>
                </tr>
                <tr className="p-[50px]">
                    <td colSpan={6} className="text-center bg-zinc-900">
                        LPP: {imageSrc1.LPP + imageSrc2.LPP + imageSrc3.LPP + imageSrc4.LPP + imageSrc5.LPP + imageSrc6.LPP}
                    </td>
                </tr>
            </tbody>
        </table>
    );
    
}