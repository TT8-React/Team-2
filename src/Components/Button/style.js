import styled from "styled-components";

export const Btn=styled.button`
    background: #000000;
    border-radius: 5px;
    color:#fff;
    font-weight: 700;
    font-size: ${ props=> props.big ? '30px':'16px'};
    line-height: 19px;
    padding: 10px 16px;
`