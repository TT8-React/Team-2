import React, { useState } from 'react'
import { OuterContainer, TransferListContainer } from './style'
import Button from '../../Components/Button'
import TransferListItem from '../TransferListItem'
import { TransferListDate } from '../../MockData/Data'

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

  return (
    <OuterContainer>
      <div
        style={{
          position: 'absolute',
          top:'125px',
          right: '51px'
        }}>
        <Button name={"Back"} />
      </div>
      <TransferListContainer>
        {RItems.map((item)=>{
          return <TransferListItem key={item.id} handleTransfer={()=>handleTransfer(item.id, item.test,'left')}>{item.test}</TransferListItem>
        })}
      </TransferListContainer>
      <div>
        <Button name={'>>'}/>
        <Button name={'<<'}/>
      </div>
      <TransferListContainer>
       {LItems.map((item)=>{
          return <TransferListItem key={item.id} handleTransfer={()=>handleTransfer(item.id, item.test,'right')}>{item.test}</TransferListItem>
        })}
      </TransferListContainer>
    </OuterContainer>
  )
}
