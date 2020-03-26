<template>
  <section class="buttonContainer">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info" size="medium">信息按钮</el-button>
      <el-button type="warning" size="small">警告按钮</el-button>
      <el-button type="danger" size="mini">危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain size="medium">信息按钮</el-button>
      <el-button type="warning" plain size="small">警告按钮</el-button>
      <el-button type="danger" plain size="mini">危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round size="medium">信息按钮</el-button>
      <el-button type="warning" round size="small">警告按钮</el-button>
      <el-button type="danger" round size="mini">危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled size="medium">信息按钮</el-button>
      <el-button type="warning" disabled size="small">警告按钮</el-button>
      <el-button type="danger" disabled size="mini">危险按钮</el-button>
    </el-row>
    <br>
    <el-row>
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
      <el-button type="primary" :loading="true">加载中</el-button>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <br>
    <el-row>
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-button-group>
    </el-row>
  </section>
</template>

<script>
/* eslint-disable */
export default { 
  data () {
    return {
      
    }
  },
  /* 方法 */
  methods: {
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
