import React from 'react'
import { Button } from 'reactstrap'
import { BtnProps } from '../../Types/CommonElements.type'

export default function Btn(props: BtnProps) {
  return (
    <Button {...props} style={{cursor:'pointer'}}>{props.children}</Button>
  )
}
