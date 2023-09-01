import type { NextPage } from "next";
import { GridCards } from "../styles";
import CardPeople from "../../components/Cards/CardPeople";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const People: NextPage = () => {
  const people = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} by="nombre de la persona" />
      <GridCards>
        {people.map((p) => (
          <CardPeople key={p} />
        ))}
      </GridCards>
    </>
  );
};

export default People;