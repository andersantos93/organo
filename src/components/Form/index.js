import { useState } from "react";

import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";

import "./Form.css";

const Form = () => {
  const teams = [
    "Development",
    "Front-End",
    "Data Science",
    "DevOps",
    "Ux e Design",
    "Mobile",
    "Innovation and Managment",
  ];

  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const save = (event) => {
    event.preventDefault();
    console.log("form saved ", name, occupation, image, team);
  };

  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          value={name}
          changed={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          value={occupation}
          changed={(value) => setOccupation(value)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          value={image}
          changed={(value) => setImage(value)}
        />
        <DropdownList
          required={true}
          label="Time"
          itens={teams}
          value={team}
          changed={(value) => setTeam(value)}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
