<template>
  <div class="search-container">
    <el-form ref="searchRef" :model="query" :inline="true">
      <el-form-item :label="item.label" :prop="item.prop" v-for="item in options" :key="item">
        <!-- Text input, dropdown, date picker -->
        <el-input
          v-if="item.type === 'input'"
          v-model="localQuery[item.prop]"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
          clearable
        ></el-input>
        <el-select
          v-else-if="item.type === 'select'"
          v-model="localQuery[item.prop]"
          :disabled="item.disabled"
          :placeholder="item.placeholder"
          clearable
        >
          <el-option
            v-for="opt in item.opts"
            :label="opt.label"
            :value="opt.value"
            :key="opt"
          ></el-option>
        </el-select>
        <el-date-picker
          v-else-if="item.type === 'date'"
          type="date"
          v-model="localQuery[item.prop]"
          :value-format="item.format"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Search" @click="search">Search</el-button>
        <el-button :icon="Refresh" @click="resetForm(searchRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { type FormInstance } from 'element-plus'
import { Search, Refresh } from '@element-plus/icons-vue'
import { type PropType, ref, reactive, watch } from 'vue'
import { type FormOptionList } from '@/types/form-options'

const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
  options: {
    type: Array as PropType<Array<FormOptionList>>,
    required: true,
  },
  search: {
    type: Function,
    default: () => {},
  },
})

const emit = defineEmits<{
  (e: 'update:query', value: Record<string, any>): void
}>()

// ✅ local reactive copy
const localQuery = reactive({ ...props.query })

// sync parent → child
watch(
  () => props.query,
  (newVal) => {
    Object.assign(localQuery, newVal)
  },
  { deep: true },
)

// sync child → parent
watch(
  localQuery,
  (newVal) => {
    emit('update:query', { ...newVal })
  },
  { deep: true },
)

const searchRef = ref<FormInstance>()
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  props.search()
}
</script>

<style scoped>
.search-container {
  padding: 20px 30px 0;
  background-color: #fff;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
