import { css, useColor } from '@fusion-ui-vue/theme'
import type { LlinkProps } from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useLink: ComponentStylingHook<LlinkProps> = props => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')

  return computed(() => {
    return css`
      --fn-link-color: ${$color.value};
      --fn-link__underline--status: ${props.underline === 'none'
        ? 'none'
        : props.underline === 'hover'
        ? 'none'
        : 'underline'};
      --fn-link__underline--hover: ${props.underline === 'none'
        ? 'none'
        : props.underline === 'hover'
        ? 'underline'
        : 'underline'};
    `
  })
}
