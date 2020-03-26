<template>
  <div>
    <ul id="example-1">
      <li v-for="item in items" :key='item.message'>
        {{ item.message }}
      </li>
      <li v-for="(item,index) in items2" :key='item.message'>
        {{index}} - {{ item.message }}
      </li>
      <li v-for="(value, key, index) in object" :key='value'>
        {{ index }}. {{ key }}: {{ value }}
      </li>
      <li v-for="n in even(numbers)" :key='n'>
        {{ n }}
      </li>
    </ul>
    <p>
      <span v-for='n in 10' :key='n'>{{ n }}</span>
    </p>
    <h2>Button</h2>
    <button v-on:click="counter +=1">Count</button>
    <p>The button has been clicked {{ counter }} times</p>
    <button v-on:click="greet">Greet</button>
    <button v-on:click="say('Hi')">Say hi</button>
    <button v-on:click="say('What')">Say what</button>
    <button v-on:click="warn('Form cannot be submitted yet.',$event)">Submit</button>
    <h2>Input</h2>
    <div>
      <input v-model="inputMsg" placeholder="edit me">
      <br>
      <span>inputMessage is: {{ inputMsg }}</span>

      <h3>.lazy修饰符</h3>
      <!-- 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步
      添加lazy修饰符转变为使用change事件进行同步 -->
      <!-- 在"change"时而非"input"时更新  -->
      <input v-model.lazy="inputMsg">

      <h3>.number修饰符</h3>
      <!-- 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符 -->
      <input v-model.number="inputMsg" type="number">

      <h3>.trim修饰符</h3>
      <!-- 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符 -->
      <input v-model.trim="inputMsg">

    </div>
    <div>
      <h3>Textarea</h3>
      <span>Multiline message is:{{ textareaMsg }}</span>
      <br>
      <textarea v-model="textareaMsg" placeholder="add multiple lines"></textarea>
    </div>
    <h2>Checkbox</h2>
    <div>
      <input type="checkbox" id="checkbox" v-model="singleChecked">
      <label for="checkbox">{{ singleChecked }}</label>
    </div>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="multiCheckedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="multiCheckedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="multiCheckedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Multi Checked names: {{ multiCheckedNames }}</span>
    </div>
    <div id="example-4">
      <h2>Radio</h2>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-5">
      <h2>Select</h2>
      <select v-model="singleSelected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>singleSelected: {{ singleSelected }}</span>
    </div>
    <div id="example-6">
      <h2>Multi Select</h2>
      <select v-model="multiSelected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Multi Selected: {{ multiSelected }}</span>

      <h2>Dynamic Select</h2>
      <select v-model="dynamicSelected">
        <option v-for="option in options" v-bind:value="option.value" :key='option'>
          {{ option.text }}
        </option>
      </select>
      <br>
      <span>Dynamic Selected: {{ dynamicSelected }}</span>
    </div>
    <div>
      <h2>Toggle</h2>
      <button v-on:click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <h3>css过渡</h3>
      <button @click="show = !show">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show">render</p>
      </transition>

      <h3>css动画</h3>
      <button @click="show = !show">Toggle show</button>
      <transition name="bounce">
        <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </transition>
      <h3>自定义过渡的类名</h3>
      <button @click="show = !show">Toggle render</button>
      <transition
        name="custom-classes-transition"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight">
          <p v-if="show">自定义过渡的类名</p>
      </transition>
    </div>
    <div>
      <h2>组件</h2>
      <h3>父组件使用 props 传递数据给子组件</h3>
      <input v-model="parentMsg">
      <br>
      <child v-bind:message="parentMsg"></child>
      <br>
      <ol>
        <todo-item v-for="item in sites" v-bind:todo="item" :key='item'></todo-item>
      </ol>
      <h3>子组件要把数据传递给父组件，就需要使用自定义事件</h3>
      <p>{{ total }}</p>
      <button-counter v-on:increment="incrementTotal"></button-counter>
    </div>
    <div>
      <h2>Vue自定义指令</h2>
      <h3>注册 v-focus 指令</h3>
      <p>页面载入时，input 元素自动获取焦点：</p>
      <input v-focus value="自动获取焦点">
      <h3>钩子函数的参数使用</h3>
      <div v-runoob:hello.a.b="params"></div>
      <h3>只需要一个钩子函数时，可以简写函数</h3>
      <div v-setColor="{color: 'grey',text: 'welcome to Vue!'}"></div>
    </div>
    <div>
      <p>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
var childOption = {
  //声明props
  props: ['message'],
  //同样也可以在vm实例中像"this.message" 这样使用
  template: '<span>{{message}}</span>'
}
var todoOption = {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
}
var counterOption = {
  props: ['increment'],
  template: '<button v-on:click="incrementHandler">{{counter}}</button>',
  data: function() {
    return {
      counter: 0
    }
  },
  methods: {
    incrementHandler: function() {
      this.counter += 1
      this.$emit('increment')
    }
  }
}
//注册
Vue.component('child',childOption)
Vue.component('todo-item',todoOption)
Vue.component('button-counter',counterOption)
// 注册一个全局自定义指令 v-focus
Vue.directive('focus',{
  // 当绑定元素插入到DOM中
  inserted: function(el) {
    //聚焦元素
    el.focus()
  }
})
Vue.directive('runoob',{
  bind: function (el,binding,vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name:' + s(binding.name) + '<br>' +
      'value:' + s(binding.value) + '<br>' +
      'expression:' + s(binding.expression) + '<br>' +
      'argument:' + s(binding.arg) + '<br>' +
      'modifiers:' + s(binding.modifiers) + '<br>' //+
      // 'vnode keys:' + Object.keys(vnode).join(', ')
  }
})
Vue.directive('setColor',function(el,binding) {
  el.innerHTML = binding.value.text
  el.style.background = binding.value.color
})

export default {
  // data必须是函数
  data: function () {
    return {
      items: [
        { message: 'one' },
        { message: 'two' }
      ],
      items2: [
        { message: 'items1' },
        { message: 'items2' }
      ],
      object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      },
      numbers: [ 1, 2, 3, 4, 5 ],
      counter: 0,
      name: 'Vue',
      inputMsg: '',
      textareaMsg: '',
      singleChecked: false,
      multiCheckedNames: [],
      picked: '',
      singleSelected: '',
      multiSelected: [],

      dynamicSelected: "A",
      options: [
        { text: "One", value: 'A' },
        { text: "Two", value: 'B' },
        { text: "Three", value: 'C' }
      ],
      show: true,
      parentMsg: '父组件内容',
      sites: [
        { text: 'Runoob' },
        { text: 'Google' },
        { text: 'Taobao' }
      ],
      total: 0,
      params: "welcome to xi'an"
    }
  },
  /* 计算属性 */
  // computed: {
  //   enenNumbers: function () {
  //     return this.numbers.filter(function (number) {
  //       return number % 2 === 0
  //     })
  //   }
  // },
  /* 方法 */
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    },
    greet: function (event) {
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    },
    incrementTotal: function() {
      this.total += 1
    }
  }
}
</script>

<style scoped>
p {
    /* display: block;
    background: #77ffff; */
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
/* 第三方 CSS 动画库 */
@import '../../assets/css/animate.css';
</style>
