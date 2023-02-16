import styled from "styled-components";

export const TransferListContainer = styled.div`
width: 502px;
height: 378px;
background: #F2F2F2;
border: 1px solid #AAAAAA;
border-radius: 10px;
padding-top: 20px;
`

export const OuterContainer = styled.div`
display: flex;
gap: 40px;
align-items: center;
margin-top: 130px;

div{
  display: flex;
  flex-direction: column;
  row-gap: 44px;

  Button{
    cursor: pointer;
  }
}
`