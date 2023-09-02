import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../styles";
import CardState from "../../components/Cards/CardState";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import StateItem from "../../interfaces/State";
import { getStates } from "../../helpers/state";

const States: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [states, setStates] = useState<StateItem[]>([]);

  const getFiltered = (): StateItem[] => {
    return states.filter(p => {
      if (search === '') return true;

      if (p.name.includes(search) ||
        p.name.toLowerCase().includes(search) ||
        p.name.toUpperCase().includes(search))
        return true;

      return false;
    })
  }

  useEffect(() => {
    getStates(setStates);
  }, [])

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="nombre del municipio" />
        <ButtonAct>Crear Municipio</ButtonAct>
      </UpperRow>

      <GridCards>
        {getFiltered().map((p) => (
          <CardState key={p.id} state={p}/>
        ))}
      </GridCards>
    </>
  );
};

export default States;