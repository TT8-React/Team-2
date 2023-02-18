import React from 'react'
import styled from 'styled-components'
import Button from '../../Components/Button'
import { CompanyDetailsData } from '../../MockData/Data'
import { Container, Item } from './style'


export default function CompanyDetails() {

  return (
    <div>
      <div style={{
        marginTop: '45px',
        marginLeft: '940px',
      }}>
        <Button name={"Edit company details"}/>
      </div>
      <Container>
        {CompanyDetailsData.map((item)=>{
          return <div key={item.id}>
              <p>{item.name}</p>
              <h4>{item.text}</h4>
          </div>
        })}
      </Container>
    </div>
  )
}
