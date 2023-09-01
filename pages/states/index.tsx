import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../styles";
import CardState from "../../components/Cards/CardState";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";

const States: NextPage = () => {
  const states = ['P', 'P', 'P', 'P', 'P'];

  const [search, setSearch] = useState<string>('');

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="nombre del municipio" />
        <ButtonAct>Crear Municipio</ButtonAct>
      </UpperRow>
      
      <GridCards>
        {states.map((p) => (
          <CardState key={p} />
        ))}
      </GridCards>
    </>
  );
};

export default States;