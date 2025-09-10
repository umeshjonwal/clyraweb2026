export default function ResponsiveTable({ columns = [], rows = [] }){
  return (
    <div className="table-wrap">
      {/* Table for md+ */}
      <table className="table">
        <thead>
          <tr>{columns.map((c,i)=>(<th key={i}>{c}</th>))}</tr>
        </thead>
        <tbody>
          {rows.map((r,ri)=>(
            <tr key={ri}>
              {r.map((cell,ci)=>(<td key={ci}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Cards for mobile */}
      <div className="table-cards">
        {rows.map((r,ri)=>(
          <dl key={ri} className="table-card">
            {r.map((cell,ci)=>(
              <div key={ci} className="mb-2">
                <dt>{columns[ci]}</dt>
                <dd>{cell}</dd>
              </div>
            ))}
          </dl>
        ))}
      </div>
    </div>
  )
}
