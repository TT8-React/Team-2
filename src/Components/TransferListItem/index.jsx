import React from 'react'
import { TListItem } from './style'
import arrow from '../../Assets/arrow.png'

export default function TransferListItem(props) {
  return (
    <TListItem><p>{props.children} </p><span onClick={props.handleTransfer}><img src={arrow} alt='arrow'/></span></TListItem>
  )
}
