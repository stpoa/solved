import { FC } from 'react'

declare const index: FC<{
  onUpdate: (params: { x: string; y: string; scale: string }) => void
}>
declare const make3dTransformValue: (params: {
  x: string
  y: string
  scale: string
}) => string
export { make3dTransformValue }
export default index
