import React from "react";
import data from "../data";

export default function Form({
  handleSubmit,
  handleChange,
  showForm,
  teamdata,
  team,
}) {
  const showHide = showForm ? "block" : "none";
  const btnName = team.selectedTeam === "team" ? "Add team" : "Edit team";
  console.log(team.selectedTeam);
  return (
    <form
      className="text-center mt-2"
      onSubmit={handleSubmit}
      style={{ display: showHide }}>
      <select className="form-select me-2" onChange={handleChange}>
        <option value="team">Team</option>
        {teamdata?.map((data) => {
          return (
            <option key={data.teamName} value={data.teamName}>
              {data.teamName}
            </option>
          );
        })}
      </select>
      <button className="btn btn-primary">{btnName}</button>
    </form>
  );
}
