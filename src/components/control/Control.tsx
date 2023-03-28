import React, { ReactNode } from 'react'
import './Control.css'

type Props = {
  onClick?: () => void
  isActive?: boolean
  isDisabled?: boolean
  children?: ReactNode
  title?: string
}
const Control = ({
  onClick,
  isActive,
  title,
  isDisabled = false,
  children,
}: Props) => {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`control ${isActive ? 'is-active' : ''}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Control
