export const calculateHash = async (value: string) => {
  const encoder = new TextEncoder()
  return crypto.subtle
    .digest('SHA-512', encoder.encode(value))
    .then(h => Array.from(new Uint8Array(h)))
}
