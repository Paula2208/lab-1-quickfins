import { styled } from "styled-components";

export const GridCards = styled.div`
    color: black;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
`;

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 30px;
`;

export const HomeText = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

export const HomeTile = styled.header`
  display: flex;
  background: #6550EA;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;
  border-radius: 10px;
  
  color: white;
  font-family: Verdana;
  font-weight: 400;
  padding: 10px 10px 10px 100px;
  text-decoration: none;
  font-size: 18px;
  margin-left: -45px;

  gap: 100px;

  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
`;

export const HomeCredits = styled.header`
  display: flex;
  flex-direction: column;
  background: #6550EA;
  align-items: flex-start;
  justify-content: center;
  width: fit-content;
  border-radius: 10px;
  
  color: white;
  font-family: Verdana;
  font-weight: 700;
  padding: 10px;
  text-decoration: none;
  font-size: 18px;

  gap: 30px;

  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
`;

export const NamesTeam = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 10px;
    font-size: 14px;
    font-weight: 400;
`;

export const NameHome = styled.div`

`;