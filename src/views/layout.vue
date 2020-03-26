<template>
  <div>
    <el-container style="height: 904px; border: 1px solid #eee">
      <el-aside width="205px" style="background-color: #304156">
          <!-- <el-menu :default-openeds="['1', '3']" :default-active="$route.path" router> -->
          <el-menu :default-active="$route.path" router v-show="isCollapse" unique-opened
            background-color="#304156" text-color="#fff" active-text-color="#ffd04b">
             <el-submenu v-for="item in menu" :index="item.id" :key="item.id">
              <template slot="title">
                <i v-bind:class="item.icon"></i>
                <span v-text="item.name"></span>
              </template>
                <el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.componentName">
                  <el-submenu v-if="sub.sub" index="1-4">
                    <template slot="title">
                      <i v-bind:class="sub.icon"></i>
                      <span v-text="sub.name"></span>
                    </template>
                    <el-menu-item-group class="over-hide" v-for="sub1 in sub.sub" :key="sub1.componentName">
                      <el-menu-item :index="sub1.componentName" v-text="sub1.name">
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item v-else :index="sub.componentName" v-text="sub.name">
                  </el-menu-item>
               </el-menu-item-group>
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
import menu from '@/config/config-menu'

export default {
  components: {
    // Hamburger,
    Breadcrumb
  },
  name: 'index',
  data () {
    return {
      isCollapse: true,
      menu: menu
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
