import styled from "styled-components";

export const TransferListContainer = styled.div`
width: 45%;
height: 378px;
background: #F2F2F2;
border: 1px solid #AAAAAA;
border-radius: 10px;
padding-top: 20px;
`

export const OuterContainer = styled.div`
display: flex;
width: 90%;
margin: 0 auto;
gap: 40px;
align-items: center;
margin-top: 130px;

div{
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  Button{
    cursor: pointer;
  }
}
`

export const BackButton =styled.div`
position: absolute;
top: 5%;
left: 89%;
  Button{
    cursor: pointer;
  }
`
