import styled from "styled-components";

export const Square = styled.td`
    width: 45px;
    height: 45px;
    border: 1px solid black;
    background: ${(props) => (props.active ? "#1976d2" : "white")};
`;
