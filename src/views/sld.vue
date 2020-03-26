<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
    <el-form-item label="地图元素" prop="selectedOptions">
      <el-cascader :options="MapElement" v-model="ruleForm.selectedOptions" :clearable="true" @change="handleChange">
      </el-cascader>
    </el-form-item>

    <el-form-item label="几何属性">
      <el-col :span="11">
        <span class="demonstration">（如道路线的边框和填充项）</span>
      </el-col>
    </el-form-item>
    <el-form-item label="">
      <el-col :span="4">
        <span class="demonstration">边框颜色</span>
      </el-col>
      <el-col :span="4">
        <el-color-picker v-model="ruleForm.geoBorderColor" size="small"></el-color-picker>
      </el-col>
      <el-col :span="4">
        <span class="demonstration">填充颜色</span>
      </el-col>
      <el-col :span="4">
        <el-color-picker v-model="ruleForm.geoFillColor" size="small"></el-color-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="文本属性">
      <el-col :span="11">
        <span class="demonstration">（如道路名称颜色）</span>
      </el-col>
    </el-form-item>
    <el-form-item label="">
      <el-col :span="4">
        <span class="demonstration">边框颜色</span>
      </el-col>
      <el-col :span="4">
        <el-color-picker v-model="ruleForm.txtBorderColor" size="small"></el-color-picker>
      </el-col>
      <el-col :span="4">
        <span class="demonstration">填充颜色</span>
      </el-col>
      <el-col :span="4">
        <el-color-picker v-model="ruleForm.txtFillColor" size="small"></el-color-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="亮度" prop="lightness">
      <el-col :span="16">
        <el-slider v-model="ruleForm.lightness" show-input input-size="mini"></el-slider>
      </el-col>
    </el-form-item>
    <el-form-item label="饱和度" prop="saturation">
      <el-col :span="16">
        <el-slider v-model="ruleForm.saturation" show-input input-size="mini"></el-slider>
      </el-col>
    </el-form-item>
    <el-form-item label="宽度" prop="weight">
      <el-col :span="16">
        <el-slider v-model="ruleForm.weight" show-input input-size="mini" :max="10"></el-slider>
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
/* eslint-disable */
import { MapElement } from '../assets/js/mapElement.js'

export default {
  name: 'SLD',
  data () {
    return {
      /*数据源*/
		  MapElement: MapElement,//地区数据
      ruleForm: {
        city : '',
        area : '',
        minarea : '',
        selectedOptions: [],//地区筛选数组
                
        geoBorderColor: '#27BC56',
        geoFillColor: '#5465C6',
        txtBorderColor: '#C84359',
        txtFillColor: '#CCD340',
        lightness: 10,
        saturation: 20,
        weight: 5    
      },
      rules: {
        selectedOptions: [
          { type: 'array', required: true, message: '请选择地图元素', trigger: 'change' }
        ],
      }     
    }
  },
  /* 方法 */
  methods: {
    handleChange: function() {
      this.ruleForm.city = this.ruleForm.selectedOptions[0];
			this.ruleForm.area = this.ruleForm.selectedOptions[1];
			this.ruleForm.minarea = this.ruleForm.selectedOptions[2];
    },
    submitForm: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(JSON.stringify(this.ruleForm));
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  form {
    width: 60%;
  }
</style>
