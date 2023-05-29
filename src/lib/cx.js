import { twMerge } from 'tailwind-merge'
import { cx as classix } from 'classix'

export default function cx(...args) {
  return twMerge(classix(...args))
}
