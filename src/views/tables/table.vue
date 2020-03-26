<template>
  <div id="tableDemo">
    <el-table :data="users" border v-loading="listLoading" style="width: 96%;height: 90%;">
      <el-table-column type="index" label="ID" width="60"></el-table-column>
      <el-table-column prop="name" label="姓名" width="100"></el-table-column>
      <el-table-column prop="sex" label="性别" width="80" :formatter="formatSex"></el-table-column>
      <el-table-column prop="age" label="年龄" width="60"></el-table-column>
      <el-table-column prop="birth" label="生日" width="150"></el-table-column>
      <el-table-column prop="addr" label="地址" width="250"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="mini"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
        :page-size="10" :total="total" style="float:right;">
      </el-pagination>
    </el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" :visible.sync="editFormVisible">
      <el-form :model="editForm" ref="editForm" :rules="editFormRules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="editForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="80"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="editForm.birth" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="地址">
          <el-input v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editSubmit" :loading="editLoading">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import util from '../../common/js/util'
import { getUserListPage, removeUser, editUser } from '../../api/api';
export default { 
  data () {
    return {
      filters: {
        name: ''
      },
      users: [],
      total: 0,
      page: 1,
      listLoading: false,
      editFormVisible: false,//编辑界面是否显示
      editLoading: false,
      editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
      //编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},
    }
  },
  /* 方法 */
  methods: {
    //性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers() {
				let para = {
					page: this.page,
					name: this.filters.name
				};
				this.listLoading = true;
				//NProgress.start();
				getUserListPage(para).then((res) => {
					this.total = res.data.total;
					this.users = res.data.users;
					this.listLoading = false;
					//NProgress.done();
				});
			},
			//显示编辑界面
			handleEdit: function (index, row) {
				this.editFormVisible = true;
				this.editForm = Object.assign({}, row);
      },
      //编辑
			editSubmit: function () {
				this.$refs.editForm.validate((valid) => {
					if (valid) {
						//this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;							
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						//});
					}
				});
			},
			//删除
			handleDelete: function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			}
  },
		mounted() {
			this.getUsers();
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#tableDemo .el-dialog {
  width: 35%;
}
#tableDemo .el-dialog__header {
  padding: 10px;
  background-color: #409eff;
}
#tableDemo .el-dialog__title {
  font-size: 16px;
  color: #fff;
}
#tableDemo .el-dialog__headerbtn {
  top: 15px;
}
#tableDemo .el-dialog__headerbtn .el-dialog__close {
  color: #fff;
}
#tableDemo .el-dialog__body {
  padding-bottom: 0px;
}
#tableDemo .el-form-item__label {
  width: 25%;
  padding-right: 15px;
}
#tableDemo .el-input {
  width: 65%;
}
#tableDemo .pagination-container {
  margin: 20px auto;
}
</style>
