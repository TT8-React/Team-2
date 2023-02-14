import React from 'react'
import Button from '../../Components/Button';
import FormItem from '../../Components/FormItem'
import FormTitle from './../../Components/FormTitle/index';
import TextForm from './../../Components/TextForm/index';

const LogIn = () => {
    return (
        <div>
            <FormTitle title="LOGIN"/>
            <FormItem label="test" name="test2"/>
            <Button name="TEST"/>
            <TextForm text="Don’t have an account ?" spanText="Sign up"/>
        </div>
    )
}

export default LogIn