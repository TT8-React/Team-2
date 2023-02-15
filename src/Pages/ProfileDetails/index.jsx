import React from 'react'
import Button from '../../Components/Button'
import FormItem from '../../Components/FormItem'
import {ProfileDetailsData} from '../../MockData/Data'
import { InputsWraper, TopSection } from './style'
export default function ProfileDetails() {
  console.log(ProfileDetailsData)
  return (
    <InputsWraper>
      <TopSection>
        <Button name={'View details'}/>
      </TopSection>
      {ProfileDetailsData.map((item)=>{
        return <FormItem name={item.name} type={'text'} label={item.name} key={item.id}/>
      })}
      <Button name={'Submit'}/>
    </InputsWraper>
  )
}
