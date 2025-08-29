<template>
  <div>
    <div class="table-toolbar" v-if="hasToolbar">
      <div class="table-toolbar-left">
        <slot name="toolbarBtn"></slot>
      </div>
      <div class="table-toolbar-right flex-center">
        <template v-if="multipleSelection.length > 0">
          <el-tooltip effect="dark" content="Delete Selected" placement="top">
            <el-icon class="columns-setting-icon" @click="delSelection(multipleSelection)">
              <Delete />
            </el-icon>
          </el-tooltip>
          <el-divider direction="vertical" />
        </template>
        <el-tooltip effect="dark" content="Refresh" placement="top">
          <el-icon class="columns-setting-icon" @click="refresh">
            <Refresh />
          </el-icon>
        </el-tooltip>
        <el-divider direction="vertical" />
        <el-tooltip effect="dark" content="Column Settings" placement="top">
          <el-dropdown :hide-on-click="false" size="small" trigger="click">
            <el-icon class="columns-setting-icon">
              <Setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="c in columns" :key="c.prop">
                  <el-checkbox v-model="c.visible" :label="c.label" />
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-tooltip>
      </div>
    </div>

    <!-- Table -->
    <el-table
      class="mgb20"
      :style="{ width: '100%' }"
      border
      :data="tableData"
      :row-key="rowKey"
      @selection-change="handleSelectionChange"
      table-layout="auto"
    >
      <template v-for="item in columns" :key="item.prop">
        <el-table-column
          v-if="item.visible"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :type="item.type"
          :align="item.align || 'center'"
        >
          <!-- Merge default slots -->
          <template #default="{ row, $index }">
            <!-- Index column -->

            <span v-if="item.type === 'index'">
              {{ getIndex($index) }}
            </span>
            <!-- Regular column -->
            <template v-else>
              <slot :name="item.prop" :row="row" :index="$index">
                <!-- Actions column -->
                <template v-if="item.prop === 'operator'">
                  <el-button type="warning" size="small" :icon="View" @click="viewFunc(row)">
                    View
                  </el-button>
                  <el-button type="primary" size="small" :icon="Edit" @click="editFunc(row)">
                    Edit
                  </el-button>
                  <el-button type="danger" size="small" :icon="Delete" @click="handleDelete(row)">
                    Delete
                  </el-button>
                </template>

                <!-- Format -->
                <span v-else-if="item.formatter">
                  {{ item.formatter(row[item.prop]) }}
                </span>

                <!-- Default value -->
                <span v-else>
                  {{ row[item.prop] }}
                </span>
              </slot>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- Pagination -->
    <el-pagination
      v-if="hasPagination"
      :current-page="currentPage"
      :page-size="pageSize"
      :background="true"
      :layout="layout"
      :total="total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script setup lang="ts">
import { toRefs, type PropType, ref } from 'vue'
import { Delete, Edit, View, Refresh, Setting } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const props = defineProps({
  // Table related
  tableData: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  columns: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  rowKey: {
    type: String,
    default: 'id',
  },
  hasToolbar: {
    type: Boolean,
    default: true,
  },
  // Pagination related
  hasPagination: {
    type: Boolean,
    default: true,
  },
  total: {
    type: Number,
    default: 0,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  layout: {
    type: String,
    default: 'total, prev, pager, next',
  },
  delFunc: {
    type: Function,
    default: () => {},
  },
  viewFunc: {
    type: Function,
    default: () => {},
  },
  editFunc: {
    type: Function,
    default: () => {},
  },
  delSelection: {
    type: Function,
    default: () => {},
  },
  refresh: {
    type: Function,
    default: () => {},
  },
  changePage: {
    type: Function,
    default: () => {},
  },
})

const {
  tableData,
  columns,
  rowKey,
  hasToolbar,
  hasPagination,
  total,
  currentPage,
  pageSize,
  layout,
} = toRefs(props)

// Initialize visible property
columns.value.forEach((item) => {
  if (item.visible === undefined) {
    item.visible = true
  }
})

// Multiple selection
const multipleSelection = ref<any[]>([])
const handleSelectionChange = (selection: any[]) => {
  multipleSelection.value = selection
}

// Page change
const handleCurrentChange = (val: number) => {
  props.changePage(val)
}

// Delete
const handleDelete = (row: any) => {
  ElMessageBox.confirm('Are you sure you want to delete?', 'Confirm', {
    type: 'warning',
  })
    .then(() => {
      props.delFunc(row)
    })
    .catch(() => {})
}

// Custom index
const getIndex = (index: number) => {
  return index + 1 + (currentPage.value - 1) * pageSize.value
}
</script>

<style scoped>
.table-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;
}

.columns-setting-icon {
  display: block;
  font-size: 18px;
  cursor: pointer;
  color: #676767;
}
</style>

<style>
.table-header .cell {
  color: #333;
}
</style>
