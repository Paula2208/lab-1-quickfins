import type { NextPage } from "next";
import { GridCards } from "../styles";
import CardLiving from "../../components/Cards/CardLiving";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const Living: NextPage = () => {
  const livings = ['P', 'P', 'P', 'P', 'P'];
  const [search, setSearch] = useState<string>('');
  
  return (
    <>
      <SearchBar search={search} setSearch={setSearch} by="dirección de la vivienda" />
      <GridCards>
        {livings.map((p) => (
          <CardLiving key={p} />
        ))}
      </GridCards>
    </>
  );
};

export default Living;