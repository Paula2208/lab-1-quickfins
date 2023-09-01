import styled from "styled-components";

export const ModalBase = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
`;

export const CardModal = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 50vw;
  height: 90vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-end;
  overflow: hidden;
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;