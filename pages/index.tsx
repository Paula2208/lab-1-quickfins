import type { NextPage } from "next";
import { GridHome, HomeContainer, HomeCredits, HomeText, HomeTile, NameHome, NamesTeam } from "../styles/styles";
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <GridHome>
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

      <Image
        src="/bd_Lab1.jpeg"
        width={800}
        height={800}
        alt="Picture of the author"
      />
    </GridHome>
  )
};

export default Home;