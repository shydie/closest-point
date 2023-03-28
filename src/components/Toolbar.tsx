import React from 'react'
import ShapesControls from './shapesControls'
import ToolsControls from './toolsControls'
import Control, { ControlIcon } from './control'
import { useSelector } from 'react-redux'
import { selectors as shapesSelectors } from 'features/shapes'

const Toolbar: React.FC = () => {
  const shapes = useSelector(shapesSelectors.getShapes)
  return (
    <nav className="nav px-1">
      <ToolsControls />

      <div className="mt-1" />

      <ShapesControls />

      <div className="mt-1" />

      <Control onClick={() => console.log(JSON.stringify(shapes))}>
        <ControlIcon name="save" />
      </Control>
    </nav>
  )
}

export default Toolbar
