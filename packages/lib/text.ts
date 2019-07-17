export const limitWords = (maxChars: number) => (text: string) =>
  text
    .split(' ')
    .reduce(
      (words, word) => {
        const newWords = [...words, word]
        return newWords.join(' ').length <= maxChars ? newWords : words
      },
      [] as string[],
    )
    .join(' ')
