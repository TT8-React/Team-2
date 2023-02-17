import React from 'react'
import { TListItem } from './style'

export default function TransferListItem(props) {
  return (
    <TListItem><p>{props.children} </p><span onClick={props.handleTransfer}>&gt;</span></TListItem>
  )
}
