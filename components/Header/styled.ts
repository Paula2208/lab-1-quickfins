import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: white;
  align-items: center;
  justify-content: flex-start;
  
  color: #6550EA;
  font-family: Verdana;
  font-weight: 400;
  padding: 0px 10px;
  text-decoration: none;
  font-size: 18px;

  gap: 100px;

  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.28);
`;

export const TitleContainer = styled.div`
  font-weight: 700;
  color: #6550EA;
`;

export const ItemTitle = styled.div<{ isActive: boolean; }>`
  font-weight: ${(props) => props.isActive ? '700' : '400'};
  color: #6550EA;
  font-size: 14px;
  border-bottom: ${(props) => props.isActive ? '3px solid #6550EA' : '0px'};
  height: 100%;
  padding-bottom: 10px;
`;

export const WrapperItems = styled.div`
  display: flex;
  gap: 35px;
  height: 100%;
  align-items: flex-end;
`;