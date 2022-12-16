import elements from '../config/elements'

export default function breakify(str: string) {
  const length = str.length
  let result: string[] = []
  for (let i = 0; i < length; i++) {
    const oneString = `${str[i].toUpperCase()}`
    const twoString = `${oneString}${str[i + 1]}`

    if (elements.includes(twoString)) {
      result = [str.slice(0, i), twoString, str.slice(i + 2, str.length)]
      break
    }

    if (elements.includes(oneString)) {
      result = [str.slice(0, i), oneString, str.slice(i + 1, str.length)]
      break
    }
  }

  if (!result.length) {
    result = [str, '', '']
  }

  return result
}
