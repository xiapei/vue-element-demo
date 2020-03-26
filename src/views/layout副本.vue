<template>
  <div>
    <el-container style="height: 904px; border: 1px solid #eee">
      <el-aside width="205px" style="background-color: #304156">
          <!-- <el-menu :default-openeds="['1', '3']" :default-active="$route.path" router> -->
          <el-menu :default-active="$route.path" router v-show="isCollapse" unique-opened
            background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item index="/">
              <i class="iconfont-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont-menu"></i>
                <span slot="title">Components</span>
              </template>
                <el-menu-item index="/button">Button</el-menu-item>
                <el-menu-item index="/button_hover">Button-hover</el-menu-item>
                <el-menu-item index="/select">Select</el-menu-item>
                <el-submenu index="1-4">
                  <template slot="title">Buttons</template>
                  <el-menu-item index="/button1">Button1</el-menu-item>
                  <el-menu-item index="/button2">Button2</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="iconfont-table"></i>
                <span slot="title">Tables</span>
              </template>
                <el-menu-item index="/table">Table</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="iconfont-chart"></i>
                <span slot="title">Charts</span>
              </template>
                <el-menu-item index="/echarts">Echarts</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="iconfont-menu"></i>
                <span slot="title">Forms</span>
              </template>
                <el-menu-item index="/basicForm">BasicForm</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="iconfont-theme"></i>
                <span slot="title">others</span>
              </template>
                <el-menu-item index="/sld">SLD</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
      <el-container>
        <el-header style="font-size: 20px;height: 50px;">
          <!-- <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger> -->
          <!-- 面包屑 -->
          <breadcrumb class="breadcrumb-container"></breadcrumb>
        </el-header>
        <el-main>
          <router-view class="view"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
// import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/views/Breadcrumb'
export default {
  components: {
    // Hamburger,
    Breadcrumb
  },
  name: 'index',
  data: function (){
    return {
      isCollapse: true
    };
  },
  methods: {
    // toggleSideBar () {
    //   this.$store.dispatch('toggleSideBar')
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 body {
  margin: -1px;
  overflow-x: hidden;
}

.el-header {
  background-color: #FFF;
  color: #333;
  line-height: 50px;
  border-bottom: solid 1px #e6e6e6;   
  }
.el-menu-item i,
.el-submenu__title i,
.el-menu-item [class^=el-icon-],
.el-submenu [class^=el-icon-] {
    color: #fff;
}

/* .hamburger-container {
  line-height: 58px;
  height: 50px;
  float: left;
  padding: 0 10px;
} */

.breadcrumb-container{
  float: left;
}
</style>
