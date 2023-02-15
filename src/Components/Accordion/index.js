import { useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
} from "./style";

import closed from "../../Assets/ClosedArrow.png";
import opened from "../../Assets/OpenedArrow.png";

const Accordion = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionTitle onClick={handleAccordionToggle}>
        <span>{title}</span>
        <img src={isOpen ? opened : closed} alt="arrow" />
      </AccordionTitle>
      {data?.map((item) => {
        return (
          <AccordionContent key={item} isOpen={isOpen}>
            <AccordionItem isOpen={isOpen}>{item}</AccordionItem>
          </AccordionContent>
        );
      })}
    </AccordionContainer>
  );
};

export default Accordion;
