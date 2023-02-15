import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
`;

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  background-color: #ededed;
  border-radius: 6px;
  border: 1px solid #000;
  margin-bottom: 1rem;
`;
export const AccordionContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 90%;
  border-radius: 6px;
  background-color: #ededed;
  margin: 0.5rem 0 0.2rem auto;
  transition: all 0.3s ease;
`;
export const AccordionItem = styled.p`
  height: ${(props) => (props.isOpen ? "auto" : 0)};
  padding: 0.5rem 0.5rem;
  margin: 0.5rem 0;
  transition: all 0.3s ease;
  text-align: start;
`;
