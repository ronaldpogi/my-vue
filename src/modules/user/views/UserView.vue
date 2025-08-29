<template>
  <div>
    <TableSearch v-model:query="query" :options="searchOpt" :search="handleSearch" />
    <div class="container">
      <MainTable
        :columns="columns"
        :tableData="tableData"
        :total="page.total"
        :viewFunc="handleView"
        :delFunc="handleDelete"
        :page-change="changePage"
        :editFunc="handleEdit"
      >
        <template #toolbarBtn>
          <el-button type="warning" :icon="CirclePlusFilled" @click="visible = true"
            >Add New</el-button
          >
        </template>
      </MainTable>
    </div>
    <el-dialog
      :title="isEdit ? 'Edit' : 'Add New'"
      v-model="visible"
      width="700px"
      destroy-on-close
      :close-on-click-modal="false"
      @close="closeDialog"
    >
      <TableEdit :form-data="rowData" :options="options" :edit="isEdit" :update="updateData" />
    </el-dialog>
    <el-dialog title="View Details" v-model="visible1" width="700px" destroy-on-close>
      <TableDetail :data="viewData"></TableDetail>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="system-user">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { CirclePlusFilled } from '@element-plus/icons-vue'
import { type User } from '@/types/user'
import { fetchUserData } from '@/api'
import MainTable from '@/components/MainTable.vue'
import TableDetail from '@/components/TableDetail.vue'
import TableSearch from '@/components/TableSearch.vue'
import TableEdit from '@/components/TableEdit.vue'
import { type FormOption, type FormOptionList } from '@/types/form-options'

// Search related
const query = reactive({
  name: '',
})
const searchOpt = ref<FormOptionList[]>([{ type: 'input', label: 'Username:', prop: 'name' }])
const handleSearch = () => {
  changePage(1)
}

// Table related
const columns = ref([
  { type: 'index', label: 'No.', width: 55, align: 'center' },
  { prop: 'name', label: 'Username' },
  { prop: 'phone', label: 'Phone' },
  { prop: 'role', label: 'Role' },
  { prop: 'operator', label: 'Actions', width: 250 },
])
const page = reactive({
  index: 1,
  size: 10,
  total: 0,
})
const tableData = ref<User[]>([])
const getData = async () => {
  const res = await fetchUserData()
  tableData.value = res.data.list
  page.total = res.data.pageTotal
}
getData()

const changePage = (val: number) => {
  page.index = val
  getData()
}

// Add/Edit dialog related
const options = ref<FormOption>({
  labelWidth: '100px',
  span: 12,
  list: [
    { type: 'input', label: 'Username', prop: 'name', required: true },
    { type: 'input', label: 'Phone', prop: 'phone', required: true },
    { type: 'input', label: 'Password', prop: 'password', required: true },
    { type: 'input', label: 'Email', prop: 'email', required: true },
    { type: 'input', label: 'Role', prop: 'role', required: true },
  ],
})
const visible = ref(false)
const isEdit = ref(false)
const rowData = ref({})
const handleEdit = (row: User) => {
  rowData.value = { ...row }
  isEdit.value = true
  visible.value = true
}
const updateData = () => {
  closeDialog()
  getData()
}

const closeDialog = () => {
  visible.value = false
  isEdit.value = false
}

// View details dialog related
const visible1 = ref(false)
const viewData = ref({
  row: {},
  title: '',
  list: [
    {
      prop: '',
      label: '',
    },
  ],
})
const handleView = (row: User) => {
  viewData.value.row = { ...row }
  viewData.value.list = [
    {
      prop: 'id',
      label: 'User ID',
    },
    {
      prop: 'name',
      label: 'Username',
    },
    {
      prop: 'password',
      label: 'Password',
    },
    {
      prop: 'email',
      label: 'Email',
    },
    {
      prop: 'phone',
      label: 'Phone',
    },
    {
      prop: 'role',
      label: 'Role',
    },
    {
      prop: 'date',
      label: 'Registration Date',
    },
  ]
  visible1.value = true
}

// Delete related
const handleDelete = (row: User) => {
  console.log(row)
  ElMessage.success('Delete successful')
}
</script>

<style scoped></style>
