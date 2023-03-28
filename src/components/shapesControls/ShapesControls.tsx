import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Control, { ControlIcon } from 'components/control'

import './ShapesControls.css'
import { selectors } from 'features/shapes'
import { ShapeName } from 'features/shapes/types'
import { addShape } from 'features/shapes/actions'
import shapes from 'constants/shapes'

type ShapesResponseData = Array<Record<string, ShapeName>>

type ShapesResponse = {
  data: ShapesResponseData
}
const ShapesList = () => {
  const dispatch = useDispatch()
  const shapesNames = useSelector(selectors.getShapesNames)

  const renderShapes = shapes.data.map(({ name, polygon, position }) => (
    <Control
      key={`shape-control-${name}`}
      title={name}
      {...(name && shapesNames.includes(name)
        ? { isDisabled: true }
        : {
            onClick: () =>
              dispatch(
                addShape({ name, polygon, position, isSelected: false })
              ),
          })}
    >
      <ControlIcon name={name} />
    </Control>
  ))

  return <div className="shapes-controls">{renderShapes}</div>
}

export default ShapesList
