import { styled } from "styled-components";

export const InputIcon = styled.div`
    display: flex;
    gap: 10px;
    background-color: white;
    border: 1px solid var(--violet);
    border-radius: 20px;
    color: black;
    padding:5px 20px;
    align-items: center;
`;

export const InputStyled = styled.input`
    outline: none;
    border: 0px;
    width: 100%;

    &placeholder {
        color: #a3a3c2
    }
`;