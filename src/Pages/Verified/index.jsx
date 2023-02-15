import React from 'react'
import WrapperForm from './../../Components/WrapperForm/index';
import FormTitle from './../../Components/FormTitle/index';
import FormBtn from './../../Components/FormBtn/index';
import Img from './Img';

const Verified = () => {
    return (
        <>
            <WrapperForm>
                <FormTitle title="Verified"/>
                <Img />
                <FormBtn name="NEXT"/>
            </WrapperForm>
        </>
    )
}

export default Verified