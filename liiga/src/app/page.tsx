'use client';

import { useEffect, useState } from 'react';
import ToolBar from './components/ToolBar.jsx';
import ContentTable from '@/app/components/ContentTable.jsx';


export default function Home() {

  return (
  
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className='w-full flex flex-col justify-center' id='toolBar'>
      {ToolBar()}
    </div>
    <table id='content-table' className='w-[60%] border-separate border-spacing-2'>
      <ContentTable />
    </table>
    </>
  );
}