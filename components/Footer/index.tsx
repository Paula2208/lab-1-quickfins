import { FooterContainer, NameTeam, RowColumn, TitleFooter } from "./styled";

export default function Footer() {
    return (
        <FooterContainer>
            <TitleFooter>Equipo QuickFins</TitleFooter>
            <RowColumn>
                <NameTeam>Paula Guzmán</NameTeam>
                <NameTeam>Sebastian Escandón</NameTeam>
            </RowColumn>

            <RowColumn>
                <NameTeam>Daniel Osuna</NameTeam>
                <NameTeam>Dylan Rivero</NameTeam>
            </RowColumn>

            <NameTeam>1 Septiembre de 2023 - Universidad Nacional de Colombia</NameTeam>

            <NameTeam>Ingeniería de Software II - 2023-2s</NameTeam>
        </FooterContainer>
    );
}