import type { NextPage } from "next";
import { ButtonAct, GridCards, UpperRow } from "../../styles/styles";
import CardPeople from "../../components/Cards/CardPeople";
import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import PersonItem from "../../interfaces/People";

const People: NextPage = () => {
  const people: PersonItem[] = [{
    name: 'Juan Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }, {
    name: 'Paula Guzmán',
    id: 1,
    age: 21,
    phone: 300000000,
    gender: 'Mujer',
    birthday: '22/08/2002',
  }];
  const [search, setSearch] = useState<string>('');

  const getFilterd = (): PersonItem[] => {
    return people.filter(p => {
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
        <SearchBar search={search} setSearch={setSearch} by="nombre de la persona" />
        <ButtonAct>Crear Persona</ButtonAct>
      </UpperRow>
      
      <GridCards>
        {getFilterd().map((p) => (
          <CardPeople key={p.id} person={p} />
        ))}
      </GridCards>
    </>
  );
};

export default People;