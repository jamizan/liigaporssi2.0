'use client';

import { useEffect, useState } from 'react';
import toolBar from './components/toolBar.jsx';
import contentTable from './components/contentTable.jsx';


export default function Home() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/playerStats.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className='w-full flex justify-center' id='toolBar'>
      {toolBar()}
    </div>
    <div className=" w-full flex justify-center">
      {contentTable()}  
    </div>
    </>
  );
}