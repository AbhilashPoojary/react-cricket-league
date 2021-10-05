import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";
import TeamForm from "./TeamForm";
import data from "../data";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  const initailState = {
    id: uuidv4(),
    teamCity: "",
    teamName: "",
    players: [],
  };

  const [teamdata, setTeamdata] = useState(data);
  const [formData, setFormData] = useState(initailState);
  const [showForm, setShowForm] = useState(true);
  const [team, setTeam] = useState({ selectedTeam: "team" });
  const handleChange = (e) => {
    setTeam({
      selectedTeam: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
    if (team.selectedTeam === "team") {
    }
  };
  const cancelForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };
  const datachange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formDataSubmit = (e) => {
    e.preventDefault();
    setTeamdata([...teamdata, formData]);
    setShowForm(true);
    setFormData({
      id: uuidv4(),
      teamCity: "",
      teamName: "",
      players: [{ id: uuidv4(), name: "", number: 0, type: "" }],
    });
  };
  const playersDataChange = (e) => {
    setFormData({
      ...formData,
      ...formData.players,
      [e.target.name]: e.target.value,
    });
  };

  console.log(teamdata);
  return (
    <>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        showForm={showForm}
        teamdata={teamdata}
        team={team}
      />
      <Table showForm={showForm} teamdata={teamdata} />
      <TeamForm
        showForm={showForm}
        cancelForm={cancelForm}
        formData={formData}
        datachange={datachange}
        formDataSubmit={formDataSubmit}
        playersDataChange={playersDataChange}
      />
    </>
  );
}
