import React from "react";

export default function PlayerForm({ formData, playersDataChange }) {
  return (
    <div className="player-form">
      <input
        type="text"
        placeholder="Player Name"
        name="name"
        className="form-control float-start w-33"
        value={formData?.players[0]?.name}
        onChange={playersDataChange}
      />
      <input
        type="number"
        placeholder="Number"
        name="number"
        className="form-control float-start w-33"
        value={formData?.players[0]?.number}
        onChange={playersDataChange}
      />
      <select
        className="form-select float-start w-33"
        dataChange={playersDataChange}
        name="type">
        <option value=""></option>
        <option name="" value="Batsman">
          Batsman
        </option>
        <option value="Bowler">Bowler</option>
        <option value="All rounder">All rounder</option>
        <option value="Captain">Captain</option>
        <option value="Wicket Keeper">Wicket Keeper</option>
      </select>
      <span className="clearfix"></span>
      <div className="btn-parent text-center mt-3">
        <button className="btn btn-addplayer">ADD PLAYER</button>
      </div>
    </div>
  );
}
