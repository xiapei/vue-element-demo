<template>
  <section>
   <span>Cascader 级联选择器</span>
    <el-cascader :options="MapElement" v-model="selectedOptions" :clearable="true" @change="handleChange">
    </el-cascader>
  </section>
</template>

<script>
/* eslint-disable */
import { MapElement } from '../../assets/js/mapElement.js'

export default {
  name: 'Select',
  data () {
    return {
      /*数据源*/
      MapElement: MapElement,//地区数据
      city : '',
      area : '',
      minarea : '',
      selectedOptions: [],//地区筛选数组
    }
  },
  /* 方法 */
  methods: {
    handleChange: function() {
      this.city = this.selectedOptions[0];
			this.area = this.selectedOptions[1];
			this.minarea = this.selectedOptions[2];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
