import React from "react";


import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormBtn from "./../../Components/FormBtn/index";


import Img from "./Img";


import { useNavigate } from "react-router-dom";
import { PATHS } from "./../../Routes/index";
import { FlexCenter } from "../../global/style";



const Verified = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(PATHS.LOGIN);
  };
  return (
    <>
      <WrapperForm>
        <form onSubmit={handleSubmit}>
          <FormTitle title="Verified" />
          <FlexCenter style={{ flexDirection: "column" }}>
            <Img />
            <FormBtn name="NEXT" />
          </FlexCenter>
        </form>
      </WrapperForm>
    </>
  );
};

export default Verified;
