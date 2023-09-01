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
  grid-template-rows: 1fr 30px;
  overflow: scroll;
`;

export const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;