import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../styles";
import CardLiving from "../../components/Cards/CardLiving";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import LivingItem from "../../interfaces/Living";

const Living: NextPage = () => {
  const livings = [{
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
  }, {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
  }, {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
  }, {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
  }, {
    id: 1,
    address: 'Carrera 15',
    capacity: 5,
    levels: 3,
    baths: 2,
    layer: 3,
    area: 400.2,
  }];
  const [search, setSearch] = useState<string>('');

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