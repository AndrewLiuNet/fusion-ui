<!-- eslint-disable quote-props -->
<script lang="ts" setup>
import { FnAvatar, FnBadge } from '@fusion-ui-vue/components'
import { styled } from '@fusion-ui-vue/theme'

const StyledBadge = styled(FnBadge)(theme => ({
  '& .fn-badge--icon': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.schemes.background}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))

const SmallAvatar = styled(FnAvatar, {
  src: 'https://mui.com/static/images/avatar/2.jpg',
  size: 22,
})(theme => ({
  border: `2px solid ${theme.schemes.background}`,
  transform: 'translate(30%, 30%)',
}))
</script>

<template>
  <div fscw gap-10>
    <styled-badge variant="dot" y-align="bottom" overlap>
      <fn-avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </styled-badge>
    <fn-badge :content="SmallAvatar" y-align="bottom">
      <fn-avatar src="https://mui.com/static/images/avatar/1.jpg" />
    </fn-badge>
  </div>
</template>
