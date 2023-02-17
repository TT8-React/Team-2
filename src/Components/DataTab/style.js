import styled from "styled-components";

export const Tab = styled.nav`
  width: 60%;
  height: 4rem;
  margin: 2rem auto;
  margin-top: 2%;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  border: 2px solid #000000;
  border-radius: 0.5rem;

  & > ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    height: 100%;
  }
  & > ul a{
    text-decoration: none;
    color: #000000;
    width:100%;
    height: 100%;
  }
  & > ul li{
    width:100%;
  }  
   & > ul a:first-of-type{
    border-right: 1px solid #8f8f8f;
    border-radius: 0.5rem 0 0 0.5rem ;
  }
  & > ul a:last-of-type{
    border-radius:0 0.5rem 0.5rem 0;
  }
  .active {
    background-color: #ebebf0;
    box-shadow: inset 2px 2px 3px #c9c1c1;
  }
`;
export const TabItem = styled.li`
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;


`;
