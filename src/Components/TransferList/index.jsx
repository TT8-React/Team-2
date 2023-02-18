import React, { useState } from 'react'

import {RxDoubleArrowRight} from 'react-icons/rx'
import {RxDoubleArrowLeft} from 'react-icons/rx'

import { BackButton, OuterContainer, TransferListContainer } from './style'
import Button from '../../Components/Button'
import TransferListItem from '../TransferListItem'
import { TransferListDate } from '../../MockData/Data'
import { Btn } from '../Button/style'

export default function TransferList() {

  const [RItems, setRItems] = useState(TransferListDate);
  const [LItems, setLItems] = useState([]);

  const handleTransfer = (id, test,direction) =>{
    if(direction === 'left'){
      setLItems((prev)=> [...prev,{id,test}]);
      setRItems((prev)=> prev.filter(item => item.id !== id))
    }else{
      setRItems((prev)=> [...prev,{id,test}]);
      setLItems((prev)=> prev.filter(item => item.id !== id))
    }
  }

  const handleClick = (direction)=>{
    if(direction === 'right'){
      setLItems((prev)=> [...prev,...RItems])
      setRItems([])
    }else{
      setRItems((prev)=> [...prev,...LItems])
      setLItems([])
    }
  }

  return (
    <>
      <BackButton>
        <Button name={"Back"} />
      </BackButton>
    <OuterContainer>
      <TransferListContainer>
        {RItems.map((item)=>{
          return <TransferListItem key={item.id} handleTransfer={()=>handleTransfer(item.id, item.test,'left')}>{item.test}</TransferListItem>
        })}
      </TransferListContainer>
      <div>
      <Btn big onClick={()=>handleClick('left')}><RxDoubleArrowLeft/></Btn>
      <Btn big onClick={()=>handleClick('right')}><RxDoubleArrowRight /></Btn>
      </div>
      <TransferListContainer>
       {LItems.map((item)=>{
          return <TransferListItem key={item.id} handleTransfer={()=>handleTransfer(item.id, item.test,'right')}>{item.test}</TransferListItem>
        })}
      </TransferListContainer>
    </OuterContainer>
    </>
  )
}
