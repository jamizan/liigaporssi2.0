'use client';

import { useEffect, useState } from 'react';
import ToolBar from './components/ToolBar.jsx';
import ContentTable from '@/app/components/ContentTable.jsx';
import SelectedTable from '@/app/components/SelectedTable.jsx'


export default function Home() {

  return (
  
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className='flex flex-col justify-center w-[60%] h-[100px] ml-[20%] bg-sky-900'>
      <SelectedTable />
    </div>
    <div className='w-full flex flex-col justify-center ml-[20%]' id='toolBar'>
      {ToolBar()}
    </div>
    <table id='content-table' className='table-auto w-[60%] ml-[20%] border-spacing-2'>
      <ContentTable />
    </table>
    </>
  );
}