import {
  NearMe,
  OpenWith,
  GpsFixed,
  ChangeHistory,
  Square,
  Hexagon,
  SaveOutlined,
  SvgIconComponent,
} from '@mui/icons-material'

const iconsMap: { [key: string]: SvgIconComponent } = {
  select: NearMe,
  drag: OpenWith,
  closestPoint: GpsFixed,
  triangle: ChangeHistory,
  square: Square,
  hexagon: Hexagon,
  save: SaveOutlined,
}

type Props = {
  name: string
}

const ControlIcon = ({ name }: Props) => {
  if (!iconsMap[name]) {
    // catch errror
  }

  const Component = iconsMap[name]

  return <Component />
}

export default ControlIcon
