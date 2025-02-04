import colorCSS from '@fusion-ui-vue/theme/styles/palette.less?inline'
import type { Colors } from './color'

const match = colorCSS.matchAll(
  /--\b(md|fn)\b-ref-palette-([a-zA-Z]+)(-variant)?-([A-Z0-9]*): (#[0-9a-z]{6});/g
)
export const colors: Colors = [...match].reduce((pre, cur) => {
  const [_, _source, colorName, variant, level, value] = cur
  if (level) {
    pre[colorName] = pre[colorName] ?? {}
    if (variant) {
      pre[colorName].variant = pre[colorName].variant ?? {}
      pre[colorName].variant[level] = value
    } else {
      pre[colorName][level] = value
    }
  } else {
    pre[colorName] = value
  }
  return pre
}, {} as any)

export default colors
