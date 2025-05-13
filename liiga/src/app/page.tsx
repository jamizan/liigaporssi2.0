'use client';

import ToolBar from './components/ToolBar.jsx';
import ContentTable from '@/app/components/ContentTable.jsx';
import SelectedTable from '@/app/components/SelectedTable.jsx'
import SearchTable from '@/app/components/SearchTable.jsx';
import { useState } from 'react';

import question from "@/app/logos/QUESTION.png"


export default function Home() {

  const [imageSrc1, setImageSrc1] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: '',
    captainLPP: ''
    
  });
  const [imageSrc2, setImageSrc2] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: '',
    captainLPP: ''
  
  });
  const [imageSrc3, setImageSrc3] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: '',
    captainLPP: ''

  });
  const [imageSrc4, setImageSrc4] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: '',
    captainLPP: ''

  });
  const [imageSrc5, setImageSrc5] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: '',
    captainLPP: ''

  });
  const [imageSrc6, setImageSrc6] = useState({
    src: question,
    nam: '',
    p: '',
    LPP: ''

  });

  const [search, setSearch] = useState("")

  return (
  
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className='flex  justify-center w-[60%] h-[250px] ml-[20%]'>
      <SelectedTable
       setImageSrc1={setImageSrc1} imageSrc1={imageSrc1}
       setImageSrc2={setImageSrc2} imageSrc2={imageSrc2}
       setImageSrc3={setImageSrc3} imageSrc3={imageSrc3}
       setImageSrc4={setImageSrc4} imageSrc4={imageSrc4}
       setImageSrc5={setImageSrc5} imageSrc5={imageSrc5}
       setImageSrc6={setImageSrc6} imageSrc6={imageSrc6}
        />
    </div>
    <div className='w-full flex flex-col justify-center ml-[20%]' id='toolBar'>
      <ToolBar
        setSearch={setSearch} search={search}
      />
    </div>
    <div className='w-full flex flex-col justify-center ml-[20%]' id='searchTable'>
      <SearchTable
        setImageSrc1={setImageSrc1} imageSrc1={imageSrc1}
        setImageSrc2={setImageSrc2} imageSrc2={imageSrc2}
        setImageSrc3={setImageSrc3} imageSrc3={imageSrc3}
        setImageSrc4={setImageSrc4} imageSrc4={imageSrc4}
        setImageSrc5={setImageSrc5} imageSrc5={imageSrc5}
        setImageSrc6={setImageSrc6} imageSrc6={imageSrc6}
        setSearch={setSearch} search={search}
      />
    </div>
    <table id='content-table' className='table-auto w-[60%] ml-[20%] border-spacing-2'>
      <ContentTable
       setImageSrc1={setImageSrc1} imageSrc1={imageSrc1}
       setImageSrc2={setImageSrc2} imageSrc2={imageSrc2}
       setImageSrc3={setImageSrc3} imageSrc3={imageSrc3}
       setImageSrc4={setImageSrc4} imageSrc4={imageSrc4}
       setImageSrc5={setImageSrc5} imageSrc5={imageSrc5}
       setImageSrc6={setImageSrc6} imageSrc6={imageSrc6}
       />
    </table>

    </>
  );
}