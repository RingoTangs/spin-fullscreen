<script setup lang="ts">
import SpinFullscreen from '@ringotangs/spin-fullscreen-vue'

const handleClick = () => {
 SpinFullscreen.show()
 window.setTimeout(() => {
   SpinFullscreen.hide()
   console.log('hide')
 }, 3000)
}

</script>

<template>
  <div style="height: 2000px;">
    <button type="button" @click="handleClick">
      Button
    </button>
  </div>
</template>
