
export default function Home() {
  return (
    <>
    <div className="header">
      <h1 className="text-gray-300 text-6xl text-center mt-10">LPP-Laskuri</h1>
    </div>
    <div className="mt-10 w-full flex justify-center">
      <table className="w-[60%] table-auto">
        <thead className="text-gray-300 text-s border-collapse text-center">
          <tr className="table-row">
            <th colSpan={8} className="table-cell row-span-full bg-gray-200/10 flex-full text-xl">Hyökkääjät</th>
          </tr>
          <tr className="table-row bg-gray-200/5">
            <th className="table-cell">Nimi</th>
            <th className="table-cell">Joukkue</th>
            <th className="table-cell">Maalit</th>
            <th className="table-cell">Syötöt</th>
            <th className="table-cell">Rangaistukset</th>
            <th className="table-cell">Laukaukset</th>
            <th className="table-cell">Blockit</th>
            <th className="table-cell">+/-</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
      </>
  );
}
