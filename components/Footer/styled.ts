import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  background: var(--violet);
  align-items: center;
  justify-content: flex-start;
  
  color: white;
  font-family: Verdana;
  font-weight: 400;
  font-size: 12px;
  line-height:normal;
  padding: 5px;

  height: 30px;
  gap: 15px;
`;

export const NameTeam = styled.div`
  font-size: 12px;
  margin-left: 50px;
`;

export const RowColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TitleFooter = styled.div`
  font-weight: 700;
  color: white;
`;