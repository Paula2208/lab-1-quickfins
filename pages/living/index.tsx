import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardLiving from "../../components/Cards/CardLiving";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import LivingItem from "../../interfaces/Living";
import { getLivings } from "../../helpers/living";
import CreateLiving from "../../components/Cards/CardLiving/createLiving";

const Living: NextPage = () => {
  const [search, setSearch] = useState<string>('');
  const [showCreate, setShowCreate] = useState<boolean>(false);
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

  const reload = () => getLivings(setLivings)

  useEffect(() => {
    reload()
  }, [])

  return (
    <>
      <UpperRow>
        <SearchBar search={search} setSearch={setSearch} by="dirección de la vivienda" />
        <ButtonAct onClick={() => setShowCreate(true)}>Crear Vivienda</ButtonAct>
      </UpperRow>

      <GridCards>
        {getFiltered().map((p) => (
          <CardLiving key={p.id} living={p} />
        ))}
      </GridCards>

      {showCreate && <CreateLiving reload={reload} hide={() => setShowCreate(false)}/>}
    </>
  );
};

export default Living;