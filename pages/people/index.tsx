import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardPeople from "../../components/Cards/CardPeople";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import PersonItem from "../../interfaces/People";
import { getPeople } from "../../helpers/people";

const People: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [people, setPeople] = useState<PersonItem[]>([]);

  const getFiltered = (): PersonItem[] => {
    return people.filter(p => {
      if (search === '') return true;

      if (p.name.includes(search) ||
        p.name.toLowerCase().includes(search) ||
        p.name.toUpperCase().includes(search))
        return true;

      return false;
    })
  }

  useEffect(() => {
    getPeople(setPeople);
  }, [])

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="nombre de la persona" />
        <ButtonAct>Crear Persona</ButtonAct>
      </UpperRow>
      
      <GridCards>
        {getFiltered().map((p) => (
          <CardPeople key={p.id} person={p} />
        ))}
      </GridCards>
    </>
  );
};

export default People;