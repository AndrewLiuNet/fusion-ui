<script setup lang="ts">
import { computed, ref } from 'vue'
import { isString, useNamespace } from '@fusion-ui-vue/utils'
import { useDrawer } from '@fusion-ui-vue/hooks'
import { FnIcon } from '../../icon'
import { drawerProps } from './drawer'
const props = defineProps(drawerProps)
const { visible, doClose } = useDrawer(props)

const targetDivRef = ref(null)

const ns = useNamespace('drawer')
const drawerOverlay = computed(() => {
  return `${ns.b()}--overlay`
})
const drawerClassList = computed(() => {
  const { direction } = props
  const classList = [ns.b()]
  if (isString(direction)) {
    classList.push(ns.m(direction))
  }
  return classList
})

const handleClose = (event: MouseEvent) => {
  const targetDiv = targetDivRef.value as HTMLElement | null
  if (!targetDiv?.contains(event.target as HTMLElement)) {
    doClose()
  }
}
</script>

<template>
  <teleport to="body">
    <div
      v-if="visible"
      ref="elRef"
      :class="drawerOverlay"
      @click="handleClose"
    />

    <transition :name="`slide-fade--${props.direction}`">
      <div v-show="visible" ref="targetDivRef" :class="drawerClassList">
        <header>
          <span class="drawer-title">
            {{ props.title }}
          </span>
          <span class="drawer-close" @click="doClose">
            <fn-icon icon="ic:round-close" size="25" />
          </span>
        </header>
        <div class="drawer-body">
          <slot />
        </div>
      </div>
    </transition>
  </teleport>
</template>
