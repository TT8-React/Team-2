import React from "react";
import WrapperForm from "./../../Components/WrapperForm/index";
import FormTitle from "./../../Components/FormTitle/index";
import FormBtn from "./../../Components/FormBtn/index";
import VerifyText from "./VerifyText";
import { useNavigate } from "react-router-dom";
import { PATHS } from "./../../Routes/index";
import { FlexCenter } from "../../global/style";

const Verification = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(PATHS.VERIFY);
  };
  return (
    <>
      <WrapperForm>
        <form onSubmit={handleSubmit}>
          {" "}
          <FormTitle title="Verification" />
          <VerifyText />
          <FlexCenter>
            <FormBtn name="SUBMIT" />
          </FlexCenter>
        </form>
      </WrapperForm>
    </>
  );
};

export default Verification;
