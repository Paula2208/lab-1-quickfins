import styled from "styled-components";

export const Container = styled.div`
  text-align: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  text-align: flex-start;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(100vh, auto) 30px;
  overflow: scroll;
`;

export const PageContainer = styled.div`
  width: 100%;
  padding: 20px;
`;