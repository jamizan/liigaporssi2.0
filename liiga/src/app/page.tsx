'use client';

import ToolBar from './components/ToolBar.jsx';
import ContentTable from '@/app/components/ContentTable.jsx';
import SelectedTable from '@/app/components/SelectedTable.jsx'
import { useState } from 'react';


import question from "@/app/logos/question.png"


export default function Home() {

  const [imageSrc, setImageSrc] = useState(question);

  return (
  
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className='flex flex-col justify-center w-[60%] h-[200px] ml-[20%] bg-sky-900'>
      <SelectedTable imageSrc={imageSrc}/>
    </div>
    <div className='w-full flex flex-col justify-center ml-[20%]' id='toolBar'>
      {ToolBar()}
    </div>
    <table id='content-table' className='table-auto w-[60%] ml-[20%] border-spacing-2'>
      <ContentTable setImageSrc={setImageSrc}/>
    </table>
    </>
  );
}