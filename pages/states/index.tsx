import type { NextPage } from "next";
import CardState from "../../components/Cards/CardState";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from "react";
import StateItem from "../../interfaces/State";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import { getStates } from "../../helpers/state";
import CreateState from "../../components/Cards/CardState/createState";

const States: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [states, setStates] = useState<StateItem[]>([]);
  const [showCreate, setShowCreate] = useState<boolean>(false);

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

  const reload = () => {
    getStates(setStates);
  }

  useEffect(() => {
    reload();
  }, [])

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="nombre del municipio" />
        <ButtonAct onClick={() => setShowCreate(true)}>Crear Municipio</ButtonAct>
      </UpperRow>

      <GridCards>
        {getFiltered().map((p) => (
          <CardState key={p.id} state={p}/>
        ))}
      </GridCards>

      {showCreate && <CreateState reload={reload} hide={() => setShowCreate(false)}/>}
    </>
  );
};

export default States;