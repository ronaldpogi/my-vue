import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  // state
  const collapse = ref(false)
  const bgColor = ref(localStorage.getItem('sidebar-bg-color') || '#324157')
  const textColor = ref(localStorage.getItem('sidebar-text-color') || '#bfcbd9')

  // actions
  function handleCollapse() {
    collapse.value = !collapse.value
  }

  function setBgColor(color: string) {
    bgColor.value = color
    localStorage.setItem('sidebar-bg-color', color)
  }

  function setTextColor(color: string) {
    textColor.value = color
    localStorage.setItem('sidebar-text-color', color)
  }

  // return state + actions
  return {
    collapse,
    bgColor,
    textColor,
    handleCollapse,
    setBgColor,
    setTextColor,
  }
})
