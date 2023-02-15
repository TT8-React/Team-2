import React from 'react'
import WrapperForm from './../../Components/WrapperForm/index';
import FormTitle from './../../Components/FormTitle/index';
import FormItem from './../../Components/FormItem/index';
import FormBtn from './../../Components/FormBtn/index';

const ForgetPassword = () => {
    return (
        <>
            <WrapperForm>
                <FormTitle title="FORGOT PASSWORD"/>
                <FormItem label="Email ID" name="email" type="email"/>
                <FormBtn name="SUBMIT"/>
            </WrapperForm>
        </>
    )
}

export default ForgetPassword