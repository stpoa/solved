import React from 'react'

export interface TimeLeftSpec {
  minutes: number
  hours: number
  days: number
}

export const getTimeLeftStr = ({ hours, days, minutes }: TimeLeftSpec) => (
  days ? days + ' d' : hours ? hours + ' h' : minutes + ' m'
)

const TimeLeft = ({ minutes, hours, days }: TimeLeftSpec) => (
  <div>{getTimeLeftStr({ minutes, hours, days })}</div>
)

export default TimeLeft
