import type { NextPage } from "next";
import { HomeContainer, HomeCredits, HomeText, HomeTile, NameHome, NamesTeam } from "./styles";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <HomeTile>¡Hola!</HomeTile>
      <HomeText>Haz click en las tabs para ver el contenido del laboratorio</HomeText>
      <HomeCredits>
        Equipo QuickFins
        <NamesTeam>
          <NameHome>Paula Daniela Guzmán Zabala</NameHome>
          <NameHome>Frontend</NameHome>
          <NameHome>Sebastian Escandón Florez</NameHome>
          <NameHome>Backend</NameHome>
          <NameHome>Dylan Macgiver Rivero Esteves</NameHome>
          <NameHome>Backend & Database</NameHome>
          <NameHome>Daniel Gonzalo Osuna Rodriguez</NameHome>
          <NameHome>Database</NameHome>
        </NamesTeam>
      </HomeCredits>
    </HomeContainer>
  )
};

export default Home;