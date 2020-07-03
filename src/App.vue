<!--
 * @Description:
 * @Author: mhyu
 * @Date: 2020-07-03 17:25:01
 * @LastEditors: mhyu
 * @LastEditTime: 2020-07-03 18:01:50
-->
<template>
  <div id="app">
    <div @click="change('custom-theme-blue')">蓝色</div>
    <div @click="change('custom-theme-green')">绿色</div>
    <div id="test" class="test"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    change(className) {
      let element = document.body;
      if (!element || !className) {
        return;
      }
      let classString = element.className;
      const nameIndex = classString.indexOf(className);
      if (nameIndex === -1) {
        classString = '' + className;
      }
      else {
        return;
      }
      element.className = classString;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
