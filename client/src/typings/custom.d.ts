declare module '*.svg' {
  const content: any
  export default content
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
