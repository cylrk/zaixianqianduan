<template>
  <div class="app-container">
    课程列表

    <!--查询课程表单-->
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input v-model="courseQuery.name" placeholder="课程名称"/>
      </el-form-item>

      <el-form-item>
        <el-select v-model="courseQuery.status" clearable placeholder="课程是否已发布">
          <el-option :value="Normal" label="已经发布"/>
          <el-option :value="Draft" label="未发布"/>
        </el-select>
      </el-form-item>

      <el-form-item label="添加时间">
        <el-date-picker
          v-model="courseQuery.begin"
          type="datetime"
          placeholder="选择开始时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="courseQuery.end"
          type="datetime"
          placeholder="选择截止时间"
          value-format="yyyy-MM-dd HH:mm:ss"
          default-time="00:00:00"
        />
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>
    <!-- 表格 -->
    <el-table
      
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">

          {{ (page - 1) * limit + scope.$index + 1 }}

        </template>

      </el-table-column>
      <el-table-column prop="title" label="课程名称" width="80" />
      <el-table-column label="是否发布" width="80">
        <template slot-scope="scope">
          {{ scope.row.status==="Normal" ? '已发布':'未发布'}}
        </template>
      </el-table-column>
      <el-table-column prop="buyCount" label="访问量" />
      <el-table-column prop="gmtCreate" label="添加时间" width="160"/>
      <el-table-column prop="price" label="价格" width="60" />

      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <router-link :to="'/tea/update/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">编辑课程大纲信息</el-button>

          </router-link>
          <router-link :to="'/tea/update/'+scope.row.id">

            <el-button type="primary" size="mini" icon="el-icon-edit">编辑课程基本信息</el-button>

          </router-link>

          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
          

        </template>

      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>
<script>


import course from '@/api/sub/course/course'
export default {
  data() {// 定义数据
      return {
      list: null, // 数据列表
      listLoading: true,
      total: 0, // 总记录数
      page: 1, // 页码
      limit: 10, // 每页记录数
      courseQuery: {}// 查询条件
      }
  },
created() { // 当页面加载时获取数据
    this.getCourseList()
  },
methods: {
    getCourseList() { // 调用api层获取数据库中的数据
      //console.log('加载列表')
      //this.page = page
      //this.listLoading = true
      course.getAllCourse().then(response => {
        //debugger 设置断点调试
        if (response.success === true) {
          this.list = response.data.allCourse
          //this.total = response.data.total
        }
        this.listLoading = false
      
      })
    },
    
    resetData(){
      this.teacherQuery={}
      this.getCourseList()
    },
    //删除课程记录的方法
        removeDataById(id) {
            this.$confirm('此操作将永久删除课程记录, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {  //点击确定，执行then方法
                //调用删除的方法
                course.deleteById(id)
                    .then(response =>{//删除成功
                    //提示信息
                    this.$message({
                        type: 'success',
                        message: '删除课程全部信息成功!'
                    });
                    //回到列表页面
                    this.getCourseList()
                })
            }) //点击取消，执行catch方法
        }
    

  }
}

</script>