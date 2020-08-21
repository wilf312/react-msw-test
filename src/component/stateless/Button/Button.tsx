import * as React from 'react'

type props = {
  text: string
  onClick: () => void
}

export const Button = (props: props) => {
  return <button type="button" onClick={props.onClick}>{props.text}</button>
}