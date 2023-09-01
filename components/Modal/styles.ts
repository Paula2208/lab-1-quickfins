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
  width: 40vw;
  height: 80vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 5px;
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

export const NameModal = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: var(--violet);
`;

export const DivModal = styled(NameModal)`
  gap: 35px;
`;

export const RowModal = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--violet);
`;

export const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: var(--violet);
`;

export const GridTwoModal = styled.div<{ rows?: number; }>`
  display: grid;
  width: calc(100% - 30px);
  margin-left: 30px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(${(props) => props.rows ? props.rows : '3'}, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 10px;
  font-size: 14px;
  font-weight: 400;
`;

export const TopicModalTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--violet-light);
`;

export const TopicModalItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;