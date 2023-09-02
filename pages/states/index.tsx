import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardState from "../../components/Cards/CardState";
import SearchBar from "../../components/SearchBar";
import { useState } from "react";
import StateItem from "../../interfaces/State";

const States: NextPage = () => {
  const states: StateItem[] = [{
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
  }, {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
  }, {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
  }, {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
  }, {
    id: 1,
    name: 'Cúcuta',
    area: 109820394.93,
    budget: 1223438543,
  }];

  const [search, setSearch] = useState<string>('');

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