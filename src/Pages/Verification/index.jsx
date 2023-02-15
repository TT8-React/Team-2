import React from 'react'
import WrapperForm from './../../Components/WrapperForm/index';
import FormTitle from './../../Components/FormTitle/index';
import FormBtn from './../../Components/FormBtn/index';
import VerifyText from './VerifyText';
const Verification = () => {
    return (
        <>
            <WrapperForm>
                <FormTitle title="Verification"/>
                <VerifyText />
                <FormBtn name="SUBMIT"/>
            </WrapperForm>
        </>
    )
}

export default Verification