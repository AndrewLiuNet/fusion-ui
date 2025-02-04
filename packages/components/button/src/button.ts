import type { AcceptableColor } from '@fusion-ui-vue/theme'
import type { ExtractPropTypes, PropType } from 'vue'
import { type ComponentSizes, componentSizes } from '@fusion-ui-vue/constants'

export const buttonVariants = ['text', 'filled', 'outlined'] as const
export type ButtonVariant = typeof buttonVariants[number]
export const buttonShapes = ['rounded', 'fullRounded', 'square'] as const
export type ButtonShape = typeof buttonShapes[number]
export const buttonHeight: Record<ComponentSizes, number> = {
  small: 32,
  medium: 40,
  large: 48,
}

export const buttonProps = {
  variant: {
    type: String as PropType<ButtonVariant>,
    values: buttonVariants,
    default: 'filled',
  },
  shape: {
    type: String as PropType<ButtonShape>,
    values: buttonShapes,
    default: 'rounded',
  },
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  disableRipple: {
    type: Boolean,
    default: false,
  },
  disableElevation: {
    type: Boolean,
    default: false,
  },
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
