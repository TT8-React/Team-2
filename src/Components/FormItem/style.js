import styled from "styled-components";

export const WrapperItem = styled.div`
    color:#52525C;
    width: 360px;
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 150%;
        color: #52525C;
    }
`
export const Input = styled.input`
    display:block;
    border: 2px solid #D9D9D9;
    border-radius: 8px;
    padding: 12px 16px;
    margin-top: 8px;
    &::placeholder{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        color: #d9d9d9;
    }

`