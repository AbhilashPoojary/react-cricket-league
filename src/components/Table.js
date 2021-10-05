import React from "react";

export default function Table({ showForm, teamdata }) {
  const showHide = showForm ? "block" : "none";
  const tBodyData = teamdata.map((data) => {
    return (
      <tr key={data.id}>
        {data.players.map((playersData) => {
          return (
            <>
              <td key={playersData.id + 1}>{playersData.name}</td>
              <td key={playersData.id + 2}>{playersData.number}</td>
              <td key={playersData.id + 3}>{playersData.key}</td>
            </>
          );
        })}
      </tr>
    );
    console.log(tBodyData);
  });
  return (
    <div className="table-responsive mt-3" style={{ display: showHide }}>
      <table className="table">
        <thead>
          <tr>
            <th>Player</th>
            <th>Team</th>
            <th>Number</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {teamdata?.length == 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                nodata
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
    </div>
  );
}
