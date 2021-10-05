import React from "react";
import PlayerForm from "./PlayerForm";

export default function TeamForm({
  showForm,
  cancelForm,
  datachange,
  formData,
  formDataSubmit,
  playersdataChange,
}) {
  const showHide = showForm ? "none" : "block";
  return (
    <form
      style={{ display: showHide }}
      className="mt-3"
      onSubmit={formDataSubmit}>
      <h3 className="mb-3">Cricket Team</h3>
      <div className="input-div">
        <input
          type="text"
          name="teamCity"
          className="form-control w-50 float-start"
          placeholder="Team City"
          value={formData.teamCity}
          onChange={datachange}
        />
        <input
          type="text"
          name="teamName"
          className="form-control w-50"
          placeholder="Team Name"
          value={formData.teamName}
          onChange={datachange}
        />
        <PlayerForm formData={formData} playersdataChange={playersdataChange} />
      </div>
      <div className="btn-div">
        <button className="btn btn-cancel" onClick={cancelForm}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}
