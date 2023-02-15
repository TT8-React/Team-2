import React from 'react'
import { TListItem } from './style'

export default function TransferListItem(props) {
  return (
    <TListItem>{props.children} <span onClick={props.handleTransfer}>&gt;</span></TListItem>
  )
}
