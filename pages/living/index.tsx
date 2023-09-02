import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardLiving from "../../components/Cards/CardLiving";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import LivingItem from "../../interfaces/Living";
import { getLivings } from "../../helpers/living";

const Living: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [livings, setLivings] = useState<LivingItem[]>([]);

  const getFiltered = (): LivingItem[] => {
    return livings.filter(p => {
      if (search === '') return true;

      if (p.address.includes(search) ||
        p.address.toLowerCase().includes(search) ||
        p.address.toUpperCase().includes(search))
        return true;

      return false;
    })
  }

  useEffect(() => {
    getLivings(setLivings);
  }, [])

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="dirección de la vivienda" />
        <ButtonAct>Crear Vivienda</ButtonAct>
      </UpperRow>

      <GridCards>
        {getFiltered().map((p) => (
          <CardLiving key={p.id} living={p} />
        ))}
      </GridCards>
    </>
  );
};

export default Living;