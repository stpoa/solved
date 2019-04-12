import { MouseEvent } from 'react'

export type OnChange = React.ChangeEventHandler<HTMLInputElement>
export type OnClick = (event: MouseEvent<HTMLElement, MouseEvent>) => void
