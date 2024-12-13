import React from 'react'
import { Progress } from 'reactstrap'
import { ProgressBarProps } from '../../Types/CommonElements.type'

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <Progress {...props}>{props.children}</Progress>
  )
}
