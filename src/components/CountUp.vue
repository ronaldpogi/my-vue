<template>
  <span ref="countRef"></span>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { CountUp, type CountUpOptions } from 'countup.js'

// Props typing
const props = defineProps<{
  end: number
  options?: CountUpOptions
}>()

// Ref to DOM element
const countRef = ref<HTMLSpanElement | null>(null)

// Properly typed CountUp instance
let countUp: CountUp | null = null

onMounted(() => {
  if (countRef.value) {
    countUp = new CountUp(countRef.value, props.end, props.options ?? {})
    if (countUp.error) {
      console.error(countUp.error)
      return
    }
    countUp.start()
  }
})

// Watch for changes
watch(
  () => props.end,
  (newVal) => {
    if (countUp) {
      countUp.update(newVal)
    }
  },
)
</script>
