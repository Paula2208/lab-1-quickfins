import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardLiving from "../../components/Cards/CardLiving";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

const Living: NextPage = () => {
  const livings = ['P', 'P', 'P', 'P', 'P'];
  const [search, setSearch] = useState<string>('');

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="dirección de la vivienda" />
        <ButtonAct>Crear Vivienda</ButtonAct>
      </UpperRow>
      
      <GridCards>
        {livings.map((p) => (
          <CardLiving key={p} />
        ))}
      </GridCards>
    </>
  );
};

export default Living;