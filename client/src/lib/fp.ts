import { KeyValuePair, zip } from 'ramda'

export const always = <T>(a: T) => () => a

export const areArraysEqual = (a: any[], b: any[]) =>
  zip(a, b).every(([x, y]: KeyValuePair<any, any>) => x === y)
