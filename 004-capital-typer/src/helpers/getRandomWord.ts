import words from '../config/words'

export default function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
