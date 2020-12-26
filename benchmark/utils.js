/* global eprint */

export const base64ToArrayBuffer = base64 => {
  const binary_string = window.atob(base64)
  const len = binary_string.length
  const bytes = new Uint8Array(len)
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i)
  }
  return bytes.buffer
}

export const timeExecution = async (name, f) => {
  const t0 = performance.now()
  await f()
  const t1 = performance.now()
  const text = `${name} took ${(t1 - t0).toFixed(2)} milliseconds.`
  eprint(text)
  console.log(text)
}
