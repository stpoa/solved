export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0)
export const isNumber = (n: any): boolean =>
  !isNaN(parseFloat(n)) && isFinite(n)
export const random = (fromInclusive: number) => (toExclusive: number) =>
  Math.floor(fromInclusive + Math.random() * (toExclusive - fromInclusive))
