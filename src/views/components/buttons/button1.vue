<template>
    <div id="method">
        <p>Original message原信息: {{message}}</p>
        <p>Computed计算属性: "{{computed_fun}}"</p>
        <p>method方法调用: "{{method_fun()}}"</p>
        <button v-on:click="method_fun1">click here</button>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      message: 'welcome'
    }
  },
  /* 或者 */
  /*
    data: function() {
         return {
             message: 'Hello'
        }
     },
     */
  /* 计算属性 */
  computed: {
    computed_fun: function () {
      return this.message.split('').reverse().join('')
    }
  },
  /* 方法 */
  methods: {
    method_fun: function () {
      return this.message.split('').reverse().join('')
    },
    method_fun1: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
p {
    display: block;
    background: #77ffff;
}
</style>
